/* Mercato Max Foot : petit serveur de paiement Stripe (Node 18 ou plus, aucune dépendance).
   Variables d'environnement :
     STRIPE_SECRET_KEY      clé secrète Stripe (sk_live_... ou sk_test_...)
     STRIPE_WEBHOOK_SECRET  secret du webhook (whsec_...), facultatif mais conseillé
     PORT                   port d'écoute (3000 par défaut)
     ALLOWED_ORIGIN         adresse du jeu autorisée à appeler le serveur (par défaut : toutes)
   Routes :
     POST /checkout  {product, device, returnUrl}  -> {url}  (ouvre la page de paiement Stripe)
     GET  /verify?session_id=...                  -> {ok, device, products}
     POST /restore   {email}                      -> {products}  (nouveau téléphone : retrouve les achats)
     POST /webhook                                (Stripe : enregistre les paiements dans purchases.jsonl) */
const http=require("http"),fs=require("fs"),path=require("path"),vm=require("vm"),crypto=require("crypto");
const ROOT=path.join(__dirname,"..");
/* Lit config.js et packs.js du jeu : mêmes prix, mêmes produits */
const ctx={window:{FOOT_PACKS:[],CLUB_COLORS:{}}};ctx.globalThis=ctx.window;
vm.runInNewContext(fs.readFileSync(path.join(ROOT,"config.js"),"utf8"),ctx);
vm.runInNewContext(fs.readFileSync(path.join(ROOT,"packs.js"),"utf8"),ctx);
const MMF=ctx.window.MMF,PRODUCTS=MMF.buildProducts(MMF.packList(ctx.window.FOOT_PACKS));
const KEY=process.env.STRIPE_SECRET_KEY||"",WH=process.env.STRIPE_WEBHOOK_SECRET||"",ORIGIN=process.env.ALLOWED_ORIGIN||"*";
const DEVICE=/^MX-[A-Z0-9]{4}-[A-Z0-9]{4}$/;

async function stripe(method,route,params){
  const r=await fetch("https://api.stripe.com/v1/"+route,{method,headers:{Authorization:"Bearer "+KEY,"Content-Type":"application/x-www-form-urlencoded"},body:params?new URLSearchParams(params).toString():undefined});
  const j=await r.json();if(!r.ok)throw new Error((j.error&&j.error.message)||"Erreur Stripe");return j;
}
function send(res,code,obj){res.writeHead(code,{"Content-Type":"application/json","Access-Control-Allow-Origin":ORIGIN,"Access-Control-Allow-Headers":"Content-Type"});res.end(JSON.stringify(obj))}
function body(req){return new Promise((ok,ko)=>{let d="";req.on("data",c=>{d+=c;if(d.length>1e6)req.destroy()});req.on("end",()=>ok(d));req.on("error",ko)})}
function checkSig(raw,header){if(!WH)return true;
  const parts=Object.fromEntries(String(header||"").split(",").map(x=>x.split("=")));
  const exp=crypto.createHmac("sha256",WH).update(parts.t+"."+raw).digest("hex");
  return parts.v1&&exp.length===parts.v1.length&&crypto.timingSafeEqual(Buffer.from(exp),Buffer.from(parts.v1))&&Math.abs(Date.now()/1000-(+parts.t))<300}

http.createServer(async(req,res)=>{
  try{
    const url=new URL(req.url,"http://x");
    if(req.method==="OPTIONS")return send(res,204,{});
    if(req.method==="POST"&&url.pathname==="/checkout"){
      const {product,device,returnUrl}=JSON.parse(await body(req)||"{}");const pr=PRODUCTS[product];
      if(!pr||!DEVICE.test(String(device||"").toUpperCase())||!/^https?:\/\//.test(returnUrl||""))return send(res,400,{error:"Demande invalide"});
      const s=await stripe("POST","checkout/sessions",{
        mode:"payment","line_items[0][quantity]":1,"line_items[0][price_data][currency]":"eur",
        "line_items[0][price_data][unit_amount]":pr.cents,"line_items[0][price_data][product_data][name]":"Mercato Max Foot · "+pr.label,
        "metadata[product]":product,"metadata[device]":device.toUpperCase(),client_reference_id:device.toUpperCase()+"__"+product,
        success_url:returnUrl+"?session_id={CHECKOUT_SESSION_ID}",cancel_url:returnUrl});
      return send(res,200,{url:s.url});
    }
    if(req.method==="GET"&&url.pathname==="/verify"){
      const id=url.searchParams.get("session_id")||"";if(!/^cs_[A-Za-z0-9_]+$/.test(id))return send(res,400,{ok:false});
      const s=await stripe("GET","checkout/sessions/"+id);
      if(s.payment_status!=="paid")return send(res,200,{ok:false});
      const product=s.metadata.product,device=s.metadata.device;if(!PRODUCTS[product])return send(res,200,{ok:false});
      return send(res,200,{ok:true,device,products:[product]});
    }
    if(req.method==="POST"&&url.pathname==="/restore"){
      const {email}=JSON.parse(await body(req)||"{}"),e=String(email||"").trim().toLowerCase();if(!e.includes("@"))return send(res,400,{products:[]});
      const f=path.join(__dirname,"purchases.jsonl"),list=fs.existsSync(f)?fs.readFileSync(f,"utf8").split("\n").filter(Boolean).map(l=>JSON.parse(l)):[];
      return send(res,200,{products:[...new Set(list.filter(p=>p.email.toLowerCase()===e&&PRODUCTS[p.product]).map(p=>p.product))]});
    }
    if(req.method==="POST"&&url.pathname==="/webhook"){
      const raw=await body(req);if(!checkSig(raw,req.headers["stripe-signature"]))return send(res,400,{error:"Signature invalide"});
      const ev=JSON.parse(raw);
      if(ev.type==="checkout.session.completed"){const s=ev.data.object,m=s.metadata||{};
        fs.appendFileSync(path.join(__dirname,"purchases.jsonl"),JSON.stringify({date:new Date().toISOString(),session:s.id,email:(s.customer_details||{}).email||"",device:m.device,product:m.product,amount:s.amount_total})+"\n")}
      return send(res,200,{received:true});
    }
    send(res,404,{error:"Introuvable"});
  }catch(e){console.error(e);send(res,500,{error:"Erreur serveur"})}
}).listen(process.env.PORT||3000,()=>console.log("Serveur de paiement Mercato Max Foot prêt sur le port "+(process.env.PORT||3000)+(KEY?"":" (STRIPE_SECRET_KEY manquante)")));
