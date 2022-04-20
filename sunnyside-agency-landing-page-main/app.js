const menuBtn = document.querySelector(".hamburger");
const menu = document.querySelector("nav ul")

menuBtn.addEventListener("click",()=>{
    menu.classList.toggle("active")
})