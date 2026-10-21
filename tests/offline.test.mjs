import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
const html=readFileSync(new URL('../assets/starter-offline.html',import.meta.url),'utf8');
function runtime(){const elements=new Map();const el=id=>{if(!elements.has(id))elements.set(id,{style:{},attrs:{},setAttribute(k,v){this.attrs[k]=v;}});return elements.get(id);};
 const ctx={document:{getElementById:el,body:{classList:{add(){}}},activeElement:{tagName:'BODY'}},window:{},location:{search:'?clean=1'},URLSearchParams,matchMedia:()=>({matches:false}),requestAnimationFrame(){},addEventListener(){},innerWidth:1080,innerHeight:1920,Math,Number};vm.createContext(ctx);vm.runInContext(html.match(/<script>([\s\S]*?)<\/script>/)[1],ctx);return {api:ctx.window.OPENER,elements};}
test('offline starter has no remote script or font requirement',()=>assert.ok(!/(?:src|href)=["']https?:/.test(html)));
test('timeline can seek backwards and repeat state',()=>{const {api,elements}=runtime();api.seek(5);const state=JSON.stringify([...elements]);api.seek(11);api.seek(5);assert.equal(JSON.stringify([...elements]),state);assert.equal(api.W,1080);assert.equal(api.H,1920);});
test('end and negative time are clamped, playback methods exposed',()=>{const {api,elements}=runtime();api.seek(120);assert.equal(elements.get('progress').attrs.width,880);api.seek(-5);assert.equal(elements.get('progress').attrs.width,0);api.play();api.pause();assert.equal(elements.get('play').textContent,'Putar');});
