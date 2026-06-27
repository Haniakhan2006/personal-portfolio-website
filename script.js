const typingText=[
"Frontend Developer",
"Web Designer",
"Problem Solver",
"Future Software Engineer",
"Creative Programmer"
];

let textIndex=0;
let charIndex=0;
let typingElement=document.querySelector(".typing");

function typeEffect(){
if(charIndex<typingText[textIndex].length){
typingElement.textContent+=typingText[textIndex].charAt(charIndex);
charIndex++;
setTimeout(typeEffect,100);
}
else{
setTimeout(eraseEffect,1500);
}
}

function eraseEffect(){
if(charIndex>0){
typingElement.textContent=
typingText[textIndex].substring(0,charIndex-1);
charIndex--;
setTimeout(eraseEffect,50);
}
else{
textIndex++;
if(textIndex>=typingText.length){
textIndex=0;
}
setTimeout(typeEffect,400);
}
}

document.addEventListener("DOMContentLoaded",function(){
if(typingText.length){
setTimeout(typeEffect,500);
}
});

const reveals=document.querySelectorAll(".reveal");

function revealSections(){
reveals.forEach(section=>{
let windowHeight=window.innerHeight;
let revealTop=section.getBoundingClientRect().top;
let revealPoint=120;

if(revealTop<windowHeight-revealPoint){
section.classList.add("active");
}
});
}

window.addEventListener("scroll",revealSections);

const skillBars=document.querySelectorAll(".bar span");

function animateSkills(){
skillBars.forEach(bar=>{
let sectionTop=bar.getBoundingClientRect().top;
if(sectionTop<window.innerHeight-100){
bar.style.width=bar.getAttribute("data-width");
}
});
}

window.addEventListener("scroll",animateSkills);

const counters=document.querySelectorAll(".counter");

function animateCounter(){
counters.forEach(counter=>{
let top=counter.getBoundingClientRect().top;

if(top<window.innerHeight-50){
let target=+counter.getAttribute("data-target");
let count=+counter.innerText;
let increment=target/80;

if(count<target){
counter.innerText=Math.ceil(count+increment);
setTimeout(animateCounter,30);
}
else{
counter.innerText=target;
}
}
});
}

window.addEventListener("scroll",animateCounter);

const cursorGlow=document.querySelector(".cursor-glow");

document.addEventListener("mousemove",function(e){
cursorGlow.style.left=e.clientX+"px";
cursorGlow.style.top=e.clientY+"px";
});

const progressBar=document.getElementById("progress-bar");

window.addEventListener("scroll",function(){
let totalHeight=
document.documentElement.scrollHeight-window.innerHeight;

let progress=
(window.pageYOffset/totalHeight)*100;

progressBar.style.width=progress+"%";
});

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",function(){
if(window.scrollY>500){
topBtn.style.display="block";
}
else{
topBtn.style.display="none";
}
});

topBtn.addEventListener("click",function(){
window.scrollTo({
top:0,
behavior:"smooth"
});
});

const themeToggle=document.getElementById("theme-toggle");

let darkMode=true;

themeToggle.addEventListener("click",function(){
if(darkMode){
document.body.style.background=
"linear-gradient(-45deg,#ffffff,#f5f5f5,#dbeafe,#ffffff)";

document.body.style.color="black";

document.querySelectorAll("input,textarea").forEach(el=>{
el.style.color="black";
el.style.background="#f1f5f9";
});

themeToggle.innerHTML=
'<i class="fas fa-sun"></i>';

darkMode=false;
}
else{
document.body.style.background=
"linear-gradient(-45deg,#0f172a,#111827,#0d1b2a,#020617)";

document.body.style.color="white";

document.querySelectorAll("input,textarea").forEach(el=>{
el.style.color="white";
el.style.background="rgba(255,255,255,.07)";
});

themeToggle.innerHTML=
'<i class="fas fa-moon"></i>';

darkMode=true;
}
});

const navbar=document.getElementById("navbar");

window.addEventListener("scroll",function(){
if(window.scrollY>80){
navbar.style.boxShadow=
"0 5px 30px rgba(0,247,255,.15)";
}
else{
navbar.style.boxShadow="none";
}
});

window.addEventListener("scroll",function(){
let scroll=window.pageYOffset;
let hero=document.getElementById("hero");

hero.style.transform=
"translateY("+scroll*0.08+"px)";
});

const form=document.querySelector("form");

form.addEventListener("submit",function(e){
e.preventDefault();
alert("Message sent successfully!");
form.reset();
});

const cards=document.querySelectorAll(
".project-card, .exp-card, .blog-card, .stat-card"
);

cards.forEach(card=>{
card.addEventListener("mouseenter",function(){
card.style.boxShadow=
"0 0 30px rgba(0,247,255,.4)";
});

card.addEventListener("mouseleave",function(){
card.style.boxShadow="none";
});
});

const hamburger=document.querySelector(".hamburger");
const navLinks=document.querySelector(".nav-links");

hamburger.addEventListener("click",function(){
if(navLinks.style.display==="flex"){
navLinks.style.display="none";
}
else{
navLinks.style.display="flex";
navLinks.style.flexDirection="column";
navLinks.style.position="absolute";
navLinks.style.top="80px";
navLinks.style.right="20px";
navLinks.style.padding="20px";
navLinks.style.background=
"rgba(20,20,20,.95)";
navLinks.style.borderRadius="15px";
}
});

const sections=document.querySelectorAll("section");
const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",function(){
let current="";

sections.forEach(section=>{
let sectionTop=section.offsetTop-150;

if(window.pageYOffset>=sectionTop){
current=section.getAttribute("id");
}
});

navItems.forEach(link=>{
link.classList.remove("active-link");

if(link.getAttribute("href")==="#"+current){
link.classList.add("active-link");
}
});
});