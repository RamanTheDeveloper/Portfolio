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


//Send form email
function sendEmail(){
    Email.send({
        SecureToken : "3d226189-d5b8-4c05-aa22-211fc79f4e27",
        To : 'ramandeep-singh25@outlook.com',
        Subject : "Work with me"
    }).then(
      message => alert(message)
    );
}