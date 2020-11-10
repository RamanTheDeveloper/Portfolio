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

