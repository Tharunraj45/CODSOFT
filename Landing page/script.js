# script.js

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

link.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(
this.getAttribute("href")
).scrollIntoView({
behavior:"smooth"
});

});

});


const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(sec=>{

sec.classList.add("hidden");

observer.observe(sec);

});

.hidden{
opacity:0;
transform:translateY(50px);
transition:1s;
}

.show{
opacity:1;
transform:translateY(0);
}

