// @ts-nocheck
/* Imported chat bundle. See src/templates/chat.ts for provenance.
 *
 * Checked out of the typecheck gate above: this is the vendored build's own JavaScript, lifted out of
 * the single-file bundle unchanged apart from the base64 images becoming
 * real files. It was never written against this project's strict config and
 * type-annotating it by hand would mean rewriting someone else's working
 * code. It is checked out of the typecheck gate instead, so `npm run
 * typecheck` keeps covering the code this project actually authors. Replace
 * the whole file when a new bundle arrives rather than editing it. */
import '../styles/fonts.css';
import '../styles/chat.css';

(function(){
  const arrow='<svg class="lu-sm" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>';
  // the Figma deck each project opens. A project with no deck yet keeps
  // opening its case study page.
  const DECK={
    'project-files':'https://www.figma.com/deck/TZo2m7iWsOFw6WwC6HcocY',
    'construction-data-ai':'https://www.figma.com/deck/wxTNEePZiZHBl0scCbZDX1'
  };
  const cases=[
    {id:'c1',slug:'project-files',n:1,name:"0\u21921 Product Design \u00b7 Part3",title:"Project Files",stat:"$652K+ Annual revenue associated with Project Files \u00b7 58K+ Drawings managed in Part3",
     fig:'<div class="shotfig"><video autoplay muted loop playsinline preload="metadata"><source src="/case/project-files/hero-sm.mp4" type="video/mp4" media="(max-width: 700px)"><source src="/case/project-files/hero.mp4" type="video/mp4"></video></div>'},
    {id:'c3',slug:'construction-data-ai',n:3,name:"AI & Analytics \u00b7 Part3",title:"Insights Builder",stat:"",
     fig:'<div class="shotfig"><video autoplay muted loop playsinline preload="metadata"><source src="/case/construction-data-ai/hero-sm.mp4" type="video/mp4" media="(max-width: 700px)"><source src="/case/construction-data-ai/hero.mp4" type="video/mp4"></video></div>'},
    {id:'c2',slug:'activation-growth',n:2,name:"Growth \u00b7 Part3",title:"Activation & Growth",stat:"77 Projects started from firm-authored templates \u00b7 54% Of subsequent projects reused a template among firms that created one \u00b7 37% Historical activation baseline, giving us a starting point to measure future improvements",
     fig:'<div class="shotfig"><video autoplay muted loop playsinline preload="metadata"><source src="/case/activation-growth/hero-sm.mp4" type="video/mp4" media="(max-width: 700px)"><source src="/case/activation-growth/hero.mp4" type="video/mp4"></video></div>'},
    {id:'c4',slug:'self-serve-billing',n:4,name:"Monetization \u00b7 Part3",title:"Self-Serve Billing",stat:"~27% Of Maxio-linked firms used self-service \u00b7 29 sec One firm's seat purchase, down from a multi-day process \u00b7 7 : 1 Approval-to-purchase ratio",
     fig:'<div class="shotfig"><video autoplay muted loop playsinline preload="metadata"><source src="/case/self-serve-billing/hero-sm.mp4" type="video/mp4" media="(max-width: 700px)"><source src="/case/self-serve-billing/hero.mp4" type="video/mp4"></video></div>'}
  ];
  const metrics={c1:[['Drawings managed','58K+'],['Paid product','0→1']],c2:[['Activation baseline','37%'],['Opportunities','3']],c3:[['Direction','Proposed'],['Dashboard','Demonstrated']],c4:[['Firms','44'],['Seat changes','245']]};
  const icons={c1:'<path d="M3 2.5h6.5L13 6v7.5H3z"/><path d="M9.5 2.5V6H13"/>',c2:'<path d="M8 2v2.5M8 11.5V14M2 8h2.5M11.5 8H14"/><circle cx="8" cy="8" r="3"/>',c4:'<path d="M2.5 5.5h11v7h-11z"/><path d="M2.5 8.5h11"/><circle cx="11" cy="10.5" r="1"/>',c3:'<rect x="2.5" y="2.5" width="4.5" height="4.5" rx="1"/><rect x="9" y="2.5" width="4.5" height="4.5" rx="1"/><rect x="2.5" y="9" width="4.5" height="4.5" rx="1"/><rect x="9" y="9" width="4.5" height="4.5" rx="1"/>'};
  // A project opens its deck. One without a deck yet is not a link at all:
  // a card that cannot go anywhere should not look like it can.
  const card=(c,withId,fig=true)=>{
    const deck=DECK[c.slug], tag=deck?'a':'div';
    return '<'+tag+' class="card rc pop'+(deck?'':' soon')+'"'+(withId?' id="'+c.id+'"':'')
      +(deck?' href="'+deck+'" target="_blank" rel="noopener"':'')+'>'
      +'<div class="rc-h"><span class="rc-name">'+c.name+'</span></div>'
      +'<h3>'+c.title+'</h3>'
      +(fig?'<div class="fig'+(c.fig.indexOf('shotfig')>-1?' fig-shot':'')+'">'+c.fig+'</div>':'')
      +'<div class="rc-f"><span class="rc-btn">'+(deck?'View project '+arrow:'Coming soon')+'</span></div>'
      +'</'+tag+'>';
  };
  const tpl=document.getElementById('intro').innerHTML
    .replace('__CARDS__',cases.map(c=>card(c,true)).join(''))
    .replace('__CARDS2__',cases.map(c=>card(c,false)).join(''));

  var INTRO_MS_=2200;
  const col=document.getElementById('col'), scroller=document.getElementById('scroll'), bar=document.getElementById('bar');
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const EV=['pointerdown','keydown','wheel','touchstart'];

  // split a paragraph into its rendered lines; {n} becomes a citation chip
  function splitLines(el){
    const text=el.dataset.text||(el.dataset.text=el.textContent.trim());
    const tok=w=>w.replace(/\{(\d)\}([.,;]?)/,(m,n,p)=>'<a class="cite" href="#c'+n+'" data-jump="c'+n+'"><svg class="lu-xs" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" /></svg>'+['','Project Files','Activation & Growth','Insights Builder','Self-Serve Billing'][n]+'</a>'+p);
    el.innerHTML=text.replace(/ +\{(\d)\}/g,'\u00a0{$1}').split(/[ \t\n]+/).map(w=>'<span class="tk">'+(/\{\d\}/.test(w)?'<span class="nw">'+tok(w)+'</span>':tok(w))+'</span>').join(' ');
  }
  function setP(el,p){
    if(el.classList.contains('pop')){ const k=Math.min(Math.max((p+40)/170,0),1); el.style.opacity=k; el.style.transform=k<1?'translateY('+(6*(1-k))+'px)':''; }
    else { const k=Math.min(Math.max((p+40)/170,0),1); el.style.opacity=k; el.style.filter=k<1?'blur('+(6*(1-k)).toFixed(2)+'px)':''; el.style.transform=k<1?'translateY('+(3*(1-k)).toFixed(2)+'px)':''; }
  }

  let active=null;
  function stream(block,total,follow){
    if(active) active.finish();
    block.querySelectorAll('.view:not([hidden]) [data-stream], .ansblock [data-stream]').forEach(splitLines);
    const list=[...block.querySelectorAll('.tk, .pop')].filter(el=>!el.closest('[hidden]'));
    const status=block.querySelector('.status');
    let raf, ended=false;
    list.forEach(el=>setP(el,-40));
    const finish=()=>{ if(ended) return; ended=true; cancelAnimationFrame(raf); list.forEach(el=>setP(el,130)); if(status){ status.style.opacity=1; status.classList.add('fin'); const x=status.querySelector('.el'); if(x && x.textContent==='0.0s') x.textContent='0.6s'; } block.classList.add('done'); block.querySelectorAll('[data-stream] .tk').forEach(t=>t.replaceWith(...t.childNodes)); EV.forEach(e=>removeEventListener(e,finish)); active=null; };
    active={finish};
    if(reduce){ finish(); return; }

    // header and sources land first, a short "writing" beat, then lines stream and everything after pops in
    const statusAt=list.findIndex(el=>status && (status.compareDocumentPosition(el)&Node.DOCUMENT_POSITION_FOLLOWING));
    const pre=statusAt<0?list:list.slice(0,statusAt), post=statusAt<0?[]:list.slice(statusAt);
    const sched=[]; let t=0;
    pre.forEach((el,i)=>{ sched.push({el,start:t,dur:240}); t+=70; });
    const think=status?650:0; t+=think;
    const w=el=>el.classList.contains('card')?200:el.classList.contains('pop')?60:16;
    const sum=post.reduce((a,el)=>a+w(el),0)||1, budget=Math.max(total-t,500);
    const thinkStart=t-think;
    post.forEach(el=>{ const d=budget*w(el)/sum; sched.push({el,start:t,dur:el.classList.contains('tk')?Math.max(d*5,320):Math.max(d,160)}); t+=el.classList.contains('pop')?d*.5:d*.92; });
    const end=Math.max(...sched.map(s=>s.start+s.dur));
    if(status) status.style.opacity=0;
    const pool=['Preheating the oven','Mincing the garlic','Letting the dough rise','Tasting for salt','Deglazing the pan','Stirring the risotto','Folding in the egg whites','Toasting the sesame seeds','Letting it rest','Plating it nicely'];
    const verbs=pool.slice().sort(()=>Math.random()-.5).slice(0,2);
    if(status){ const sh=status.querySelector('.shimmer'); if(sh) sh.textContent=verbs[0]; }
    const t0=performance.now();
    (function frame(now){
      const e=now-t0;
      if(status){ status.style.opacity=e>thinkStart?1:0; const sh=status.querySelector('.shimmer'); if(sh){ const w=verbs[Math.min(Math.floor(Math.max(e-thinkStart,0)/340),verbs.length-1)]; if(sh.textContent!==w) sh.textContent=w; } const el2=status.querySelector('.el'); if(el2 && !status.classList.contains('fin')) el2.textContent=(Math.min(Math.max(e-thinkStart,0),think)/1000).toFixed(1)+'s'; if(e>thinkStart+think) status.classList.add('fin'); }
      sched.forEach(s=>{ const k=Math.min(Math.max((e-s.start)/s.dur,0),1); setP(s.el,-40+(1-Math.pow(1-k,2))*170); });
      if(follow) scroller.scrollTop=scroller.scrollHeight;
      if(e<end+40) raf=requestAnimationFrame(frame); else finish();
    })(t0);
    setTimeout(()=>{ if(!ended) EV.forEach(e=>addEventListener(e,finish,{once:true,passive:true})); },300);
  }

  function playIntro(){
    col.innerHTML=tpl; scroller.scrollTop=0;
    stream(col.querySelector('.entry'),INTRO_MS_,false);
  }

  // tabs
  col.addEventListener('click',e=>{
    const tab=e.target.closest('.tab');
    if(tab){
      const entry=tab.closest('.entry');
      entry.querySelectorAll('.tab').forEach(x=>{ const on=x===tab; x.classList.toggle('on',on); x.setAttribute('aria-selected',on); x.tabIndex=on?0:-1; });
      entry.querySelectorAll('.view').forEach(v=>{ v.hidden=v.dataset.view!==tab.dataset.tab; });
      const askrow=entry.querySelector('.askrow'); if(askrow) askrow.hidden=tab.dataset.tab!=='answer';
      entry.querySelectorAll('.view:not([hidden]) .pop').forEach(el=>setP(el,130));
      return;
    }
    const j=e.target.closest('[data-jump]'); if(j){ e.preventDefault(); jump(j.dataset.jump); return; }
    const trb=e.target.closest('.tr-btn');
    if(trb){ const open=trb.getAttribute('aria-expanded')!=='true'; trb.setAttribute('aria-expanded',open); const bd=document.getElementById(trb.getAttribute('aria-controls')); bd.classList.toggle('open',open); bd.setAttribute('aria-hidden',!open); bd.inert=!open; return; }
    const r=e.target.closest('.rel'); if(r) ask(r.dataset.q);
  });

  function jump(id){
    if(active) active.finish();
    const first=col.querySelector('.entry');
    if(first && id!=='top'){ const t=first.querySelector('.tab[data-tab="answer"]'); if(t && !t.classList.contains('on')) t.click(); }
    const el=document.getElementById(id); if(!el) return;
    el.scrollIntoView({behavior:reduce?'auto':'smooth',block:id==='top'?'start':'center'});
    if(el.classList.contains('card')){ el.classList.add('flash'); setTimeout(()=>el.classList.remove('flash'),1000); }
  }
  function setActiveThread(btn){ document.querySelectorAll('.side .th').forEach(x=>{ const on=x===btn; x.classList.toggle('on',on); if(on) x.setAttribute('aria-current','true'); else x.removeAttribute('aria-current'); }); const t=document.querySelector('.bar .t'); if(t&&btn) t.textContent=btn.dataset.q||"Who's Amy?"; }
  function addThread(q){
    let btn=[...document.querySelectorAll('.side .th')].find(x=>x.dataset.q===q);
    if(!btn){ btn=document.createElement('button'); btn.className='row th'; btn.dataset.q=q; btn.textContent=q; const today=document.getElementById('today'); today.insertBefore(btn, today.children[1]||null); }
    setActiveThread(btn);
  }
  document.querySelector('.side').addEventListener('click',e=>{
    if(e.target.closest('#chatsBtn')){ setCollapsed(false); return; }
    const b=e.target.closest('.th'); if(!b) { if(e.target===e.currentTarget) app.classList.remove('open'); return; }
    if(active) active.finish();
    setActiveThread(b);
    if(b.dataset.go==='top') jump('top');
    else {
      const hit=[...col.querySelectorAll('.entry .bubble')].find(x=>x.textContent===b.dataset.q);
      if(hit) hit.scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'}); else ask(b.dataset.q);
    }
    app.classList.remove('open');
  });

  const app=document.getElementById('app');
  col.addEventListener('keydown',e=>{
    const tab=e.target.closest('.tab'); if(!tab) return;
    const tabs=[...tab.parentNode.querySelectorAll('.tab')]; let i=tabs.indexOf(tab);
    if(e.key==='ArrowRight') i=(i+1)%tabs.length; else if(e.key==='ArrowLeft') i=(i-1+tabs.length)%tabs.length;
    else if(e.key==='Home') i=0; else if(e.key==='End') i=tabs.length-1; else return;
    e.preventDefault(); tabs[i].focus(); tabs[i].click();
  });
  // mobile drawer: inert when closed, focus moves in and back out
  const side=document.querySelector('.side'), mainEl=document.querySelector('.main'), menuBtn=document.getElementById('menu');
  const mq=matchMedia('(max-width:860px)');
  function syncDrawer(focus){
    const open=app.classList.contains('open'), mob=mq.matches;
    side.inert = mob && !open; mainEl.inert = mob && open;
    menuBtn.setAttribute('aria-expanded', open);
    if(focus && mob){ if(open){ const f=side.querySelector('.th'); f&&f.focus(); } else menuBtn.focus(); }
  }
  let wasOpen=false;
  new MutationObserver(()=>{ const o=app.classList.contains('open'); if(o!==wasOpen){ wasOpen=o; syncDrawer(true); } }).observe(app,{attributes:true,attributeFilter:['class']});
  mq.addEventListener('change',()=>syncDrawer(false));
  setTimeout(()=>syncDrawer(false));
  document.getElementById('menu').addEventListener('click',()=>app.classList.toggle('open'));
  const col_btn=document.getElementById('collapse');
  document.querySelectorAll('.side .row').forEach(r=>{ if(r.closest('.lib')) return; r.title=r.textContent.trim(); r.childNodes.forEach(n=>{ if(n.nodeType===3&&n.textContent.trim()){ const s=document.createElement('span'); s.className='lbl'; s.textContent=n.textContent.trim(); n.replaceWith(s); } }); });
  function setCollapsed(on){ app.classList.toggle('collapsed',on); col_btn.setAttribute('aria-expanded',!on); col_btn.setAttribute('aria-label',on?'Expand sidebar':'Collapse sidebar'); try{ localStorage.setItem('sideCollapsed',on?'1':'0'); }catch(e){} }
  col_btn.addEventListener('click',e=>{ e.stopPropagation(); setCollapsed(!app.classList.contains('collapsed')); });
  try{ if(localStorage.getItem('sideCollapsed')==='1') setCollapsed(true); }catch(e){}
  addEventListener('keydown',e=>{ if((e.metaKey||e.ctrlKey)&&e.key==='\\'){ e.preventDefault(); setCollapsed(!app.classList.contains('collapsed')); } });
  document.getElementById('scrim').addEventListener('click',()=>app.classList.remove('open'));
  addEventListener('keydown',e=>{ if(e.key==='Escape') app.classList.remove('open'); });
  addEventListener('keydown',e=>{ if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){ e.preventDefault(); document.getElementById('input').focus(); }});

  // follow-ups: answers written by Amy, matched by keyword
  const linksRow='<div class="tools pop"><a class="pill ghost" href="mailto:ayjzhou@gmail.com">Email</a><a class="pill ghost" href="/resume.html" target="_blank" rel="noopener">Resume</a><a class="pill ghost" href="https://www.linkedin.com/in/amyyjzhou/" target="_blank" rel="noopener">LinkedIn</a></div>';
  // by id, so reordering the list cannot put the wrong card under an answer
  const mini=id=>'<div class="cards" style="margin-top:18px">'+card(cases.find(c=>c.id===id),false)+'</div>';
  const answers=[
    {k:/^amy's resume$/i, a:'Here is my resume. One page, PDF.', x:'<div class="rsm pop"><div class="rsm-frame"><p class="rsm-fallback">If the preview does not load, open or download the resume below.</p><div class="rsm-fit"><iframe class="rsm-doc" src="/resume.html" title="Amy Zhou, resume" loading="lazy" scrolling="no"></iframe></div></div><div class="rsm-acts"><a class="rsm-open" href="https://drive.google.com/file/d/1j4ykMs8B7TO3vfYmPjJoGhWmnjomap9A/view?usp=sharing" target="_blank" rel="noopener">Open in Google Drive '+arrow+'</a></div></div>'},
    {k:/^amy on linkedin$/i, a:'Here is my LinkedIn. Happy to connect.', x:'<div class="cards" style="margin-top:18px"><a class="card rc pop" href="https://www.linkedin.com/in/amyyjzhou/" target="_blank" rel="noopener"><div class="rc-h"><span class="rc-name">linkedin.com</span></div><h3>Amy Zhou on LinkedIn</h3><div class="rc-f"><span class="rc-note">Senior product designer at Part3</span><span class="rc-btn">Open LinkedIn '+arrow+'</span></div></a></div>'},
    {k:/^tell me about amy$|^about amy$|learn more about amy/i, a:"", x:"<figure class=\"amy-photo pop\"><img src=\"/amy.jpg\" alt=\"Amy Zhou\" width=\"900\" height=\"1200\" loading=\"lazy\" onerror=\"this.closest('figure').remove()\"></figure><p class=\"ans\" data-stream>Amy Zhou is a Senior Product Designer who enjoys making complex problems feel a little less complicated.</p><p class=\"ans pop\">She collaborates with engineers, founders, and cross-functional teams to bring ideas to life. Her experience spans startups, SaaS, 0\u21921 product development, and growth. She enjoys figuring out what to build, working through the messy parts, and seeing an idea become something people can actually use.</p><p class=\"ans pop\">She\u2019s curious by nature and asks a lot of questions. She likes understanding the why before jumping into the what. And while she cares about the details, she always keeps the bigger picture in mind.</p><p class=\"ans pop\">When she\u2019s not designing, Amy is usually traveling, hiking somewhere unexpected, trying a new cuisine, or finding an excuse to get boba. She\u2019s a firm believer that the best experiences often come with a good story, and she\u2019s always collecting more.</p><div class=\"related pop\"><button class=\"rel pop\" data-q=\"Get to know Amy\"><svg class=\"i\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><polyline points=\"15 10 20 15 15 20\" /><path d=\"M4 4v7a4 4 0 0 0 4 4h12\" /></svg><span>Get to know Amy</span></button><button class=\"rel pop\" data-q=\"Fun facts\"><svg class=\"i\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><polyline points=\"15 10 20 15 15 20\" /><path d=\"M4 4v7a4 4 0 0 0 4 4h12\" /></svg><span>Fun facts</span></button></div>"},
    {k:/^who is amy|get to know amy|who's amy really/i, a:"Amy is a product designer by day, Type Z personality by\u2026 well, also day. She loves traveling, eating her way through new cities, and saying super slay with absolutely no intention of stopping.", x:"<p class=\"ans pop\">She has a questionable relationship with itineraries, an apparently nonexistent sense of hand-eye coordination, and a tendency to turn vacations into hiking adventures.</p><div class=\"related pop\"><button class=\"rel pop\" data-q=\"Fun facts\"><svg class=\"i\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><polyline points=\"15 10 20 15 15 20\" /><path d=\"M4 4v7a4 4 0 0 0 4 4h12\" /></svg><span>Fun facts</span></button></div>"},
    {k:/not on your|fun fact/i, a:"Amy is a Type Z personality, a dessert enthusiast, and a firm believer that the best stories sometimes come from questionable decisions", x:"<ul class=\"facts pop\"><li>At 19, she accidentally climbed Mt. Fuji with no gear. The sunrise was worth it. The lack of hiking poles? Less so</li><li>Spent a week in Shanghai trying the entire CHAGEE menu</li><li>Has a very serious pastel de nata ranking. Past\u00e9is de Bel\u00e9m (the OG, if you know, you know) takes the crown</li><li>Says \u201csuper slay\u201d enough that her friends know it\u2019s her catchphrase</li><li>Loves hiking, skiing, and boba. Somehow, \u201cshould we just walk there?\u201d is always on the table</li><li>Has never met a dessert menu she didn\u2019t want to eat her way through</li></ul><div class=\"related pop\"><button class=\"rel pop\" data-q=\"Get to know Amy\"><svg class=\"i\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><polyline points=\"15 10 20 15 15 20\" /><path d=\"M4 4v7a4 4 0 0 0 4 4h12\" /></svg><span>Get to know Amy</span></button></div>"},
    {k:/project files|drawing|file browser|files|58k|652k|register|revision/i, a:"Part3 helps architects manage construction administration, but the drawings behind that work lived outside the product. I led the end-to-end design of Project Files, a 0\u21921 paid product, from identifying the opportunity and driving the product direction to designing the drawing import, revision management, and specification experiences. {1}", x:mini('c1')},
    {k:/activation|onboarding|setup|getting started|template|37%/i, a:"Part3 grew through a land-and-expand sales model supported by white-glove customer onboarding. As the customer base expanded, relying on CX to get every firm up and running became difficult to scale. I took ownership of activation across product strategy and design, leading the initiative alongside a Customer Success Manager. I helped set growth priorities, designed onboarding improvements, and defined how we would measure progress. {2}", x:mini('c2')},
    {k:/\\bai\\b|data|reporting|dashboard|analytics|chart|insights/i, a:"Architects use Part3 to manage construction administration, from reviewing submittals and responding to RFIs to tracking changes and drawing revisions. These workflows generate valuable information about project progress, turnaround times, and outstanding work. But while Part3 helped teams manage their work, customers had limited control over how they could analyze and report on it. I identified an opportunity to turn that data into more useful insights, defining a customizable dashboard experience with AI-assisted reporting. {3}", x:mini('c3')},
    {k:/billing|seat|access|invoice|provisional|permission|self-serve/i, a:"The person adding a teammate wasn't the person paying for the seat. Customers could manage their projects independently, but expanding their teams still required support. I designed the self-serve experience to remove that dependency while giving firms control over additional spending. {4}", x:mini('c4')},
    {k:/reach|contact|email|hire|resume|resume|linkedin|talk/i, a:'Email is the fastest way to reach me. My resume and LinkedIn are here too.', x:linksRow},
  ];
  const fallback={a:'I can walk you through Project Files {1}, Activation & Growth {2}, Insights Builder {3}, or Self-Serve Billing {4}. Or reach me directly.', x:linksRow};

  // composer only offers preset questions, opened with /
  const cmds=[
    {c:'/about-amy', q:'About Amy'},
    {c:'/project-files', q:'Project Files'},
    {c:'/activation', q:'Activation & Growth'},
    {c:'/insights-and-analytics', q:'Insights Builder'},
    {c:'/billing', q:'Self-Serve Billing'},
    {c:'/get-to-know-amy', q:'Get to know Amy'},
    {c:'/fun-facts', q:'Fun facts', hidden:true},
    {c:'/contact', q:'How do I reach you?'},
    // hidden: only appear when typed exactly
    {c:'/off-the-record', q:'Fun facts', hidden:true},
    {c:'/play', q:'Got any games?', hidden:true, a:'Help the dumpling hop over the kitchen. Space or tap to jump.', x:'<div class="gamewrap pop"><div class="ghud"><span class="gscore">0</span><span class="gbest">Best 0</span></div><canvas class="game" width="240" height="64" tabindex="0" aria-label="Dumpling hop game. Press space or tap to jump."></canvas><div class="gmsg" aria-live="polite">Space or tap to start</div></div>'},
    {c:'/snake', q:'Snake?', hidden:true, a:'Close. It\'s a noodle. Arrow keys or swipe to steer, and eat the dumplings.', x:'<div class="gamewrap pop"><div class="ghud"><span class="gscore">0</span><span class="gbest">Best 0</span></div><canvas class="game snake" width="160" height="96" tabindex="0" aria-label="Noodle snake game. Use arrow keys or swipe to steer."></canvas><div class="gmsg" aria-live="polite">Press an arrow key or swipe to start</div></div>'}
  ];
  const input=document.getElementById('input'), send=document.getElementById('send'), menu=document.getElementById('cmds');
  let sel=0, shown=cmds;
  function render(){
    const v=input.value.replace(/^\//,'').trim().toLowerCase();
    shown=cmds.filter(x=> x.hidden ? v===x.c.slice(1) : (x.c+' '+x.q).toLowerCase().includes(v));
    sel=Math.min(sel,Math.max(shown.length-1,0));
    menu.innerHTML=shown.length
      ? shown.map((x,i)=>'<button type="button" role="option" id="opt-'+i+'" aria-selected="'+(i===sel)+'" class="cmd'+(i===sel?' on':'')+(x.hidden?' found':'')+'" data-i="'+i+'"><span class="cc">'+x.c+'</span><span class="cq">'+x.q+'</span>'+(x.hidden?'<span class="egg">Found one</span>':'')+'</button>').join('')+(v===''?'<div class="cmd-hint">A few more if you guess</div>':'')
      : '<div class="cmd-empty">No matching question. Keep guessing.</div>';
    menu.hidden=false; send.disabled=!shown.length; input.setAttribute('aria-expanded','true'); if(shown.length) input.setAttribute('aria-activedescendant','opt-'+sel); else input.removeAttribute('aria-activedescendant');
  }
  function close(){ input.setAttribute('aria-expanded','false'); input.removeAttribute('aria-activedescendant'); menu.hidden=true; input.value=''; send.disabled=true; sel=0; }
  function pick(i){ const x=shown[i]; if(!x) return; close(); input.blur(); ask(x.q, x.hidden&&x.a?{a:x.a,x:x.x||''}:null); }
  input.addEventListener('focus',()=>{ sel=0; render(); });
  input.addEventListener('input',()=>{ sel=0; render(); });
  input.addEventListener('blur',()=>setTimeout(()=>{ if(document.activeElement!==input) close(); },120));
  input.addEventListener('keydown',e=>{
    if(e.key==='ArrowDown'){ e.preventDefault(); sel=(sel+1)%Math.max(shown.length,1); render(); }
    else if(e.key==='ArrowUp'){ e.preventDefault(); sel=(sel-1+shown.length)%Math.max(shown.length,1); render(); }
    else if(e.key==='Enter'){ e.preventDefault(); pick(sel); }
    else if(e.key==='Escape'){ close(); input.blur(); }
  });
  menu.addEventListener('mousedown',e=>e.preventDefault());
  menu.addEventListener('click',e=>{ const b=e.target.closest('.cmd'); if(b) pick(+b.dataset.i); });
  send.addEventListener('click',()=>pick(sel));
  addEventListener('keydown',e=>{ if(e.key==='/' && document.activeElement!==input){ e.preventDefault(); input.focus(); } });

  // ---- dumpling hop: tiny pixel runner ----
  let game=null;
  function startGame(cv){
    if(game) game.stop();
    const wrap=cv.closest('.gamewrap'), ctx=cv.getContext('2d');
    const W=cv.width, H=cv.height, G=54;
    const css=getComputedStyle(document.documentElement);
    const C={ink:css.getPropertyValue('--ink').trim(), soft:css.getPropertyValue('--ink-3').trim(), panel:css.getPropertyValue('--panel').trim(), bar:css.getPropertyValue('--bar').trim()};
    const S={
      dump:["....XXX....","..XX.X.XX..",".X..X.X..X.","X.........X","X..X...X..X","X....X....X",".X.......X.","..XXXXXXX.."],
      dumpJ:["....XXX....","..XX.X.XX..",".X..X.X..X.","X..X...X..X","X.........X","X...XXX...X",".X.......X.","..XXXXXXX.."],
      dead:["....XXX....","..XX.X.XX..",".X..X.X..X.","X.X.X.X.X.X","X..X...X..X","X.X.X.X.X.X",".X.......X.","..XXXXXXX.."],
      pot:["XX.XXXXXX.XX",".XXXXXXXXXX.","..X......X..","..X......X..","..X......X..","..XXXXXXXX.."],
      bottle:["..XX..","..XX..",".XXXX.","XXXXXX","X....X","XXXXXX","X....X","X....X","XXXXXX"],
      pan:["XXXXXXXX......",".XXXXXX.XXXXXX"],
      garlic:["..X..",".XXX.","X.X.X","X.X.X",".XXX."],
      steam:[".X.","X..",".X."]
    };
    const draw=(m,x,y,col)=>{ ctx.fillStyle=col; for(let r=0;r<m.length;r++) for(let c=0;c<m[r].length;c++) if(m[r][c]==='X') ctx.fillRect(Math.round(x)+c,Math.round(y)+r,1,1); };
    let best=0; try{ best=+localStorage.getItem('amy-dumpling-best')||0; }catch(e){}
    const scoreEl=wrap.querySelector('.gscore'), bestEl=wrap.querySelector('.gbest'), msg=wrap.querySelector('.gmsg');
    bestEl.textContent='Best '+best;
    let st, raf, last=0, acc=0, running=true, visible=true;
    function reset(){ st={mode:'ready', y:G-8, vy:0, speed:1, dist:0, score:0, obs:[], items:[], next:60, ground:0, t:0}; }
    reset();
    function jump(){
      if(st.mode==='ready'){ st.mode='play'; msg.textContent=''; }
      else if(st.mode==='over'){ if(st.t<30) return; reset(); st.mode='play'; msg.textContent=''; }
      if(st.mode==='play' && st.y>=G-8-0.5){ st.vy=-3.15; }
    }
    function spawn(){
      const r=Math.random();
      const type=st.score<15? (r<.6?'pot':'pan') : (r<.4?'pot':r<.7?'pan':'bottle');
      const m=S[type]; st.obs.push({m, x:W+4, y:G-m.length});
      if(Math.random()<.45) st.items.push({x:W+30+Math.random()*30, y:G-22-Math.random()*10, got:false});
      st.next = 70 + Math.random()*70 + st.speed*18;
    }
    const hit=(ax,ay,aw,ah,bx,by,bw,bh)=>ax<bx+bw&&ax+aw>bx&&ay<by+bh&&ay+ah>by;
    function step(){
      st.t++;
      if(st.mode!=='play') return;
      st.speed=Math.min(2.3, 1+st.dist/2400);
      st.vy+=0.17; st.y=Math.min(G-8, st.y+st.vy); if(st.y>=G-8) st.vy=0;
      st.dist+=st.speed; st.ground=(st.ground+st.speed)%6;
      if((st.next-=st.speed)<=0) spawn();
      st.obs.forEach(o=>o.x-=st.speed); st.obs=st.obs.filter(o=>o.x>-20);
      st.items.forEach(i=>i.x-=st.speed); st.items=st.items.filter(i=>i.x>-10&&!i.got);
      const px=24, py=st.y;
      for(const o of st.obs){ if(hit(px+2,py+2,7,5,o.x+1,o.y+1,o.m[0].length-2,o.m.length-1)){ st.mode='over'; st.t=0; finishRun(); return; } }
      for(const i of st.items){ if(hit(px,py,11,8,i.x,i.y,5,5)){ i.got=true; st.bonus=(st.bonus||0)+5; } }
      st.score=Math.floor(st.dist/14)+(st.bonus||0);
      scoreEl.textContent=st.score;
    }
    function finishRun(){
      if(st.score>best){ best=st.score; try{ localStorage.setItem('amy-dumpling-best',best); }catch(e){} bestEl.textContent='Best '+best; msg.textContent='Burnt, but a new best: '+st.score+'. Space to cook again.'; }
      else msg.textContent='Burnt it at '+st.score+'. Space to cook again.';
    }
    function render(){
      ctx.clearRect(0,0,W,H);
      ctx.fillStyle=C.soft; for(let x=-st.ground;x<W;x+=6) ctx.fillRect(Math.round(x),G,3,1);
      st.items.forEach(i=>draw(S.garlic,i.x,i.y+Math.sin((st.t+i.x)/8)*1.2,C.soft));
      st.obs.forEach(o=>{ draw(o.m,o.x,o.y,C.ink); if(o.m===S.pot && (st.t>>3)%2) draw(S.steam,o.x+4,o.y-5,C.soft); });
      const m= st.mode==='over'?S.dead : st.y<G-8.5?S.dumpJ:S.dump;
      draw(m,24,st.y,C.ink);
    }
    function loop(ts){
      if(!running) return;
      if(!document.body.contains(cv)){ stop(); return; }
      const dt=Math.min(ts-(last||ts),100); last=ts; acc+=dt;
      if(visible) while(acc>=16.67){ step(); acc-=16.67; } else acc=0;
      render(); raf=requestAnimationFrame(loop);
    }
    function onKey(e){
      if(!visible || e.target.closest&&e.target.closest('input,textarea')) return;
      if(e.code==='Space'||e.key===' '||e.key==='ArrowUp'){ e.preventDefault(); jump(); }
    }
    const io=new IntersectionObserver(es=>{ visible=es[0].isIntersecting; if(!visible&&st.mode==='play'){ /* pause */ } },{threshold:.4});
    io.observe(cv);
    cv.addEventListener('pointerdown',e=>{ e.preventDefault(); jump(); });
    addEventListener('keydown',onKey);
    function stop(){ running=false; cancelAnimationFrame(raf); removeEventListener('keydown',onKey); io.disconnect(); }
    game={stop};
    raf=requestAnimationFrame(loop);
  }

  // ---- noodle snake ----
  function startSnake(cv){
    if(game) game.stop();
    const wrap=cv.closest('.gamewrap'), ctx=cv.getContext('2d');
    const CELL=8, COLS=cv.width/CELL, ROWS=cv.height/CELL;
    const css=getComputedStyle(document.documentElement);
    const C={ink:css.getPropertyValue('--ink').trim(), soft:css.getPropertyValue('--ink-3').trim(), bar:css.getPropertyValue('--bar').trim()};
    const DUMP=["..X..",".XXX.","X.X.X","XXXXX",".XXX."];
    const scoreEl=wrap.querySelector('.gscore'), bestEl=wrap.querySelector('.gbest'), msg=wrap.querySelector('.gmsg');
    let best=0; try{ best=+localStorage.getItem('amy-noodle-best')||0; }catch(e){}
    bestEl.textContent='Best '+best;
    let st, raf, last=0, acc=0, running=true, visible=true;
    function placeFood(){ let f; do{ f={x:Math.floor(Math.random()*COLS), y:Math.floor(Math.random()*ROWS)}; }while(st.body.some(b=>b.x===f.x&&b.y===f.y)); st.food=f; }
    function reset(){ const y=Math.floor(ROWS/2); st={mode:'ready', body:[{x:6,y},{x:5,y},{x:4,y}], dir:{x:1,y:0}, queue:[], score:0, tick:150, t:0}; placeFood(); scoreEl.textContent=0; }
    reset();
    function turn(dx,dy){
      if(st.mode==='over'){ if(st.t<20) return; reset(); }
      if(st.mode!=='play'){ st.mode='play'; msg.textContent=''; }
      const lastDir=st.queue.length?st.queue[st.queue.length-1]:st.dir;
      if(dx===-lastDir.x && dy===-lastDir.y) return;
      if(dx===lastDir.x && dy===lastDir.y) return;
      if(st.queue.length<2) st.queue.push({x:dx,y:dy});
    }
    function step(){
      if(st.queue.length) st.dir=st.queue.shift();
      const h=st.body[0];
      const n={x:(h.x+st.dir.x+COLS)%COLS, y:(h.y+st.dir.y+ROWS)%ROWS};  // walls wrap, easier
      if(st.body.slice(0,-1).some(b=>b.x===n.x&&b.y===n.y)){ st.mode='over'; st.t=0; end(); return; }
      st.body.unshift(n);
      if(n.x===st.food.x&&n.y===st.food.y){ st.score++; scoreEl.textContent=st.score; st.tick=Math.max(80,150-st.score*3); placeFood(); }
      else st.body.pop();
    }
    function end(){
      if(st.score>best){ best=st.score; try{ localStorage.setItem('amy-noodle-best',best); }catch(e){} bestEl.textContent='Best '+best; msg.textContent='Tangled, but a new best: '+st.score+'. Arrow key to go again.'; }
      else msg.textContent='Tangled up at '+st.score+'. Arrow key to go again.';
    }
    function render(){
      ctx.clearRect(0,0,cv.width,cv.height);
      ctx.fillStyle=C.bar; for(let x=0;x<COLS;x++) for(let y=0;y<ROWS;y++) ctx.fillRect(x*CELL+3,y*CELL+3,1,1);
      ctx.fillStyle=C.ink; for(let r=0;r<5;r++) for(let c=0;c<5;c++) if(DUMP[r][c]==='X') ctx.fillRect(st.food.x*CELL+1+c, st.food.y*CELL+1+r+((st.t>>4)%2?0:0),1,1);
      st.body.forEach((b,i)=>{
        ctx.fillStyle = i===0?C.ink:(st.mode==='over'?C.soft:C.ink);
        const pad=i===0?0:1; ctx.fillRect(b.x*CELL+pad,b.y*CELL+pad,CELL-pad*2,CELL-pad*2);
        if(i>0){ const p=st.body[i-1]; if(Math.abs(p.x-b.x)+Math.abs(p.y-b.y)===1){ ctx.fillRect(Math.min(p.x,b.x)*CELL+1+(p.x!==b.x?CELL-2:0), Math.min(p.y,b.y)*CELL+1+(p.y!==b.y?CELL-2:0), p.x!==b.x?2:CELL-2, p.y!==b.y?2:CELL-2); } }
      });
      const h=st.body[0]; ctx.fillStyle=getComputedStyle(document.body).backgroundColor;
      const ex=st.dir.x, ey=st.dir.y;
      if(ex){ ctx.fillRect(h.x*CELL+(ex>0?5:2),h.y*CELL+2,1,1); ctx.fillRect(h.x*CELL+(ex>0?5:2),h.y*CELL+5,1,1); }
      else { ctx.fillRect(h.x*CELL+2,h.y*CELL+(ey>0?5:2),1,1); ctx.fillRect(h.x*CELL+5,h.y*CELL+(ey>0?5:2),1,1); }
    }
    function loop(ts){
      if(!running) return;
      if(!document.body.contains(cv)){ stop(); return; }
      const dt=Math.min(ts-(last||ts),200); last=ts; st.t++;
      if(visible && st.mode==='play'){ acc+=dt; while(acc>=st.tick && st.mode==='play'){ step(); acc-=st.tick; } } else acc=0;
      render(); raf=requestAnimationFrame(loop);
    }
    const K={ArrowUp:[0,-1],ArrowDown:[0,1],ArrowLeft:[-1,0],ArrowRight:[1,0],w:[0,-1],s:[0,1],a:[-1,0],d:[1,0]};
    function onKey(e){
      if(!visible || (e.target.closest&&e.target.closest('input,textarea,.tab'))) return;
      const k=K[e.key]; if(k){ e.preventDefault(); turn(k[0],k[1]); }
    }
    let sx=0, sy=0;
    cv.addEventListener('touchstart',e=>{ const t=e.touches[0]; sx=t.clientX; sy=t.clientY; },{passive:true});
    cv.addEventListener('touchmove',e=>e.preventDefault(),{passive:false});
    cv.addEventListener('touchend',e=>{ const t=e.changedTouches[0], dx=t.clientX-sx, dy=t.clientY-sy; if(Math.max(Math.abs(dx),Math.abs(dy))<18) return; if(Math.abs(dx)>Math.abs(dy)) turn(Math.sign(dx),0); else turn(0,Math.sign(dy)); });
    const io=new IntersectionObserver(es=>{ visible=es[0].isIntersecting; },{threshold:.4}); io.observe(cv);
    addEventListener('keydown',onKey);
    function stop(){ running=false; cancelAnimationFrame(raf); removeEventListener('keydown',onKey); io.disconnect(); }
    game={stop};
    raf=requestAnimationFrame(loop);
  }
  let traceN=0;
  function trace(t){
    if(!t) return '';
    const id='trace-'+(++traceN);
    return '<div class="trace pop"><button class="tr-btn" aria-expanded="false" aria-controls="'+id+'"><span>How I approached this</span><svg class="lu-sm tr-chev" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg></button><div class="tr-body" id="'+id+'" aria-hidden="true"><div class="tr-in"><ol class="tr-steps">'+t.map(x=>'<li><b>'+esc(x[0])+'</b> '+esc(x[1])+'</li>').join('')+'</ol></div></div></div>';
  }
  function esc(s){ const d=document.createElement('div'); d.textContent=s; return d.innerHTML; }
  function ask(q,forced){
    q=q.trim(); if(!q) return;
    if(active) active.finish();
    input.value=''; send.disabled=true;
    addThread(q);
    const m=forced||answers.find(x=>x.k.test(q))||fallback;
    const el=document.createElement('article'); el.className='entry';
    el.innerHTML='<div class="askrow pop"><h2 class="bubble">'+esc(q)+'</h2></div><div class="ansblock"><div class="status"><span class="pix"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span><span class="shimmer">Preheating the oven</span></div>'+trace(m.t)+'<p class="ans" data-stream>'+esc(m.a)+'</p>'+m.x+'</div>';
    col.appendChild(el);
    // Pin the question to the top of the view and let the answer fill in
    // underneath it. Chasing the bottom of a growing answer scrolled the
    // question — and the start of the stream — off the screen.
    requestAnimationFrame(()=>{ scroller.scrollTo({top:el.offsetTop-12, behavior:'smooth'}); });
    stream(el,1300,false);
    const cv=el.querySelector('canvas.game'); if(cv) (cv.classList.contains('snake')?startSnake:startGame)(cv);
  }

  let lastY=0;
  scroller.addEventListener('scroll',()=>{
    const y=scroller.scrollTop; bar.classList.toggle('lined',y>4);
    if(matchMedia('(max-width:860px)').matches){
      if(y>80 && y>lastY+6) app.classList.add('barhide');
      else if(y<lastY-6 || y<40) app.classList.remove('barhide');
    }
    lastY=y;
  },{passive:true});

  // bar chart fills once its card is visible
  setInterval(()=>col.querySelectorAll('.fig:not(.seen)').forEach(f=>{ const r=f.getBoundingClientRect(); if(r.top<innerHeight*.85&&r.bottom>60&&+f.closest('.card').style.opacity>=1) f.classList.add('seen'); }),250);


  (document.fonts&&document.fonts.ready?document.fonts.ready:Promise.resolve()).then(()=>setTimeout(playIntro,150));

  // Arriving back through history restores the finished DOM from the back/forward
  // cache without re-running any of this, so the answer would just be sitting
  // there. Entering the chat should always play, however you got here.
  addEventListener('pageshow',e=>{ if(e.persisted) playIntro(); });

  // ---- case study pages: plain article, same content source ----
  (function(){
    const page=document.getElementById('casepage');
    const P=t=>'<span class="ph">'+t+'</span>';
    const study={
      c1:{summary:'Construction teams were sending drawing sets back and forth over email. I moved them into the project, where everyone works from the same current set.',
        meta:[['Role','Sole product designer'],['Team',P('[Team]')],['Timeline',P('[Timeline]')],['Status','Shipped']],
        tldr:['Drawings lived in email threads, so teams worked from different versions.','I designed Project Files to make the current drawing set part of the project itself.','58K+ drawings uploaded so far, used by 40% of existing customers.'],
        problem:[P('[Who was stuck, and what it looked like day to day.]'),P('[What it cost them: rework, wrong revisions, time spent searching.]'),P('[How you knew: CX conversations, tickets, usage data.]')],
        constraints:['Seed-stage company with one product designer.',P('[Engineering capacity and timeline.]'),P('[Integration constraints, e.g. Procore or Bluebeam.]')],
        decisions:[
          {t:P('[Decision 1, e.g. how revisions are shown]'),o:P('[Options you considered]'),c:P('[What you chose]'),w:P('[Why, and what you gave up]')},
          {t:P('[Decision 2]'),o:P('[Options]'),c:P('[Choice]'),w:P('[Why]')},
          {t:P('[Decision 3]'),o:P('[Options]'),c:P('[Choice]'),w:P('[Why]')}],
        outcome:[['58K+','drawings uploaded'],['40%','of existing customers using it']],
        outcomeText:P('[What moved, what didn\'t, and what you heard from customers.]'),
        next:P('[What you would change or build next, and why.]')},
      c2:{summary:'Most people opened the AI review and read it, but few acted on it. The work was designing for what happens after the answer.',
        meta:[['Role','Sole product designer'],['Team',P('[Team]')],['Timeline',P('[Timeline]')],['Status',P('[Status]')]],
        tldr:['83% of people opened the AI review and 70% read it.','Only 15% accepted it.',P('[What you changed, and the result.]')],
        problem:[P('[Why acceptance was low.]'),P('[What reviewers needed to trust and act on an answer.]'),P('[How you found out.]')],
        constraints:['Seed-stage company with one product designer.',P('[Model and data constraints.]'),P('[Engineering capacity.]')],
        decisions:[
          {t:P('[Decision 1, e.g. showing evidence for each finding]'),o:P('[Options]'),c:P('[Choice]'),w:P('[Why]')},
          {t:P('[Decision 2]'),o:P('[Options]'),c:P('[Choice]'),w:P('[Why]')},
          {t:P('[Decision 3]'),o:P('[Options]'),c:P('[Choice]'),w:P('[Why]')}],
        outcome:[['83%','opened'],['70%','read'],['15%','accepted']],
        outcomeText:P('[What moved after your changes. If it didn\'t move much, say what you learned.]'),
        next:P('[What you would do next.]')},
      c3:{summary:'Contractors, architects, consultants, and owners each had their own submittal experience. I merged them into one page that adapts to each role.',
        meta:[['Role','Sole product designer'],['Team',P('[Team]')],['Timeline',P('[Timeline]')],['Status',P('[Status]')]],
        tldr:['Four role-specific submittal flows had drifted apart.','I designed one page that adapts to whoever is looking at it.',P('[Result.]')],
        problem:[P('[What four separate flows cost users and the team.]'),P('[Where the flows overlapped and where they truly differed.]'),P('[How you knew.]')],
        constraints:['Seed-stage company with one product designer.',P('[Data model constraints.]'),P('[Procore integration constraints.]')],
        decisions:[
          {t:P('[Decision 1, e.g. what adapts by role and what stays fixed]'),o:P('[Options]'),c:P('[Choice]'),w:P('[Why]')},
          {t:P('[Decision 2]'),o:P('[Options]'),c:P('[Choice]'),w:P('[Why]')},
          {t:P('[Decision 3]'),o:P('[Options]'),c:P('[Choice]'),w:P('[Why]')}],
        outcome:[['4 → 1','submittal flows'],['4','roles served']],
        outcomeText:P('[What moved.]'),
        next:P('[What you would do next.]')}
    };
    const bySlug={}; cases.forEach(c=>bySlug[c.slug]=c);
    let lastMode='chat', io=null;
    function render(c){
      const d=study[c.id], i=cases.indexOf(c), nx=cases[(i+1)%cases.length];
      const secs=[['tldr','Summary'],['problem','Problem'],['constraints','Constraints'],['decisions','Key decisions'],['outcome','Outcome'],['next','What I\'d do next']];
      page.innerHTML='<header class="cs-bar"><a class="cs-back" href="#'+lastMode+'"><svg class="lu-sm" viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>All work</a><span class="cs-crumb">'+c.name+'</span></header>'
        +'<main class="cs-wrap"><article class="cs">'
        +'<p class="cs-kicker">Case study 0'+c.n+'</p><h1 class="cs-title">'+c.title+'</h1><p class="cs-sum">'+d.summary+'</p>'
        +'<dl class="cs-meta">'+d.meta.map(m=>'<div><dt>'+m[0]+'</dt><dd>'+m[1]+'</dd></div>').join('')+'</dl>'
        +'<figure class="cs-hero"><div class="fig seen">'+c.fig+'</div><figcaption>'+P('[Replace with your best before and after, or the shipped screen.]')+'</figcaption></figure>'
        +'<section id="cs-tldr" class="cs-tldr" aria-labelledby="h-tldr"><h2 id="h-tldr">Summary</h2><ul>'+d.tldr.map(t=>'<li>'+t+'</li>').join('')+'</ul></section>'
        +'<section id="cs-problem" aria-labelledby="h-problem"><h2 id="h-problem">Problem</h2>'+d.problem.map(p=>'<p>'+p+'</p>').join('')+'</section>'
        +'<section id="cs-constraints" aria-labelledby="h-constraints"><h2 id="h-constraints">Constraints</h2><ul>'+d.constraints.map(t=>'<li>'+t+'</li>').join('')+'</ul></section>'
        +'<section id="cs-decisions" aria-labelledby="h-decisions"><h2 id="h-decisions">Key decisions</h2>'+d.decisions.map((x,k)=>'<div class="cs-dec"><h3><span class="n">0'+(k+1)+'</span>'+x.t+'</h3><dl><div><dt>Options</dt><dd>'+x.o+'</dd></div><div><dt>Chose</dt><dd>'+x.c+'</dd></div><div><dt>Why</dt><dd>'+x.w+'</dd></div></dl><div class="cs-shot">'+P('[Visual for this decision]')+'</div></div>').join('')+'</section>'
        +'<section id="cs-outcome" aria-labelledby="h-outcome"><h2 id="h-outcome">Outcome</h2><div class="cs-stats">'+d.outcome.map(o=>'<div><b>'+o[0]+'</b><span>'+o[1]+'</span></div>').join('')+'</div><p>'+d.outcomeText+'</p></section>'
        +'<section id="cs-next" aria-labelledby="h-next"><h2 id="h-next">What I\'d do next</h2><p>'+d.next+'</p></section>'
        +'<footer class="cs-foot"><p class="cs-label">Next case study</p>'+card(nx,false,false)+'<p class="cs-contact"><a href="mailto:ayjzhou@gmail.com">Email me</a><a href="/resume.html" target="_blank" rel="noopener">Resume</a><a href="https://www.linkedin.com/in/amyyjzhou/" target="_blank" rel="noopener">LinkedIn</a></p></footer>'
        +'</article><nav class="cs-index" aria-label="On this page"><p>On this page</p><ol>'+secs.map(x=>'<li><button type="button" data-sec="cs-'+x[0]+'">'+x[1]+'</button></li>').join('')+'</ol></nav></main>';
      page.querySelectorAll('.pop').forEach(el=>el.style.opacity=1);
      const btns=[...page.querySelectorAll('.cs-index button')];
      if(io) io.disconnect();
      io=new IntersectionObserver(es=>es.forEach(en=>{ if(en.isIntersecting) btns.forEach(b=>b.classList.toggle('on',b.dataset.sec===en.target.id)); }),{rootMargin:'-30% 0px -60% 0px'});
      page.querySelectorAll('section[id]').forEach(x=>io.observe(x));
      document.title=c.name+' · Amy Zhou';
    }
    page.addEventListener('click',e=>{ const b=e.target.closest('[data-sec]'); if(b){ document.getElementById(b.dataset.sec).scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'}); } });
    function route(){
      const h=location.hash.slice(1), c=bySlug[h];
      // The only thing not sourced from this bundle: case studies are the
      // classic ones. Its own case pages below go unused.
      if(c){ location.href='/'+c.slug+'.html'; return; }
      if(h==='chat'||h==='classic') lastMode=h;
      if(c){
        if(active) active.finish();
        document.body.classList.add('case-mode'); page.hidden=false; document.getElementById('app').inert=true; document.getElementById('classic').inert=true;
        render(c); window.scrollTo(0,0); page.querySelector('.cs-title').setAttribute('tabindex','-1'); page.querySelector('.cs-title').focus({preventScroll:true});
      } else if(!page.hidden){
        document.body.classList.remove('case-mode'); page.hidden=true; document.getElementById('classic').inert=false; document.title="Amy Zhou · Product designer";
        window.__setMode(lastMode,false);
      }
    }
    try{ lastMode=localStorage.getItem('viewMode')||'chat'; }catch(e){}
    if(document.body.classList.contains('classic-mode')) lastMode='classic';
    addEventListener('hashchange',route);
    addEventListener('keydown',e=>{ if(e.key==='Escape' && !page.hidden) location.hash=lastMode; });
    route();
  })();
})();
