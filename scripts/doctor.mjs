import {spawnSync} from 'node:child_process';
import {existsSync} from 'node:fs';
const result={node:process.version,ffmpeg:false,ffprobe:false,playwright:false,browserBinary:false,browserLaunch:'not_tested',tts:'not_bundled',webSearch:'agent_tool_required'};
for(const cmd of ['ffmpeg','ffprobe']){const r=spawnSync(cmd,['-version'],{encoding:'utf8',timeout:10000});result[cmd]=r.status===0;}
try{const {chromium}=await import('playwright');result.playwright=true;result.browserBinary=existsSync(chromium.executablePath());
 if(process.argv.includes('--launch')&&result.browserBinary){try{const b=await chromium.launch({headless:true});await b.close();result.browserLaunch='passed';}catch(e){result.browserLaunch='failed';result.browserError=e.message;}}
}catch(e){result.dependencyError=e.message;}
console.log(JSON.stringify(result,null,2));
