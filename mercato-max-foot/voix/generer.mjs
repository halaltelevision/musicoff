// Génère les voix du commentateur avec ElevenLabs (voix retenue : Paul K, ecxPjiGTvAfpGEams6ec).
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
/* Ton « commentateur de Ligue 1 » : stabilité 0 (le plus expressif) ; émotion jouée par moment (modèle eleven_v3, balises entre crochets) */
const TON={mise100:"[shouting]",bataille:"[excited] [fast]",relance:"[excited]",cher:"[excited]",record:"[shouting]",vol:"[shouting]",adjuge:"[excited]",dernier:"[tense]",secret:"[whispers]",mystere:"[intrigued]",prime:"[excited]",debut:"[excited] [shouting]",fin:"[excited]",victoire:"[shouting]",defaite:"[sighs]",egalite:"[surprised] [shouting]",personne:"[surprised]",remontada:"[shouting]",serre:"[tense] [excited]"};
let jobs=Object.entries(P).flatMap(([k,l])=>l.map((t,i)=>[`${k}_${i+1}`,(TON[k]?TON[k]+" ":"")+t]));
if(mode==="echantillon")jobs=jobs.filter(([f])=>["mise100_1","vol_1","dernier_2","victoire_1"].includes(f));
for(const [f,t] of jobs){
  const r=await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voice}?output_format=mp3_44100_96`,{method:"POST",headers:H,
    body:JSON.stringify({text:t,model_id:"eleven_v3",voice_settings:{stability:0}})});
  if(!r.ok){console.error(f,r.status,await r.text());process.exit(1)}
  fs.writeFileSync(dir+f+".mp3",Buffer.from(await r.arrayBuffer()));console.log("ok",f,"«"+t+"»")}
fs.writeFileSync(dir+"liste.js","window.VOIX="+JSON.stringify(Object.fromEntries(Object.entries(P).map(([k,l])=>[k,l.length])))+";\n");
console.log("\nTerminé :",jobs.length,"fichiers. voix/liste.js mis à jour.");
