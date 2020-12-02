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


//Send email via form
function sendMail(){
    var name = document.getElementsByName("name").value;
    var email = document.getElementsByName("email").value;
    var subject = document.getElementsByName("subject").value;
    var bodymessage = document.getElementsByName("message").value;

    Email.send({
        SecureToken: "256f5f0f-de53-4c69-932d-adb3688b8a78",
        To: "ramandeep-singh25@outlook.com",
        From: email,
        Subject: subject,
        Body: name+"\n\n"+bodymessage
    }).then(
        message => alert("Mail sent succesfully!")
    );
}