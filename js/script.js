//Transform navbar from transparent to solid on scroll
var nav = document.getElementById("navbar");

window.onscroll = function(){
    if(window.pageYOffset > 300){
        nav.style.background = "#1C1C1C";
    }
    else{
        nav.style.background = "rgba(0,0,0,0.2)";
    }
}


//Contact form
const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value === "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});



//Hamburger menu in navbar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navItem = document.querySelectorAll(".nav-item");

navItem.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}