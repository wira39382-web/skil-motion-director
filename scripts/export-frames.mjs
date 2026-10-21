import {resolve} from 'node:path';
import {number,freshDirectory,withPage,saveReport} from './lib/capture.mjs';
const [input,out,fpsValue='30']=process.argv.slice(2);
try{
 if(!input||!out)throw Error('Usage: node scripts/export-frames.mjs <index.html|URL> <empty-output-folder> [fps=30]');
 const fps=number(fpsValue,'fps',1,60);if(!Number.isInteger(fps))throw Error('fps must be integer');
 await freshDirectory(out);
 await withPage(input,async({page,size,seek,remote})=>{
 const count=Math.ceil(size.duration*fps);
 for(let i=0;i<count;i++){
 await seek(i/fps);await page.screenshot({path:resolve(out,`f${String(i).padStart(5,'0')}.png`),clip:{x:0,y:0,width:size.width,height:size.height}});
 }
 await saveReport(out,{type:'frames',...size,fps,count,remoteDependencies:[...remote],containsAudio:false,complete:true});
 });
 console.log('Frames ready; encode separately. HTML audio is not captured.');
}catch(e){console.error(e.message);process.exitCode=1;}
