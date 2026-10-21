import {mkdir,readdir,writeFile} from 'node:fs/promises';
import {resolve} from 'node:path';
import {pathToFileURL} from 'node:url';

export function number(value,name,min,max){
 const n=Number(value);if(!Number.isFinite(n)||n<min||n>max)throw Error(`${name} must be ${min}..${max}`);return n;
}
export function dimensions(a){
 return {width:Math.round(number(a.W,'W',16,7680)),height:Math.round(number(a.H,'H',16,7680)),duration:number(a.DURATION,'DURATION',.01,120)};
}
export function projectURL(input){
 const u=/^(file|https?):/.test(input)?new URL(input):pathToFileURL(resolve(input));
 if(!['file:','http:','https:'].includes(u.protocol))throw Error('Unsupported URL');
 u.searchParams.set('clean','1');return u.href;
}
export async function freshDirectory(dir){
 await mkdir(dir,{recursive:true});if((await readdir(dir)).length)throw Error(`Output must be empty: ${dir}`);
}
export async function withPage(input,fn){
 const {chromium}=await import('playwright');
 const browser=await chromium.launch({headless:true});
 const errors=[],failures=[],remote=new Set();
 try{
 const page=await browser.newPage();
 page.on('pageerror',e=>errors.push(e.message));
 page.on('requestfailed',r=>failures.push(r.url()));
 page.on('request',r=>{if(/^https?:/.test(r.url()))remote.add(r.url());});
 page.on('response',r=>{if(r.status()>=400)failures.push(`${r.status()} ${r.url()}`);});
 await page.goto(projectURL(input),{waitUntil:'load',timeout:60000});
 await page.waitForFunction(()=>window.OPENER?.ready===true,{timeout:60000});
 await page.evaluate(()=>document.fonts.ready);
 const size=dimensions(await page.evaluate(()=>({W:OPENER.W,H:OPENER.H,DURATION:OPENER.DURATION})));
 await page.setViewportSize({width:size.width,height:size.height});
 await page.evaluate(()=>{if(typeof OPENER.pause==='function')OPENER.pause();else OPENER.tl?.pause();});
 const seek=async time=>{
 number(time,'time',0,size.duration);
 await page.evaluate(async t=>{
 const a=window.OPENER;if(typeof a.seekFrame==='function')await a.seekFrame(t);else if(typeof a.seek==='function')await a.seek(t);else if(a.tl)a.tl.pause(t,false);else throw Error('No seek interface');
 await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));
 const videos=[...document.querySelectorAll('video')];
 if(videos.some(v=>v.error||v.readyState<2))throw Error('Video not ready');
 },time);
 if(errors.length||failures.length)throw Error(JSON.stringify({errors,failures}));
 };
 return await fn({page,size,seek,remote,errors,failures});
 }finally{await browser.close();}
}
export async function saveReport(dir,report){await writeFile(resolve(dir,'capture-report.json'),JSON.stringify(report,null,2)+'\n');}
