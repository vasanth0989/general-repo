// Local, read-only comparison of supplied identifiers. No network or data changes.
import fs from 'node:fs';
import path from 'node:path';
import readline from 'node:readline';
import {pathToFileURL} from 'node:url';
const layouts = {"payee":{"width":378,"fields":[["Member ID",1,22],["Sponsor Member id",23,42],["Sponsor Id",303,312]]},"single_payments":{"width":572,"fields":[["Sponsor Member ID",1,20],["Sponsor Id",149,158]]},"recurring_payments":{"width":586,"fields":[["Sponsor Member ID",1,20],["Sponsor Id",149,158]]},"payee_nickname":{"width":258,"fields":[]},"member":{"width":412,"fields":[["Member ID",1,22],["Sponsor Member ID",23,42],["Sponsor ID",323,332]]},"payment_history":{"width":489,"fields":[["Sponsor Id",1,10],["Sponsor Member ID",11,30]]},"consumer":{"width":413,"fields":[["Member ID",1,22],["Sponsor member id",23,42],["Sponsor Id",386,395]]}};
const tokens={CSP_Member:'member',Consumer_Payee:'payee',Consumer:'consumer',Single_Payment:'single_payments',Recurring_Payment:'recurring_payments',History:'payment_history'};
const identify=name=>Object.entries(tokens).find(([token])=>new RegExp('(^|_)'+token+'(_|\\.)','i').test(name))?.[1];
const numericPadding=v=>/^\d+$/.test(v)?v.replace(/^0+(?=\d)/,''):v;
const tuple=(...v)=>JSON.stringify(v);
function add(map,key,customer){if(!map.has(key))map.set(key,customer);else if(map.get(key)!==customer)map.set(key,null);}
export async function diagnose(folder){
 const inputs=new Map();
 for(const item of await fs.promises.readdir(folder,{withFileTypes:true})){
  if(!item.isFile())continue;
  const kind=identify(item.name);if(!kind)continue;
  if(inputs.has(kind))throw new Error('More than one file for a recognized layout. Use a folder containing one delivery.');
  inputs.set(kind,path.join(folder,item.name));
 }
 if(!inputs.has('member'))throw new Error('No CSP_Member file found in the selected folder.');
 const indexes={member:{},sponsorMember:{}};
 for(const field of Object.values(indexes))for(const mode of ['exact','ignoreSponsor','sponsorPadding','idPadding','bothPadding'])field[mode]=new Map();
 const keyFor=(mode,s,id)=>mode==='ignoreSponsor'?id:tuple(mode==='sponsorPadding'||mode==='bothPadding'?numericPadding(s):s,mode==='idPadding'||mode==='bothPadding'?numericPadding(id):id);
 const reports={},memberKeys=new Set();
 async function read(kind,visit){
  const report=reports[kind]={rows:0,wrongWidthOrEncoding:0,missingKey:0,comparisons:{}};
  const input=fs.createReadStream(inputs.get(kind));
  const lines=readline.createInterface({input,crlfDelay:Infinity});
  // Forward stream errors rather than leaving the line iterator waiting.
  input.on('error',()=>lines.close());
  try{for await(let line of lines){
   report.rows++;if(report.rows===1)line=line.replace(/^\uFEFF/,'');
   const layout=layouts[kind];
   if(line.length!==layout.width||/[^\x20-\x7e]/.test(line)){report.wrongWidthOrEncoding++;continue;}
   const r={};for(const [name,start,end] of layout.fields)r[name]=line.slice(start-1,end).trim();
   const s=r['Sponsor Id']||r['Sponsor ID']||'',m=r['Member ID']||'',sm=r['Sponsor Member ID']||r['Sponsor Member id']||r['Sponsor member id']||'';
   if(!s||!sm||(kind==='member'&&!m)){report.missingKey++;continue;}
   visit({s,member:m,sponsorMember:sm},report);
  }if(input.errored)throw input.errored;}finally{lines.close();input.destroy();}
 }
 await read('member',r=>{
  const customer=tuple(r.s,r.member);memberKeys.add(customer);
  for(const field of ['member','sponsorMember'])for(const [mode,map] of Object.entries(indexes[field]))add(map,keyFor(mode,r.s,r[field]),customer);
 });
 for(const kind of inputs.keys()){
  if(kind==='member')continue;
  await read(kind,(r,report)=>{
   const hit=(label,map,key)=>{
    const count=report.comparisons[label]??={uniqueCandidateRows:0,ambiguousCandidateRows:0,noCandidateRows:0};
    count[!map.has(key)?'noCandidateRows':map.get(key)===null?'ambiguousCandidateRows':'uniqueCandidateRows']++;
   };
   for(const field of ['member','sponsorMember']){
    if(!r[field])continue;
    for(const [mode,map] of Object.entries(indexes[field]))hit(field+' / '+mode,map,keyFor(mode,r.s,r[field]));
    const other=field==='member'?'sponsorMember':'member';
    hit(field+' -> master '+other+' / exact sponsor',indexes[other].exact,tuple(r.s,r[field]));
    hit(field+' -> master '+other+' / ignore sponsor',indexes[other].ignoreSponsor,r[field]);
   }
  });
 }
 return {toolVersion:'1.0',purpose:'Comparison counts only; diagnostic candidates never change customer mapping.',layoutEvidence:'Supplied 2010 layout photos; offsets derived from ordered lengths; vendor approval unknown.',memberCustomers:memberKeys.size,notes:['Rows may appear in multiple comparisons: do not add comparison counts together.','ignoreSponsor tests identifier equality regardless of sponsor, without joining customers.','sponsorPadding/idPadding/bothPadding test numeric leading-zero differences only, without changing identifiers.','Cross-field comparisons test whether fields with different names carry the same identifier; equality is not an approved mapping.','No names, identifiers, accounts, filenames, folder paths or raw records are included.'],layouts:reports};
}
if(process.argv[1]&&import.meta.url===pathToFileURL(path.resolve(process.argv[1])).href){
 if(!process.argv[2]){console.error('Usage: node diagnose-customer-links.mjs "/path/to/delivery-folder"');process.exitCode=1;}
 else try{console.log(JSON.stringify(await diagnose(path.resolve(process.argv[2])),null,2));}catch(error){console.error(['ENOENT','EACCES','EPERM'].includes(error.code)?'Cannot read the selected folder or files. Check the path and local read permissions.':error.message);process.exitCode=1;}
}
