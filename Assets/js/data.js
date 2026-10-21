const C={terracotta:['#B0542C','Terracotta'],tobacco:['#7E5A2E','Tobacco'],olive:['#6B6234','Olive'],ochre:['#C99A3B','Ochre'],teal:['#1F5C57','Deep teal'],maroon:['#7A2E2A','Maroon'],forest:['#2C4A3B','Forest'],camel:['#9C7A55','Camel'],navy:['#243A54','Slate navy'],cream:['#EFE4CC','Warm cream'],cinnamon:['#8B4A2B','Cinnamon'],sage:['#9CA38A','Sage grey'],stone:['#CDBFA3','Stone'],charcoal:['#3A3A3C','Charcoal'],indigo:['#2B3A5C','Indigo'],tan:['#A8743F','Tan'],cognac:['#8A4B22','Cognac'],sand:['#D8C49A','Sand'],brown:['#5a3b22','Brown'],rubber:['#4a4036','Rubber brown']};
const hx=k=>C[k][0],nm=k=>C[k][1],sw=k=>`<i class="sw" style="background:${hx(k)}"></i>`;
const SK=['#9a6a45','#7f5233','#68402a','#523020','#3e2417'],SKN=['Medium brown','Brown','Deep brown','Rich deep','Very deep'];
const S={h:172,w:70,skin:2,un:'warm',se:'summer',oc:'work',face:'Oval',beard:'stubble',hair:'crop',alt:0,fo:'',wk:'office',acc:{}};
const SE={summer:'Summer heat',monsoon:'Monsoon',winter:'Winter / AC'},OC={work:'Workday',date:'Date night',weekend:'Weekend',festive:'Festive',travel:'Travel',formal:'Formal'};
const UN={warm:'Warm',neutral:'Neutral'};
const ALT={work:[['navy','stone','tan','Classic navy & stone'],['olive','charcoal','cognac','Olive & charcoal'],['teal','stone','tan','Teal & stone']],date:[['terracotta','charcoal','cognac','Terracotta & charcoal'],['maroon','charcoal','cognac','Maroon, grown up'],['teal','cream','tan','Teal & cream']],weekend:[['camel','tobacco','cream','Tonal camel'],['olive','stone','cream','Olive & stone'],['cream','indigo','tan','Cream & indigo']],festive:[['maroon','cream','tan','Maroon & gold'],['ochre','cream','tan','Ochre silk'],['forest','cream','tan','Bottle green']],travel:[['ochre','cream','brown','Ochre & cream'],['terracotta','sand','brown','Terracotta & sand'],['olive','stone','cream','Olive & stone']],formal:[['cream','stone','cognac','Cream & stone'],['cream','charcoal','cognac','Cream & charcoal'],['sage','stone','cognac','Sage shirt']]};
const MOA=[['olive','navy','Olive & navy'],['teal','charcoal','Teal & charcoal'],['forest','olive','Forest & olive']];
const FAB={
linen:{n:'Linen',h:5,w:'115–180 gsm',p:'₹₹',t:'slub',s:'sm',cr:'Wrinkles heavily (part of the charm)',use:'Shirts, trousers, camp collars',care:'Gentle wash, air dry, iron damp',tip:'King of peak heat and dries fast. Cream, ochre and terracotta look rich in it.'},
poplin:{n:'Cotton poplin',h:4,w:'100–130 gsm',p:'₹',t:'weave',s:'smw',cr:'Mild, irons crisp',use:'Office and formal shirts',care:'Machine gentle, medium iron',tip:'Smooth and sharp for tucked shirts. Choose lighter weights in summer.'},
voile:{n:'Cotton voile',h:5,w:'60–90 gsm',p:'₹',t:'weave',s:'s',cr:'Low',use:'Summer shirts, kurtas',care:'Gentle wash',tip:'Airy and near-sheer, so choose mid-tones, not pale, to stay opaque.'},
khadi:{n:'Khadi cotton',h:4,w:'120–200 gsm',p:'₹₹',t:'slub',s:'smw',cr:'Moderate',use:'Kurtas, shirts, Nehru jackets',care:'Hand or gentle wash; softens with use',tip:'Handspun and textured, proudly Indian and ideal for daytime festive wear.'},
seer:{n:'Seersucker',h:5,w:'110–150 gsm',p:'₹₹',t:'weave',s:'sm',cr:'Hides creases',use:'Smart-casual shirts, blazers',care:'Wash, no iron needed',tip:'The puckered weave lifts cloth off skin. Tonal stripes beat high contrast.'},
tropical:{n:'Tropical wool',h:3,w:'200–260 gsm',p:'₹₹₹',t:'twill',s:'smw',cr:'Springs back',use:'Trousers, suits, blazers',care:'Dry clean or steam',tip:'Open lightweight weave, best for AC offices, evenings and formal.'},
linencotton:{n:'Linen-cotton blend',h:4,w:'130–170 gsm',p:'₹₹',t:'slub',s:'smw',cr:'Fewer creases than linen',use:'Shirts, kurtas, trousers',care:'Gentle wash',tip:'Linen feel with fewer wrinkles, a smart everyday compromise.'},
chambray:{n:'Chambray',h:4,w:'110–140 gsm',p:'₹',t:'weave',s:'mw',cr:'Moderate',use:'Casual shirts',care:'Machine wash',tip:'Denim look without the weight. Choose indigo, not pale blue.'},
oxford:{n:'Oxford cotton',h:3,w:'130–170 gsm',p:'₹₹',t:'weave',s:'mw',cr:'Moderate',use:'Button-down shirts',care:'Machine wash',tip:'Textured and durable, a cooler-season workhorse.'},
flannel:{n:'Cotton flannel',h:2,w:'150–200 gsm',p:'₹₹',t:'twill',s:'w',cr:'Low',use:'Winter shirts, overshirts',care:'Gentle wash',tip:'Soft and warm. Tobacco, olive and rust checks suit warm skin.'},
silk:{n:'Raw silk / silk blend',h:2,w:'90–140 gsm',p:'₹₹₹',t:'smooth',s:'smw',cr:'Moderate',use:'Festive kurtas, bandhgala',care:'Dry clean',tip:'Warm sheen glows under festive light. Keep it lined and the colours deep.'},
pique:{n:'Cotton piqué',h:4,w:'180–220 gsm',p:'₹',t:'weave',s:'smw',cr:'Low',use:'Polos, tees',care:'Machine wash cool',tip:'Textured knit that breathes and resists clinging in humidity.'},
twill:{n:'Cotton twill / chino',h:3,w:'180–240 gsm',p:'₹',t:'twill',s:'smw',cr:'Low',use:'Chinos, shorts',care:'Machine wash',tip:'Stone, olive and tobacco chinos with 2–5% stretch move well.'},
denim:{n:'Denim',h:2,w:'8–12 oz',p:'₹₹',t:'twill',s:'w',cr:'None',use:'Jeans',care:'Wash rarely, cold',tip:'Dark indigo, slim-straight. Lighter weights suit the Indian climate.'},
quick:{n:'Quick-dry blend',h:3,w:'90–140 gsm',p:'₹₹',t:'smooth',s:'m',cr:'None',use:'Monsoon shirts, travel',care:'Machine wash, drip dry',tip:'The one time synthetics earn their place: sheds water, dries on you.'},
knit:{n:'Cotton / merino knit',h:2,w:'200–300 gsm',p:'₹₹₹',t:'knit',s:'w',cr:'None',use:'Light sweaters, polos',care:'Gentle wash, dry flat',tip:'A camel or cream knit lifts an outfit. Avoid acrylic blends.'}};
const FP={slub:{r:.95,b:1.1},weave:{r:.88,b:.6},twill:{r:.85,b:.9},smooth:{r:.32,b:0},knit:{r:1,b:1.3}};
const isMo=()=>S.se==='monsoon'&&S.oc!=='festive'&&S.oc!=='formal';
function rec(){
 const {se,oc,un,alt}=S,sm=se==='summer',mo=isMo(),wi=se==='winter',a=ALT[oc][alt],ho=un==='neutral'&&a[0]==='terracotta'?'teal':a[0];
 const sh={work:'loafers',date:'loafers',weekend:'sneakers',festive:'mojari',travel:'sandals',formal:'derby shoes'}[oc];
 const T0={work:['shirt','L','cotton shirt, sleeves rolled'],date:['shirt','L','linen shirt, sleeves rolled'],weekend:['polo','S','polo shirt'],festive:['kurta','F','silk kurta or bandhgala'],travel:['camp','S','camp-collar shirt'],formal:['shirt','L','dress shirt']}[oc];
 const bl={work:wi?'tropical-wool trouser':'chino',date:'tailored trouser',weekend:sm||se==='monsoon'?'shorts':'dark jeans',festive:'churidar / pyjama',travel:'linen trouser',formal:'trouser'}[oc];
 let r={top:[ho,T0[0],T0[1],T0[2]],bot:[a[1],oc==='weekend'&&(sm||se==='monsoon')?'short':'long',bl],shoe:[a[2],sh],tuck:'work date formal'.includes(oc)?1:0,layer:oc==='formal'?'navy':wi&&oc!=='festive'?(oc==='date'?'navy':'olive'):null,hat:null,gl:0};
 if(oc==='weekend'||oc==='travel')r.hat=sm?['sand','Sand cotton cap']:wi?['tobacco','Tobacco flat cap']:null;
 r.gl=sm&&'date weekend travel'.includes(oc)?1:0;
 if(mo)r={...r,top:[MOA[alt][0],'shirt','L','quick-dry shirt, sleeves pushed up'],bot:[MOA[alt][1],'crop','cropped trouser'],shoe:['rubber','waterproof sneakers'],tuck:0,layer:null,hat:null,gl:0};
 const FK={work:[sm?'poplin':'oxford','tropical'],date:[sm?'linen':'oxford','tropical'],weekend:['pique',sm||se==='monsoon'?'twill':'denim'],festive:['silk','khadi'],travel:[sm?'linen':'oxford','linen'],formal:['poplin','tropical']}[oc];
 r.fk=S.fo||(mo?'quick':FK[0]);r.bk=mo?'quick':FK[1];
 const pool=oc==='festive'?['silk','khadi','linencotton']:oc==='formal'?['poplin','oxford','linencotton']:sm?['linen','voile','khadi','linencotton','poplin','seer']:mo?['quick','poplin','twill']:['oxford','flannel','chambray','knit','poplin'];
 r.alts=pool.filter(k=>k!==r.fk).slice(0,4);
 r.formula=mo?'The monsoon hero: dark quick-dry top, cropped bottom, rubber soles.':{work:'Anchor plus lift: breathable base, overshirt for the cold AC cabin.',date:'Hero shirt plus neutral trouser, the safety-net formula.',weekend:'Tonal warm, or one anchor with a lift.',festive:'One rich colour and gold detail lead; keep the rest quiet.',travel:'Capsule shrunk for a carry-on: airy shirt, linen trouser.',formal:'Smart layer: unstructured navy blazer over the shirt.'}[oc];
 r.name=`${nm(r.top[0])} ${r.top[1]==='kurta'?'kurta':r.top[1]==='polo'?'polo':'shirt'} · ${nm(r.bot[0])}`;return r}
function fit(){const h=S.h,b=S.w/((h/100)**2),ch=Math.round(34+(b-19)),sz=ch<37?'S':ch<40?'M':ch<43?'L':ch<46?'XL':'XXL';
 const waist=Math.max(28,Math.round((28+(b-18)*.95)/2)*2),ins=Math.round(h*.45/2.54);
 const bd=b<18.5?'Lean':b<25?'Average':b<30?'Solid':'Heavy';
 const adv={Lean:'Slim-straight cuts; layers add shape.',Average:'Slim-straight or tapered fits suit you best.',Solid:'Straight cuts with room at the chest; avoid clingy cloth.',Heavy:'Straight cuts, darker bottoms, vertical lines; structured fabric.'}[bd];
 const len=h>=182?'Choose Tall / long-length shirts; check sleeve ends near thumb base.':h<165?'Take hems and sleeves up at a tailor; look for short-length cuts.':'Standard lengths work; hem lands mid-fly if untucked.';
 return{sz,ch,waist,ins,bd,adv,len,b}}
/* ---------- 7-day planner ---------- */
const DAYS=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
const WK={office:['Office week',[['work',0,'Fresh start'],['work',1,'Mid-week change'],['work',2,'Presentation day'],['formal',0,'Client meeting'],['weekend',1,'Casual Friday'],['date',0,'Saturday evening'],['weekend',0,'Easy Sunday']]],
casual:['Casual week',[['weekend',0,'Errands and classes'],['weekend',1,'Study group'],['work',1,'Presentation'],['weekend',2,'Day out'],['date',1,'Dinner out'],['festive',1,'Family function'],['travel',0,'Short trip']]],
mixed:['Wedding season',[['work',0,'Office'],['work',2,'Office'],['date',1,'Dinner'],['formal',0,'Reception'],['work',1,'Office'],['festive',0,'Wedding day'],['weekend',2,'Recovery day']]]};
function planDay(oc,al){const o=[S.oc,S.alt,S.fo];S.oc=oc;S.alt=al;S.fo='';const r=rec();[S.oc,S.alt,S.fo]=o;return r}
function plan(){const ds=WK[S.wk][1].map(([oc,al,h],i)=>({oc,h,r:planDay(oc,al),d:DAYS[i]})),u=f=>new Set(ds.map(x=>f(x.r))).size;
 const kind=r=>r.top[1]==='kurta'?'kurta':r.top[1]==='polo'?'polo':'shirt';
 return `<div class="card"><h3>7-day planner</h3><div class="chips" style="margin-bottom:6px">${Object.entries(WK).map(([k,v])=>`<button class="chip${S.wk===k?' on':''}" data-wk="${k}">${v[0]}</button>`).join('')}</div>
 <p class="note" style="margin:0 0 4px">Built for ${SE[S.se].toLowerCase()} and your ${S.un} undertone. Tap Wear to see a day on the model.</p>
 ${ds.map((x,i)=>`<div class="day"><b>${x.d}</b><div><div class="dl">${sw(x.r.top[0])}${sw(x.r.bot[0])}${sw(x.r.shoe[0])}<span>${x.h}</span></div>
 <div class="note" style="margin:2px 0 0">${nm(x.r.top[0])} ${kind(x.r)} in ${FAB[x.r.fk].n.toLowerCase()} · ${nm(x.r.bot[0])} ${x.r.bot[2]} · ${nm(x.r.shoe[0])} ${x.r.shoe[1]}${x.r.layer?' · '+(x.r.layer==='navy'?'navy blazer':'olive overshirt'):''}</div>
 <div class="note" style="margin:2px 0 0">${x.r.gl?'Tortoiseshell sunglasses. ':''}${x.r.hat?x.r.hat[1]+'. ':''}${x.oc==='festive'?'Gold detail; stole optional.':x.oc==='formal'?'Belt matched to shoes, pocket square.':x.oc==='work'?'Watch on a tan strap.':'Watch optional.'}</div></div><button class="try" data-day="${i}">Wear</button></div>`).join('')}
 <p class="note">Pack list for the week: ${u(r=>r.top[0]+r.top[1])} tops, ${u(r=>r.bot[0]+r.bot[1])} bottoms, ${u(r=>r.shoe[0]+r.shoe[1])} pairs of shoes, ${u(r=>r.layer||'')-(ds.some(x=>!x.r.layer)?1:0)} layers.</p></div>`}

const SAVE_KEYS=['se','un','skin','wk','h','w','face','beard','hair'];
(function(){try{const j=JSON.parse(localStorage.getItem('ab')||'{}');SAVE_KEYS.forEach(k=>{if(j[k]!=null)S[k]=j[k]})}catch(e){}})();
function saveS(){try{const o={};SAVE_KEYS.forEach(k=>o[k]=S[k]);localStorage.setItem('ab',JSON.stringify(o))}catch(e){}}
function tgl(){const d=document.documentElement,dark=d.dataset.theme?d.dataset.theme==='dark':matchMedia('(prefers-color-scheme:dark)').matches;d.dataset.theme=dark?'light':'dark'}
