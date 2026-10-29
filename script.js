/* TYPING EFFECT */

const words = [

"Computer Science Student",
"Web Developer",
"Java Programmer",
"GitHub Enthusiast"

];

let index = 0;

setInterval(()=>{

document.getElementById("typing")
.innerText = words[index];

index = (index + 1) % words.length;

},2000);

/* SCROLL REVEAL */

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

});

document
.querySelectorAll(".reveal")
.forEach(item => {

observer.observe(item);

});

/* PARTICLES */

const canvas=
document.getElementById("particles");

const ctx=
canvas.getContext("2d");

canvas.width=
window.innerWidth;

canvas.height=
window.innerHeight;

let particles=[];

for(let i=0;i<70;i++){

particles.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

r:Math.random()*3

});

}

function animate(){

ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);

ctx.fillStyle=
"rgba(100,255,218,.5)";

particles.forEach(p=>{

ctx.beginPath();

ctx.arc(
p.x,
p.y,
p.r,
0,
Math.PI*2
);

ctx.fill();

p.y -= .3;

if(p.y < 0){

p.y = canvas.height;

}

});

requestAnimationFrame(animate);

}

animate();

window.addEventListener(
"resize",
()=>{

canvas.width=
window.innerWidth;

canvas.height=
window.innerHeight;

}
);