/* DEGAJA Shop – additional products + visual product artwork */
(function(){
  const brandCss=document.createElement('link');brandCss.rel='stylesheet';brandCss.href='brand.css';document.head.appendChild(brandCss);
  if(typeof shopProducts==='undefined') return;

  const extra=[
    {id:'energy-oil',category:'glueck',name:'DEGAJA Energy Öl',subtitle:'Balance & Intention',price:39.00,tag:'ENERGIE',personal:true,description:'Ein stilvolles Körperöl für bewusste Wohlfühlmomente und persönliche Rituale.'},
    {id:'harmony-candle',category:'glueck',name:'DEGAJA Harmony Kerze',subtitle:'Balance & Harmonie',price:34.00,tag:'KERZE',personal:false,description:'Eine elegante Duftkerze für eine ruhige, harmonische Atmosphäre.'},
    {id:'energy-bracelet',category:'persoenlich',name:'DEGAJA Energie Armband',subtitle:'Schutz & innere Stärke',price:45.00,tag:'SCHMUCK',personal:true,description:'Ein elegantes Armband mit ausgewählten Steinen für dein persönliches Wohlfühlritual.'},
    {id:'energy-ring',category:'persoenlich',name:'DEGAJA Energy Ring',subtitle:'Stärke & positive Energie',price:59.00,tag:'RINGE',personal:true,description:'Ein markanter Ring mit DEGAJA Design als persönliches Symbol für Stärke und Zuversicht.'},
    {id:'balance-ring',category:'persoenlich',name:'DEGAJA Balance Ring',subtitle:'Ruhe & positive Gedanken',price:55.00,tag:'RINGE',personal:true,description:'Ein eleganter Balance-Ring für einen bewussten, persönlichen Moment im Alltag.'},
    {id:'lotus-necklace',category:'persoenlich',name:'DEGAJA Lotus Halskette',subtitle:'Harmonie & Neubeginn',price:69.00,tag:'HALSKETTEN',personal:true,description:'Eine feine Lotus-Halskette als Symbol für Harmonie, Wachstum und Neubeginn.'},
    {id:'sun-necklace',category:'persoenlich',name:'DEGAJA Sonnen Halskette',subtitle:'Lebensenergie & Optimismus',price:69.00,tag:'HALSKETTEN',personal:true,description:'Ein sonniges Schmuckstück als stilvolles Symbol für Licht, Lebensfreude und neue Perspektiven.'},
    {id:'room-fragrance',category:'glueck',name:'DEGAJA Raumduft',subtitle:'Good Vibes',price:44.00,tag:'DUFT',personal:false,description:'Eleganter Raumduft für eine angenehme und inspirierende Atmosphäre zuhause.'},
    {id:'balance-tea',category:'glueck',name:'DEGAJA Balance Tee',subtitle:'Kräutermischung',price:24.00,tag:'WELLNESS',personal:false,description:'Eine harmonische Kräutermischung für einen bewussten Moment von Ruhe und Balance.'},
    {id:'sleep-mask',category:'persoenlich',name:'DEGAJA Schlafmaske',subtitle:'Ruhe & neue Energie',price:29.00,tag:'WELLNESS',personal:true,description:'Eine weiche Schlafmaske für entspannte Abende und bewusste Ruhezeiten.'},
    {id:'gift-set',category:'geschenke',name:'DEGAJA Geschenkset',subtitle:'Good Energy Collection',price:89.00,tag:'GESCHENK',personal:true,description:'Eine hochwertige Geschenkbox mit ausgewählten DEGAJA Produkten für einen besonderen Menschen.'},
    {id:'face-roller',category:'persoenlich',name:'DEGAJA Gesichtsroller',subtitle:'Beauty & Wohlbefinden',price:34.00,tag:'BEAUTY',personal:true,description:'Ein eleganter Gesichtsroller für dein tägliches Self-Care-Ritual.'},
    {id:'body-butter',category:'glueck',name:'DEGAJA Körperbutter',subtitle:'Pflege & Wohlbefinden',price:39.00,tag:'PFLEGE',personal:false,description:'Reichhaltige Körperpflege für ein geschmeidiges und gepflegtes Hautgefühl.'},
    {id:'shower-gel',category:'glueck',name:'DEGAJA Duschgel',subtitle:'Frische & Balance',price:24.00,tag:'PFLEGE',personal:false,description:'Sanftes Duschgel für einen frischen Start und einen angenehmen Wohlfühlmoment.'},
    {id:'energy-stones',category:'glueck',name:'DEGAJA Energie Steine',subtitle:'Schutz & Harmonie',price:49.00,tag:'KRISTALLE',personal:true,description:'Ausgewählte dekorative Steine als persönliche Symbole für Balance, Schutz und Harmonie.'},
    {id:'manifest-journal',category:'persoenlich',name:'DEGAJA Manifest Journal',subtitle:'Deine Ziele & Gedanken',price:29.00,tag:'JOURNAL',personal:true}
  ];
  const existing=new Set(shopProducts.map(p=>p.id));
  extra.forEach(p=>{if(!existing.has(p.id))shopProducts.push(p)});

  function esc(v){return String(v||'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
  function art(p){
    const id=p.id;
    let shape='';
    if(id==='fasuche') shape='<rect x="245" y="290" width="310" height="330" rx="42" fill="#18364c" stroke="#c99a4a" stroke-width="7"/><ellipse cx="400" cy="290" rx="155" ry="45" fill="#f8ead0" stroke="#c99a4a" stroke-width="6"/><text x="400" y="435" text-anchor="middle" font-family="Georgia" font-size="34" fill="#f0cf79">PAPULI</text><text x="400" y="478" text-anchor="middle" font-family="Georgia" font-size="31" fill="#f0cf79">FASUCHE</text><text x="400" y="515" text-anchor="middle" font-size="15" fill="#f0cf79">TAROT LUCK CREAM</text>';
    else if(id.includes('ring')) shape='<circle cx="400" cy="390" r="105" fill="none" stroke="#c99a4a" stroke-width="34"/><circle cx="400" cy="390" r="72" fill="#eef9ff" stroke="#f4d98e" stroke-width="6"/><circle cx="400" cy="280" r="30" fill="#d7b35e" stroke="#fff2bd" stroke-width="6"/>';
    else if(id.includes('necklace')) shape='<circle cx="400" cy="365" r="112" fill="none" stroke="#c99a4a" stroke-width="7"/><path d="M330 310 Q400 250 470 310" fill="none" stroke="#d9b86a" stroke-width="8"/><circle cx="400" cy="365" r="42" fill="#fff2bd" stroke="#b88332" stroke-width="7"/><path d="M400 335 l12 24 27 4-20 19 5 27-24-13-24 13 5-27-20-19 27-4z" fill="#d6ad58"/>';
    else if(id.includes('candle')) shape='<rect x="300" y="275" width="200" height="330" rx="32" fill="#fff8e8" stroke="#c99a4a" stroke-width="6"/><path d="M400 235 C370 265 430 270 400 300 C385 280 370 265 400 235" fill="#e9b94f"/><text x="400" y="455" text-anchor="middle" font-family="Georgia" font-size="24" fill="#a8782e">DEGAJA</text><text x="400" y="490" text-anchor="middle" font-size="17" fill="#18364c">HARMONY</text>';
    else if(id.includes('oil')||id.includes('fragrance')||id.includes('gel')) shape='<rect x="325" y="300" width="150" height="330" rx="32" fill="#dceff7" stroke="#c99a4a" stroke-width="6"/><rect x="350" y="250" width="100" height="70" rx="18" fill="#d6b66d"/><text x="400" y="470" text-anchor="middle" font-family="Georgia" font-size="22" fill="#a8782e">DEGAJA</text><text x="400" y="505" text-anchor="middle" font-size="15" fill="#18364c">ENERGY</text>';
    else if(id==='sleep-mask') shape='<path d="M230 385 Q400 285 570 385 L520 515 Q400 570 280 515Z" fill="#d7eefa" stroke="#c99a4a" stroke-width="7"/><path d="M305 410 Q340 380 375 410 M425 410 Q460 380 495 410" fill="none" stroke="#18364c" stroke-width="8" stroke-linecap="round"/>';
    else if(id==='face-roller') shape='<line x1="360" y1="300" x2="470" y2="560" stroke="#c99a4a" stroke-width="18"/><ellipse cx="345" cy="285" rx="38" ry="58" fill="#b9e0ea" stroke="#a8782e" stroke-width="6"/><ellipse cx="485" cy="580" rx="30" ry="46" fill="#b9e0ea" stroke="#a8782e" stroke-width="6"/>';
    else if(id==='energy-bracelet') shape='<circle cx="400" cy="420" r="130" fill="none" stroke="#18364c" stroke-width="42" stroke-dasharray="20 16"/><circle cx="400" cy="420" r="92" fill="none" stroke="#c99a4a" stroke-width="6"/>';
    else if(id==='energy-stones') shape='<circle cx="330" cy="400" r="70" fill="#b7dfea" stroke="#a8782e" stroke-width="5"/><circle cx="465" cy="350" r="62" fill="#d8c4ec" stroke="#a8782e" stroke-width="5"/><circle cx="465" cy="485" r="70" fill="#c8e5d4" stroke="#a8782e" stroke-width="5"/>';
    else if(id==='manifest-journal') shape='<rect x="275" y="260" width="250" height="360" rx="18" fill="#fffdf5" stroke="#c99a4a" stroke-width="7"/><path d="M325 350h150M325 405h150M325 460h120" stroke="#9bb9c8" stroke-width="7"/><text x="400" y="315" text-anchor="middle" font-family="Georgia" font-size="25" fill="#a8782e">DEGAJA</text>';
    else if(id==='gift-set'||id==='lucky-box') shape='<rect x="245" y="330" width="310" height="240" rx="20" fill="#fff5d8" stroke="#c99a4a" stroke-width="8"/><path d="M400 330v240M245 405h310" stroke="#c99a4a" stroke-width="10"/><path d="M350 330 Q400 260 450 330" fill="none" stroke="#c99a4a" stroke-width="12"/>';
    else shape='<rect x="290" y="300" width="220" height="300" rx="28" fill="#edf9ff" stroke="#c99a4a" stroke-width="7"/><circle cx="400" cy="390" r="55" fill="#fff0bd" stroke="#c99a4a" stroke-width="5"/><text x="400" y="510" text-anchor="middle" font-family="Georgia" font-size="25" fill="#a8782e">DEGAJA</text>';
    return `<div class="product-visual"><svg viewBox="0 0 800 700" role="img" aria-label="${esc(p.name)}" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g${esc(id)}" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#ffffff"/><stop offset=".55" stop-color="#e1f5ff"/><stop offset="1" stop-color="#fff7df"/></linearGradient></defs><rect width="800" height="700" rx="30" fill="url(#g${esc(id)})"/><circle cx="650" cy="120" r="95" fill="#c8ebfa" opacity=".65"/><circle cx="130" cy="570" r="85" fill="#fff0c4" opacity=".5"/>${shape}<text x="400" y="665" text-anchor="middle" font-family="Georgia" font-size="18" letter-spacing="3" fill="#8e672e">DEGAJA · ${esc(p.tag)}</text></svg></div>`;
  }

  window.renderProductVisual=art;
  renderShop=function(category='all'){
    if(!shopGrid)return;
    const list=category==='all'?shopProducts:shopProducts.filter(p=>p.category===category);
    shopGrid.innerHTML=list.map(p=>`<article class="product-card"><button class="product-image-button" data-product="${p.id}" aria-label="${esc(p.name)} ansehen">${art(p)}</button><div class="product-body"><span class="product-tag">${esc(p.tag)}</span><h3>${esc(p.name)}</h3><p><b>${esc(p.subtitle)}</b><br>${esc(p.description||'')}</p><div class="product-bottom"><span class="product-price">${p.price.toFixed(2).replace('.',',')} €</span><button class="primary" data-product="${p.id}">${p.personal?'Personalisieren':'Ansehen'}</button></div>${p.personal?'<div class="product-personal">✦ Personalisierbar</div>':''}</div></article>`).join('');
    shopGrid.querySelectorAll('[data-product]').forEach(b=>b.addEventListener('click',()=>openProduct(b.dataset.product)));
  };
  renderShop('all');
  if(typeof saveCart==='function')saveCart();
})();