

var uname = document.getElementById("user_name");
var email = document.getElementById("user_email");
var name_error = document.getElementById("name_error");
var email_error = document.getElementById("email_error");

uname.addEventListener("blur",nameverify,true);
email.addEventListener("blur",emailverify,true);
function validate()
{ 
    if(uname.value == "")
    {
        user_name.style.border="5px solid red";
        name_error.textContent="username is required";
        name_error.style.width="80%";
        name_error.style.height="40px";
        name_error.style.marginLeft="10%";
        name_error.style.backgroundColor="red";
        name_error.style.borderRadius="10px";
        name_error.style.fontSize="25px";
        user_name.focus();
        return false
    }
   if(email.value == "")
   {
    email_error.style.border="5px solid red";
    email_error.textContent="Email is required";
    email_error.style.width="80%";
    email_error.style.height="40px";
    email_error.style.marginLeft="10%";
    email_error.style.backgroundColor="red";
    email_error.style.borderRadius="10px";
    email_error.style.fontSize="25px";
    user_email.focus();
       return false
   }
}
function nameverify()
{
    if(uname.value!="")
    {
        
        user_name.style.border="5px solid green";
        name_error.style.backgroundColor="teal";
        name_error.innerHTML="";
        return true;
    }  
}
function emailverify()
{
    if(email.value!="")
    {
        
        user_email.style.border="5px solid green";
        email_error.style.backgroundColor="teal";
        email_error.innerHTML="";
        return true;
    }  
}
