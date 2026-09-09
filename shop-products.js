/* DEGAJA Shop – additional products. Loaded after script.js, so initialise immediately. */
(function(){
  const brandCss=document.createElement('link');brandCss.rel='stylesheet';brandCss.href='brand.css';document.head.appendChild(brandCss);
  if(typeof shopProducts==='undefined' || typeof renderShop!=='function') return;
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
    {id:'manifest-journal',category:'persoenlich',name:'DEGAJA Manifest Journal',subtitle:'Deine Ziele & Gedanken',price:29.00,tag:'JOURNAL',personal:true,description:'Ein hochwertiges Journal für Ziele, Gedanken, Wünsche und persönliche Reflexion.'}
  ];
  const existing=new Set(shopProducts.map(p=>p.id));
  extra.forEach(p=>{if(!existing.has(p.id))shopProducts.push(p)});
  renderShop('all');
  if(typeof saveCart==='function') saveCart();
})();