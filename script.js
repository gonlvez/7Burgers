(()=>{const C=window.CONFIG,$=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const wa=m=>`https://wa.me/${C.whatsapp}?text=${encodeURIComponent(m||C.mensagens.padrao)}`;
const cardapio=C.links.anotaai||C.links.menudino;
$$('[data-wa]').forEach(a=>{a.href=wa(a.dataset.msg);a.target='_blank';a.rel='noopener'});
$$('[data-cardapio]').forEach(a=>{if(cardapio&&a.getAttribute('href')==='#'){a.href=cardapio;a.target='_blank';a.rel='noopener'}});
$$('[data-plat]').forEach(a=>{const u=C.links[a.dataset.plat];u?a.href=u:(a.classList.add('off'),a.removeAttribute('href'),a.title='Link não configurado')});
const img=(f,w,h,alt,lazy=1)=>`<img src="assets/images/${f}" alt="${alt}" ${lazy?'loading="lazy"':''}>`;
$('#cats').innerHTML=C.categorias.map(c=>{const ext=c.href==='cardapio';return `<li><a href="${ext?cardapio:c.href}" ${ext?'target="_blank" rel="noopener"':''}>${img(c.img,0,0,c.nome)}<b>${c.nome}</b><small>${c.desc}</small></a></li>`}).join('');
$('#track').innerHTML=C.destaques.map(p=>`<li class="card">${img(p.img,0,0,p.nome)}<h3>${p.nome}</h3><p>Veja ingredientes e detalhes no cardápio digital.</p><span class="price">${p.price||'R$ --,--'}</span>${p.placeholder?'<small class="ph">Foto provisória</small><br>':''}<a class="btn" data-pw href="${wa(C.mensagens.produto+p.nome)}" target="_blank" rel="noopener">Peça agora</a></li>`).join('');
$('#gal').innerHTML=C.galeria.map(g=>g.img?`<figure class="has ${g.grande?'big':''}">${img(g.img,0,0,g.alt)}</figure>`:`<figure>Adicione a foto: ${g.alt}</figure>`).join('');
$('#end').textContent=C.endereco;$('#f-end').textContent=C.endereco;$('#tel').textContent=C.whatsappExibicao;
$('#hor').innerHTML=C.horarios.map(h=>`<li><b>${h[0]}:</b> ${h[1]}</li>`).join('');$('#f-hor').innerHTML=C.horarios.map(h=>`${h[0]}: ${h[1]}`).join('<br>');
$('#maps').href=C.mapsUrl;const ig=$('#insta');C.instagram?ig.href=C.instagram:ig.style.display='none';$('#ano').textContent=new Date().getFullYear();
/* header + menu */
const hd=$('.hd'),b=$('.burger'),nav=$('#nav');const sc=()=>hd.classList.toggle('sc',scrollY>30);sc();addEventListener('scroll',sc,{passive:true});
const close=()=>{nav.classList.remove('open');b.setAttribute('aria-expanded','false')};
b.onclick=()=>{const o=nav.classList.toggle('open');b.setAttribute('aria-expanded',o)};
$$('#nav a').forEach(a=>a.addEventListener('click',close));addEventListener('keydown',e=>e.key==='Escape'&&close());
$$('[data-scroll]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();$(a.getAttribute('href')).scrollIntoView()}));
/* link ativo */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)$$('#nav a:not(.btn)').forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
['inicio','cardapio','historia','ambiente','contato'].forEach(i=>io.observe(document.getElementById(i)));
/* carrossel */
$$('.arrows button').forEach(btn=>btn.onclick=()=>{const t=$('#track');t.scrollBy({left:btn.dataset.dir*240,behavior:'smooth'})});
})();
