const $=(s,r=document)=>r.querySelector(s), app=$('#app');
$('#logo').src=A.logo;
const go=h=>{location.hash=h};
let homeAPI=null;

/* ===== Accueil : site en travaux ===== */
function home(){
  document.title='PhantStudio – Site en travaux';
  app.innerHTML=`
  <section class="desk" id="desk" aria-label="Accueil">
    <div class="stage" id="stage">
      <div class="bands" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>
      <div class="sw" id="sw" role="button" tabindex="0" aria-label="Allumer ou éteindre la console">
        <img src="${A.jcg}" alt="" width="49" height="150"><img src="${A.body}" alt="Console" width="256" height="150"><img src="${A.jcd}" alt="" width="49" height="150">
      </div>
      <img class="dock" id="dock" src="${A.dock}" alt="Dock de la console" width="273" height="150">
      <div class="scr" style="background-image:url(${A.screen})">
        <div class="wip" aria-live="polite"><b>Site en travaux.</b><span>De nouveaux projets se préparent.<br>Revenez très vite !</span></div>
      </div>
    </div>
    <p class="hint">Scrolle ou clique sur la console pour l’allumer · scrolle vers le haut pour l’éteindre.</p>
  </section>
  <section class="mob" aria-label="Accueil mobile">
    <div class="gb">
      <div class="bezel"><small>PHANTSTUDIO · MATRICE POINTS</small><div class="screen"><div class="lcd">
        <h2>Phant<span>Studio</span></h2>
        <p class="wip-m">Site en travaux<i aria-hidden="true">_</i></p>
        <p class="wip-s">De nouveaux projets se préparent. Revenez très vite !</p>
        <div class="h">Start : contact</div>
      </div></div></div>
      <div class="controls" aria-hidden="true">
        <div class="dpad"><span class="u"></span><span class="l"></span><span class="r"></span><span class="d"></span></div>
        <div class="ab"><span>B</span><span>A</span></div>
      </div>
      <div class="sys" role="group" aria-label="Select et Start"><button data-k="select" data-l="INFOS" aria-label="Select : mentions légales"></button><button data-k="start" data-l="CONTACT" aria-label="Start : contact"></button></div>
      <div class="speaker" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></div>
    </div>
    <div class="bands" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>
  </section>`;
  const desk=$('#desk');
  const power=on=>desk.classList.toggle('on',on);
  const toggle=()=>power(!desk.classList.contains('on'));
  $('#sw').onclick=toggle;$('#dock').onclick=toggle;
  $('#sw').onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();toggle()}};
  homeAPI={power};
  $('.sys').onclick=e=>{const k=e.target.closest('button')?.dataset.k;if(k==='select')go('#/mentions-legales');else if(k==='start')go('#/contact')};
}

function contact(){
  document.title='Contact | PhantStudio – Studio créatif';
  app.innerHTML=`<section class="page"><h1>Contact.</h1><p class="lead">Un projet, une question, un défi un peu fou ? Écris-moi.</p>
  <form id="f"><div><label for="name">Nom et prénom</label><input id="name" name="name" required autocomplete="name" placeholder="Votre nom et prénom"></div>
  <div><label for="email">Email</label><input id="email" name="email" type="email" required autocomplete="email" placeholder="votre@email.com"></div>
  <div><label for="message">Message</label><textarea id="message" name="message" rows="5" required placeholder="Votre message"></textarea></div>
  <button class="btn" type="submit">Envoyer !</button><p class="msg" id="msg" role="status"></p></form></section>`;
  const f=$('#f'),m=$('#msg'),b=$('.btn',f);
  f.onsubmit=async e=>{e.preventDefault();b.disabled=true;m.className='msg';m.textContent='Envoi en cours…';
    try{const r=await fetch('https://formspree.io/f/mzdqalyr',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},
      body:JSON.stringify({name:f.name.value,email:f.email.value,message:f.message.value})});
      if(!r.ok)throw 0;m.textContent='Merci ! Ton message est bien parti, je te réponds vite.';f.reset()}
    catch{m.className='msg err';m.textContent='Oups, l’envoi a échoué. Réessaie, ou écris-moi directement par email.'}
    b.disabled=false}
}

function legal(){
  document.title='Mentions légales | PhantStudio';
  app.innerHTML=`<section class="page doc"><h1>Mentions légales.</h1>
  <h2>Éditeur du site</h2>
  <p>PhantStudio, nom commercial d’Adrien Feuilloy, entrepreneur individuel (EI, micro-entreprise)<br>
  SIRET : 830 808 960 00033<br>
  Adresse : Petitefontaine (90360), France<br>
  Contact : <a href="mailto:phantdrawing@gmail.com">phantdrawing@gmail.com</a> ou via la <a href="#/contact">page Contact</a><br>
  Directeur de la publication : Adrien Feuilloy</p>
  <h2>Hébergement</h2>
  <p>GitHub Pages, service de GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis.</p>
  <h2>Propriété intellectuelle</h2>
  <p>L’ensemble du site (textes, illustrations, logos, graphismes, code) est la propriété exclusive de PhantStudio, sauf mention contraire. Toute reproduction, représentation ou réutilisation, totale ou partielle, sans autorisation écrite préalable est interdite. Les illustrations ne peuvent pas être utilisées pour entraîner des modèles d’intelligence artificielle.</p>
  <h2>Données personnelles</h2>
  <p>Le formulaire de contact recueille votre nom, votre e-mail et votre message, uniquement pour vous répondre. Ces données sont transmises par le service Formspree et ne sont ni revendues ni utilisées à d’autres fins.</p>
  <p>Conformément au RGPD, vous pouvez demander l’accès, la rectification ou la suppression de vos données en écrivant via la <a href="#/contact">page Contact</a>.</p>
  <h2>Cookies</h2>
  <p>Ce site ne dépose aucun cookie de suivi ni de mesure d’audience. Les polices de caractères sont chargées depuis Google Fonts, ce qui transmet votre adresse IP à Google.</p>
  <p><a class="back" href="#/">← Retour</a></p></section>`;
}

/* ===== PAGE DE TEST MASQUÉE : adresse  /#/_test =====
   Elle sert de modèle pour toute nouvelle page. Elle n'est liée nulle part. */
function pageTest(){
  document.title='Page de test – PhantStudio';
  app.innerHTML=`<section class="page doc"><h1>Page de test.</h1>
  <p class="lead">Cette page est masquée : personne ne la trouve sans l’adresse. Elle sert de modèle pour créer de nouvelles pages.</p>
  <div class="card"><h2>Ajouter une page en 4 étapes</h2>
  <ol>
   <li>Copie la fonction <code>pageTest()</code> dans <code>js/app.js</code> et renomme-la (par exemple <code>tarifs()</code>).</li>
   <li>Ajoute une ligne dans <code>ROUTES</code> : <code>tarifs:tarifs</code>. L’adresse devient <code>/#/tarifs</code>.</li>
   <li>Pour un lien dans le menu : ajoute un <code>&lt;a href="#/tarifs" data-n="tarifs"&gt;</code> dans <code>index.html</code>.</li>
   <li>Page secrète ? Commence son nom par <code>_</code> (par exemple <code>_brouillon</code>) : elle reste hors menu et hors moteurs de recherche.</li>
  </ol></div>
  <h2>Éléments prêts à l’emploi</h2>
  <p>Un paragraphe normal, avec un <a href="#/contact">lien</a>. Police du texte : Commissioner.</p>
  <p><button class="btn" type="button" id="tbtn">Bouton</button> <span class="msg" id="tmsg" role="status"></span></p>
  <figure class="art-wrap"><img class="art" src="${A.ph}" alt="Image d’exemple"><figcaption>Légende d’une image</figcaption></figure>
  <p><a class="back" href="#/">← Retour</a></p></section>`;
  $('#tbtn').onclick=()=>{$('#tmsg').textContent='Ça marche ! ✓'};
}

function nf(){
  document.title='Erreur 404 – Page non trouvée | PhantStudio';
  app.innerHTML=`<section class="nf"><div class="swap"><img src="${A.n404}" alt="Erreur 404 : page non trouvée"><img src="${A.n404h}" alt=""></div>
  <h1 style="font-size:clamp(34px,6vw,56px)">Page non trouvée.</h1><a class="back" href="#/">← Revenir à l’accueil</a></section>`;
}


/* ===== Routes =====
   Pour ajouter une page : écris une fonction (voir pageTest) puis ajoute une ligne ici.
   Une page dont le nom commence par _ est MASQUÉE : absente du menu et marquée noindex. */
const ROUTES={'':home,contact:contact,'mentions-legales':legal,'_test':pageTest};
function setRobots(hidden){
  let m=document.querySelector('meta[name="robots"]');
  if(hidden){if(!m){m=document.createElement('meta');m.name='robots';document.head.appendChild(m)}m.content='noindex,nofollow'}
  else if(m)m.remove();
}
function route(){
  homeAPI=null;
  const [p,id]=(location.hash||'#/').replace(/^#\/?/,'').split('/');
  setRobots(p.startsWith('_'));
  document.querySelectorAll('nav a').forEach(a=>{if(a.dataset.n===p)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
  if(Object.prototype.hasOwnProperty.call(ROUTES,p))ROUTES[p](id);
  else nf();
}
addEventListener('hashchange',()=>{route();scrollTo(0,0)});
addEventListener('wheel',e=>{if(Math.abs(e.deltaY)<8)return;if(homeAPI)homeAPI.power(e.deltaY>0)},{passive:true});
addEventListener('keydown',e=>{if(homeAPI&&e.key==='Escape')homeAPI.power(false)});
route();
