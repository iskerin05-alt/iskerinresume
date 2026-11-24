
const menuBtn=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
if(menuBtn&&nav){menuBtn.addEventListener('click',()=>{const opened=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',opened?'true':'false');});}
const themeBtn=document.querySelector('.theme-toggle');
if(themeBtn){if(localStorage.getItem('portfolio-theme')==='dark')document.body.classList.add('dark');themeBtn.addEventListener('click',()=>{document.body.classList.toggle('dark');localStorage.setItem('portfolio-theme',document.body.classList.contains('dark')?'dark':'light');});}
const current=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('.nav a').forEach(a=>{if(a.getAttribute('href')===current)a.classList.add('active');});
const form=document.getElementById('contactForm');
if(form){form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;document.getElementById('formNote').textContent='Рақмет! Форма тексерілді. Бұл демонстрациялық нұсқа, хабарлама серверге жіберілген жоқ.';form.reset();});}
