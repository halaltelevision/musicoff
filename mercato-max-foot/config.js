/* Mercato Max Foot : réglages communs au jeu et au serveur de paiement.
   Si tu changes quelque chose ici, mets le même fichier sur le jeu et sur le serveur. */
(function(root){
const CONFIG={
  /* Packs payants (environ 10 % du catalogue). Tous les autres packs sont gratuits. */
  premium:["ballons_or","heros_ldc","heros_cdm","clasico","classique","derby_manchester","derby_milan","leg_afrique","realmadrid","barca"],
  freeCustomPacks:1,
  /* Prix en centimes d'euro */
  prices:{pack:99,perso3:199,perso10:499,createur:999,all:1999,pass:{clubs:399,ligues:299,nations:299,themes:399}},
  /* Paiement Stripe : laisse vide tant que ton compte n'est pas relié.
     api   = l'adresse de ton serveur (dossier server/), ex. "https://paiement.mercatomax.com"
     links = sinon, des liens de paiement Stripe par produit, ex. {"pass_clubs":"https://buy.stripe.com/..."} */
  stripe:{api:"",links:{}}
};
const PASSES=[{k:"clubs",l:"Pass Clubs",code:"PC"},{k:"ligues",l:"Pass Championnats",code:"PL"},{k:"nations",l:"Pass Sélections",code:"PN"},{k:"themes",l:"Pass Thèmes",code:"PT"}];
/* packs : tableau [{id,name,cat,size}] ; renvoie le catalogue des produits */
function buildProducts(packs){
  const P={},prem=packs.filter(p=>CONFIG.premium.includes(p.id));
  P.all={label:"Collection complète",desc:"Tous les packs, tous les pass et les packs perso illimités, y compris ce qui sortira",cents:CONFIG.prices.all,code:"VIP",kind:"all"};
  PASSES.forEach(s=>{const n=prem.filter(p=>p.cat===s.k).length;
    P["pass_"+s.k]={label:s.l,desc:n?`Les ${n} packs premium de cette catégorie, et ceux qui sortiront`:"Les packs premium de cette catégorie qui sortiront",cents:CONFIG.prices.pass[s.k],code:s.code,kind:"pass",cat:s.k}});
  prem.forEach(p=>{P["pk_"+p.id]={label:p.name,desc:(p.size||"")+" joueurs",cents:CONFIG.prices.pack,code:"PK",kind:"pack",pack:p.id,cat:p.cat}});
  P.perso3={label:"+3 packs perso",desc:"Crée 3 packs perso de plus",cents:CONFIG.prices.perso3,code:"P3",kind:"extra"};
  P.perso10={label:"+10 packs perso",desc:"Crée 10 packs perso de plus",cents:CONFIG.prices.perso10,code:"P10",kind:"extra"};
  P.createur={label:"Packs perso illimités",desc:"Crée autant de packs que tu veux, pour toujours",cents:CONFIG.prices.createur,code:"CR",kind:"extra"};
  return P;
}
function cyrb53(str,seed=0){let h1=0xdeadbeef^seed,h2=0x41c6ce57^seed;for(let i=0,ch;i<str.length;i++){ch=str.charCodeAt(i);h1=Math.imul(h1^ch,2654435761);h2=Math.imul(h2^ch,1597334677)}h1=Math.imul(h1^(h1>>>16),2246822507);h1^=Math.imul(h2^(h2>>>13),3266489909);h2=Math.imul(h2^(h2>>>16),2246822507);h2^=Math.imul(h1^(h1>>>13),3266489909);return 4294967296*(2097151&h2)+(h1>>>0)}
/* Liste simple des packs à partir de FOOT_PACKS (pour le serveur) */
function packList(raw){return (raw||[]).map(p=>({id:p.id,name:p.name,cat:p.cat||"themes",size:p.raw.trim().split("\n").filter(l=>l.trim()).length}))}
root.MMF={CONFIG,PASSES,buildProducts,cyrb53,packList};
})(typeof window!=="undefined"?window:globalThis);
