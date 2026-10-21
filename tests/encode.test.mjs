import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,mkdir,writeFile,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join,resolve} from 'node:path';
import {spawnSync} from 'node:child_process';
const encoder=resolve('scripts/encode.mjs');
const available=spawnSync('ffmpeg',['-version']).status===0&&spawnSync('ffprobe',['-version']).status===0;
test('encoding, explicit audio, long-audio rejection and overwrite protection',{skip:!available},async()=>{
 const d=await mkdtemp(join(tmpdir(),'motion-encode-'));const frames=join(d,'frames');await mkdir(frames);
 const run=(cmd,args)=>{const r=spawnSync(cmd,args,{encoding:'utf8',timeout:30000});assert.equal(r.status,0,r.stderr);return r;};
 try{
 run('ffmpeg',['-v','error','-f','lavfi','-i','color=c=navy:s=64x96:r=5:d=1','-frames:v','5','-start_number','0',join(frames,'f%05d.png')]);
 await writeFile(join(frames,'capture-report.json'),JSON.stringify({type:'frames',complete:true,fps:5,count:5,width:64,height:96}));
 const silent=join(d,'silent.mp4');run('node',[encoder,frames,silent]);
 run('ffmpeg',['-v','error','-f','lavfi','-i','sine=frequency=440:duration=0.8',join(d,'short.wav')]);
 run('node',[encoder,frames,join(d,'sound.mp4'),join(d,'short.wav')]);
 run('ffmpeg',['-v','error','-f','lavfi','-i','sine=frequency=440:duration=2',join(d,'long.wav')]);
 let r=spawnSync('node',[encoder,frames,join(d,'long.mp4'),join(d,'long.wav')],{encoding:'utf8'});assert.equal(r.status,1);assert.match(r.stderr,/exceeds/);
 r=spawnSync('node',[encoder,frames,silent],{encoding:'utf8'});assert.equal(r.status,1);assert.match(r.stderr,/already exists/);
 }finally{await rm(d,{recursive:true,force:true});}
});
