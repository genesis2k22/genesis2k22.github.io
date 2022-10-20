let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mountain_behind = document.getElementById('mountain-behind')
let mountain_front = document.getElementById('mountain-front')
let btn = document.getElementById('btn')
let text = document.getElementById('text')
let header = document.querySelector('nav')

window.addEventListener("scroll", function(){
    var doc = document.documentElement;
    var value = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    stars.style.left = value * 0.25 + 'px'
    moon.style.top = value * 1.05 + 'px'
    mountain_behind.style.top = value * 0.5 + 'px'
    mountain_front.style.top = value * 0 + 'px'
    text.style.marginRight = value * 4 + 'px'
    text.style.marginTop = value * 1.5 + 'px'
    btn.style.marginTop = value * 1.5 + 'px'
    header.style.top= value * 0.5 + "px"
})