let openBtn = document.querySelector('.nav-open-btn')
let line = document.querySelectorAll('.line')
let headova = document.querySelector('.header-overlay')
openBtn.addEventListener("click", mobileMenu);
function mobileMenu() {
    openBtn.classList.toggle("active");
    headova.classList.toggle("active");

}
let body = document.querySelector('.body')
let simple = document.querySelector('.simple')
let actions = document.querySelector('.actions')
let about = document.querySelector('.about')
let sun = document.querySelector('.sun')
let moon = document.querySelector('.moon')
let light = document.querySelector('.light')
light.addEventListener("click", dark)

function dark() {
    body.classList.toggle("dark")
    simple.classList.toggle("dark")
    actions.classList.toggle("dark")
    about.classList.toggle("dark")
    sun.classList.toggle("active")
    moon.classList.toggle("active")
    
}