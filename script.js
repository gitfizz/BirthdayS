let texts = [
"Barakallah fii 'umrik Sarahh! 🎂🎈🎉🥳🥰",
"Selamat hari raya juga 🌙🕋🕌",
"Minal aidin wal faizin, Hafiz minta maaf yaa kalo ada salah 🙏🏻🙏🏻😭😭",
"Proud Of You💖🥰"
];

let images = [
"img1.jpg",
"img2.jpg",
"img3.jpg",
"img4.jpg"
];

let index = 0;
let autoslide;
let typingInterval;
let text = document.getElementById("text");
let avatar = document.getElementById("avatar");
let bar = document.getElementById("bar");

let music1 = document.getElementById("music1");
let videos = document.querySelectorAll("video");
let popup1 = document.getElementById("popup1");
let popup2 = document.getElementById("popup2");
let open1 = document.getElementById("pesan1");
let close2 = document.getElementById("close2");
let open2 = document.getElementById("pesan2");


/* INTRO */
function startWebsite(){

document.getElementById("intro").style.display="none";
document.getElementById("music1").play();
document.querySelector("video").play();
}


/* TYPING EFFECT */

function typingEffect(sentence){

let i = 0;
text.innerHTML = "";

typingInterval = setInterval(function(){
text.innerHTML += sentence.charAt(i);
i++;

if(i >= sentence.length){
clearInterval(typingInterval);
}

},50);

}

function slide(){

bar.style.transition = "none";
bar.style.width = "0%";

setTimeout(()=>{
bar.style.transition = "width 5s";
bar.style.width = "100%";
},50);

typingEffect(texts[index]);
avatar.src = images[index];

if(index < texts.length - 1){
    index++;
}else{
    clearInterval(autoslide);
}

}

open1.onclick = function(){
popup1.classList.add("active");
document.body.classList.add("no-scroll");
document.body.style.touchAction = "none";
index = 0;
slide();
autoslide = setInterval(slide,5000);
}

open2.onclick = function(){

popup2.classList.add("active");
popup1.classList.remove("active");
document.body.classList.add("no-scroll");
document.body.style.touchAction = "none";
clearInterval(autoslide);
clearInterval(typingInterval);

}

close2.onclick = function(){
popup2.classList.remove("active");
document.body.classList.remove("no-scroll");
document.body.style.touchAction = "auto";
}


/* LOVE ANIMATION */

const hearts = document.querySelector(".hearts");

function createHeart(){

const heart = document.createElement("span");

heart.innerHTML = "❤️";

heart.style.left = Math.random()*100 + "%";
heart.style.fontSize = Math.random()*20 + 10 + "px";

hearts.appendChild(heart);

setTimeout(()=>{
heart.remove();
},10000);

}

setInterval(createHeart,300);
