import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });


// Kodlar buraya gelecek!


const body = document.querySelector("body");
window.addEventListener("load", (e) => {
    body.style.background = "red";
})

const imges = document.querySelectorAll("img");
imges.forEach((s) => {
    s.addEventListener("mouseover", (event) =>{
        s.style.filter = "grayscale(100%)"
})
s.addEventListener("mouseleave", (event) =>{
    s.style.filter = "unset"
})
})

let input = document.getElementById("input1")
input.addEventListener("focus", (e) => {
    e.target.style.border = "10px solid red";
})

input.addEventListener("blur", (e) => {
    e.target.style.border = null;
})

window.addEventListener("blur", (e) => {
    document.querySelector("body").style.backgroundColor = "red" ;
})

window.addEventListener("focus", () => {
    document.querySelector("body").style.backgroundColor = "white" ;
})

window.addEventListener("resize", (e) => {
    input.value = `${window.innerWidth} x ${window.innerHeight}` ;
    if (window.innerWidth < 600) {
        document.querySelector("body").style.backgroundColor = "red" ; 
    } else {
        document.querySelector("body").style.backgroundColor = null ;
    }
})

input.addEventListener("keydown", (e) => {
   if(e.key==1){
    input.style.border="10px solid blue";
   }

})

 
const img2=document.getElementById("img2")
img2.addEventListener("dragstart", (ev) =>{
    ev.dataTransfer.setData("Text", ev.target.id);
   
})

const p1 = document.getElementById("p1");
p1.addEventListener("drop", (ev) =>{
    let data = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
    ev.preventDefault();
})

p1.addEventListener("dragover", (ev) => {
    ev.preventDefault();
})