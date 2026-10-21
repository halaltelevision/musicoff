// Génère les voix du commentateur avec ElevenLabs.
// Usage :  node generer.mjs            -> liste des voix françaises disponibles
//          ELEVENLABS_API_KEY=... node generer.mjs <voice_id> -> génère tous les fichiers voix/*.mp3
//          ELEVENLABS_API_KEY=... node generer.mjs <voice_id> echantillon -> 4 phrases pour écouter avant
import fs from "node:fs";
// La clé peut venir de ELEVENLABS_API_KEY, ou être ajoutée automatiquement par le proxy de la session (secret réseau sur api.elevenlabs.io)
const KEY=process.env.ELEVENLABS_API_KEY;
const H={"Content-Type":"application/json",...(KEY?{"xi-api-key":KEY}:{})};
const [voice,mode]=process.argv.slice(2);
const dir=new URL(".",import.meta.url).pathname;
if(!voice){
  const r=await fetch("https://api.elevenlabs.io/v1/voices",{headers:H});const j=await r.json();
  for(const v of j.voices||[])console.log(v.voice_id,"|",v.name,"|",JSON.stringify(v.labels||{}));
  console.log("\nAstuce : ajoute une voix « commentateur sportif » française depuis la Voice Library, puis relance.");process.exit(0)}
const P=JSON.parse(fs.readFileSync(dir+"phrases.json","utf8"));delete P._info;
let jobs=Object.entries(P).flatMap(([k,l])=>l.map((t,i)=>[`${k}_${i+1}`,t]));
if(mode==="echantillon")jobs=jobs.filter(([f])=>["mise100_1","vol_1","dernier_2","victoire_1"].includes(f));
for(const [f,t] of jobs){
  const r=await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voice}?output_format=mp3_44100_64`,{method:"POST",headers:H,
    body:JSON.stringify({text:t,model_id:"eleven_multilingual_v2",voice_settings:{stability:.3,similarity_boost:.8,style:.7,use_speaker_boost:true}})});
  if(!r.ok){console.error(f,r.status,await r.text());process.exit(1)}
  fs.writeFileSync(dir+f+".mp3",Buffer.from(await r.arrayBuffer()));console.log("ok",f,"«"+t+"»")}
fs.writeFileSync(dir+"liste.js","window.VOIX="+JSON.stringify(Object.fromEntries(Object.entries(P).map(([k,l])=>[k,l.length])))+";\n");
console.log("\nTerminé :",jobs.length,"fichiers. voix/liste.js mis à jour.");
