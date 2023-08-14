var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


function sendEmail(){
    Email.send({
        SecureToken : "70465048-f005-45ee-ac5b-178221216034",
        To : "bhatrajapesh@gmail.com",
        From : "bhatrajapesh@gmail.com",
        Subject : "from "+document.getElementById("email").value,
        Body : document.getElementById("message").value,
    }).then(
      message => alert(message)
    );
}




