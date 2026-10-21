import {readFile,access,mkdir} from 'node:fs/promises';
import {resolve,dirname} from 'node:path';
import {spawnSync} from 'node:child_process';
const [dir,output,audio]=process.argv.slice(2);
try{
 if(!dir||!output)throw Error('Usage: node scripts/encode.mjs <frames-folder> <new-output.mp4> [narration.wav]');
 try{await access(resolve(output));throw Error('Output already exists; choose a new version');}catch(e){if(e.code!=='ENOENT')throw e;}
 const report=JSON.parse(await readFile(resolve(dir,'capture-report.json'),'utf8'));
 if(report.type!=='frames'||!report.complete||!Number.isInteger(report.count)||report.count<1||!Number.isInteger(report.fps)||report.fps<1||report.fps>60)throw Error('Invalid/incomplete frames report');
 if(report.width%2||report.height%2)throw Error('H.264 yuv420p requires even dimensions');
 for(let i=0;i<report.count;i++)await access(resolve(dir,`f${String(i).padStart(5,'0')}.png`));
 await mkdir(dirname(resolve(output)),{recursive:true});
 const args=['-n','-framerate',String(report.fps),'-i',resolve(dir,'f%05d.png')];
 if(audio){
 const q=spawnSync('ffprobe',['-v','error','-show_entries','format=duration','-of','json',resolve(audio)],{encoding:'utf8',timeout:30000});
 if(q.error||q.status!==0)throw Error('Cannot inspect supplied audio');
 const seconds=Number(JSON.parse(q.stdout).format.duration);
 if(!Number.isFinite(seconds)||seconds>report.count/report.fps+.05)throw Error('Audio exceeds visual duration. Retime visuals; narration will not be silently cut.');
 args.push('-i',resolve(audio));
}
 args.push('-map','0:v:0');if(audio)args.push('-map','1:a:0','-af','apad','-c:a','aac');
 args.push('-frames:v',String(report.count),'-t',String(report.count/report.fps),'-c:v','libx264','-pix_fmt','yuv420p','-movflags','+faststart',resolve(output));
 let r=spawnSync('ffmpeg',args,{stdio:'inherit',timeout:600000});if(r.error||r.status!==0)throw Error('FFmpeg failed: '+(r.error?.message||r.status));
 r=spawnSync('ffprobe',['-v','error','-show_format','-show_streams','-of','json',resolve(output)],{encoding:'utf8',timeout:30000});
 if(r.error||r.status!==0)throw Error('FFprobe failed');
 const probe=JSON.parse(r.stdout);const v=probe.streams.find(s=>s.codec_type==='video');const a=probe.streams.find(s=>s.codec_type==='audio');
 if(v?.width!==report.width||v?.height!==report.height||v?.codec_name!=='h264'||(audio&&a?.codec_name!=='aac')||Math.abs(Number(probe.format.duration)-report.count/report.fps)>.2)throw Error('Output metadata mismatch');
 console.log(JSON.stringify({output:resolve(output),metadataChecked:true,audioMuxed:!!audio,warning:audio?'Audio padded to visual duration when needed; listen and confirm sync and pronunciation.':'Silent MP4; no narration was supplied.'},null,2));
}catch(e){console.error(e.message);process.exitCode=1;}
