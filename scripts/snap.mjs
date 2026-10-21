import {resolve} from 'node:path';
import {number,freshDirectory,withPage,saveReport} from './lib/capture.mjs';
const [input,out,...raw]=process.argv.slice(2);
try{
 if(!input||!out||!raw.length)throw Error('Usage: node scripts/snap.mjs <index.html|URL> <empty-output-folder> <seconds...>');
 const times=raw.map(x=>number(x,'time',0,120));
 await freshDirectory(out);
 await withPage(input,async({page,size,seek,remote})=>{
 for(let i=0;i<times.length;i++){
 await seek(times[i]);await page.screenshot({path:resolve(out,`shot-${String(i).padStart(3,'0')}.png`),animations:'allow',clip:{x:0,y:0,width:size.width,height:size.height}});
 }
 await saveReport(out,{type:'snapshots',...size,times,remoteDependencies:[...remote],audioInspected:false});
 });
 console.log(`Captured ${times.length} frames to ${out}`);
}catch(e){console.error(e.message);process.exitCode=1;}
