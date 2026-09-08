import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
document.addEventListener('DOMContentLoaded',()=>{
 const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches, opening=document.querySelector('#opening'),invitation=document.querySelector('#invitation');
 document.querySelector('#openInvitation')?.addEventListener('click',()=>{if(reduce){opening.classList.add('is-hidden');invitation.setAttribute('aria-hidden','false');return}gsap.timeline().to('.open-circle',{scale:1.2,opacity:0,duration:.35}).to(opening,{opacity:0,duration:.7,pointerEvents:'none',onComplete:()=>{opening.classList.add('is-hidden');invitation.setAttribute('aria-hidden','false')}},'-.05').from('.hero-copy h1 span',{y:35,opacity:0,stagger:.16,duration:1,ease:'power3.out'},'-.35').from('.chandelier',{y:-35,opacity:0,duration:1.1,ease:'power2.out'},'-.8').from('.flower-bed',{y:30,opacity:0,duration:.8},'-.7')});
 document.querySelector('.scroll-pill')?.addEventListener('click',e=>document.querySelector(e.currentTarget.dataset.scroll)?.scrollIntoView({behavior:'smooth'}));
 document.querySelectorAll('[data-reveal]').forEach(el=>{if(!reduce)gsap.from(el,{scrollTrigger:{trigger:el,start:'top 84%',once:true},y:45,opacity:0,duration:.85,ease:'power3.out'})});
 document.querySelectorAll('[data-reveal-heart]').forEach(h=>h.addEventListener('click',()=>h.classList.add('revealed')));document.querySelector('#revealDate')?.addEventListener('click',()=>document.querySelectorAll('[data-reveal-heart]').forEach(h=>h.classList.add('revealed')));
 const c=document.querySelector('.countdown');if(c){const t=new Date(c.dataset.weddingDate).getTime(),set=(u,v)=>c.querySelector(`[data-unit="${u}"]`).textContent=String(v).padStart(2,'0');const tick=()=>{let d=t-Date.now();if(d<=0)return ['days','hours','minutes','seconds'].forEach(u=>set(u,0));set('days',Math.floor(d/86400000));set('hours',Math.floor(d/3600000)%24);set('minutes',Math.floor(d/60000)%60);set('seconds',Math.floor(d/1000)%60)};tick();setInterval(tick,1000)}
 const response=document.querySelector('#rsvpResponse');document.querySelectorAll('[data-rsvp]').forEach(b=>b.addEventListener('click',()=>{response.hidden=false;response.textContent=b.dataset.rsvp==='yes'?'JazakAllah Khair ❤️ We look forward to celebrating with you!':'JazakAllah Khair for letting us know. Your duas mean so much to us.'}));
 document.querySelectorAll('a[href^="["]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();alert('Replace this placeholder with the real Google Maps URL.')}));
});
