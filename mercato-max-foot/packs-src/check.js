// Contrôle d'un fichier de packs : node check.js fichier.js
const fs=require('fs'),vm=require('vm');
const f=process.argv[2];const ctx={window:{FOOT_PACKS:[],CLUB_COLORS:{}}};
try{vm.runInNewContext(fs.readFileSync(f,'utf8'),ctx)}catch(e){console.log('ERREUR JS',e.message);process.exit(1)}
const W=ctx.window,errs=[],CATS=["clubs","nations","themes","ligues"];const ids=new Set();
for(const p of W.FOOT_PACKS){const E=m=>errs.push(`[${p.id}] ${m}`);
  if(!/^[a-z0-9_]+$/.test(p.id||""))E("id invalide");if(ids.has(p.id))E("id en double");ids.add(p.id);
  if(!p.name)E("name manquant");if(!CATS.includes(p.cat))E("cat doit être clubs/nations/themes/ligues");if(!p.sub)E("sub manquant");
  const lines=(p.raw||"").trim().split("\n").map(l=>l.trim()).filter(Boolean);
  if(lines.length<30||lines.length>40)E(`${lines.length} joueurs (il faut 30 à 40)`);
  const cnt={G:0,DEF:0,MIL:0,ATT:0},names=new Set();
  lines.forEach((l,i)=>{const a=l.split("/");const want=p.club?4:5;
    if(a.length!==want){E(`ligne ${i+1} "${l}" : ${a.length} champs, il en faut ${want}`);return}
    const [n,pos]=a;const club=p.club||a[2],pays=a[want-2],note=+a[want-1];
    if(!(pos in cnt))E(`ligne "${l}" : poste ${pos}`);else cnt[pos]++;
    if(!Number.isInteger(note)||note<60||note>99)E(`ligne "${l}" : note ${a[want-1]}`);
    if(names.has(n))E(`doublon ${n}`);names.add(n);
    if(!pays)E(`ligne "${l}" : pays vide`);
    if(!W.CLUB_COLORS[club])E(`couleurs manquantes pour le club "${club}"`);});
  if(cnt.G<5)E(`seulement ${cnt.G} gardiens (min 5)`);["DEF","MIL","ATT"].forEach(k=>{if(cnt[k]<6)E(`seulement ${cnt[k]} ${k} (min 6)`)});
}
Object.entries(W.CLUB_COLORS).forEach(([k,v])=>{if(!Array.isArray(v)||v.length!==2||!v.every(c=>/^#[0-9A-Fa-f]{3,6}$/.test(c)))errs.push(`couleurs invalides pour ${k}`)});
console.log(W.FOOT_PACKS.length+" packs, "+W.FOOT_PACKS.reduce((a,p)=>a+p.raw.trim().split("\n").length,0)+" joueurs");
console.log(errs.length?errs.join("\n"):"OK, aucune erreur");process.exit(errs.length?1:0);
