var email = document.forms['form']['email'];
var password = document.forms['form']['passsword'];

var email_error = document.getElementById("email-error");
var pass_error = document.getElementById("pass-error");

email.addEventListener("textInput",email_verify);
passwword.addEventListener("textInput",pass_verify);

function validated(){
    if(email.value.length <9){
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }

if(password.value.length <6){
    password.style.border = "1px solid red";
    pass_error.style.display = "block";
    password.focus();
    return false;  
}
}
function email_verify(){
    if(email.value.length >= 8){
        email.style.border = "1px solid silver";
        email_error.style.display = "none"
        return true;
    }
}
function pass_verify(){
    if(password.value.length >= 8){
        password.style.border = "1px solid silver";
        pass_error.style.display = "none"
        return true;
    }
}