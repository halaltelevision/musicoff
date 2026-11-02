// Copie le jeu (dossier parent) dans www/ pour l'appli Android, avec les polices embarquées (jeu jouable sans internet).
import {cpSync,mkdirSync,readFileSync,writeFileSync,rmSync,readdirSync} from "node:fs";
import {dirname,join} from "node:path";
import {fileURLToPath} from "node:url";
const ici=dirname(fileURLToPath(import.meta.url)),jeu=join(ici,".."),www=join(ici,"www");
rmSync(www,{recursive:true,force:true});mkdirSync(join(www,"voix"),{recursive:true});
for(const f of ["config.js","packs.js","roles.js","politique-confidentialite.html"])cpSync(join(jeu,f),join(www,f));
// Voix : sprites, sons et listes seulement (pas les clips bruts ni les scripts de génération)
for(const f of readdirSync(join(jeu,"voix")))if(/\.(mp3|js)$/.test(f))cpSync(join(jeu,"voix",f),join(www,"voix",f));
for(const d of ["sfx","stars","noms"])cpSync(join(jeu,"voix",d),join(www,"voix",d),{recursive:true,filter:s=>!/\.(py|mjs|md|txt|json)$/.test(s)});
cpSync(join(ici,"polices"),join(www,"polices"),{recursive:true});
// Page du jeu : polices locales à la place de Google Fonts, et indicateur « appli Android »
let html=readFileSync(join(jeu,"index.html"),"utf8");
const avant=html;
html=html.replace(/<link rel="stylesheet" href="https:\/\/fonts\.googleapis\.com[^>]*>/,'<link rel="stylesheet" href="polices/polices.css">');
if(html===avant)throw new Error("Lien Google Fonts introuvable dans index.html");
html=html.replace('<script src="config.js"></script>','<script>window.MMF_APP="android"</script>\n<script src="cordova.js"></script>\n<script src="config.js"></script>');
writeFileSync(join(www,"index.html"),html);
console.log("Jeu copié dans www/");
