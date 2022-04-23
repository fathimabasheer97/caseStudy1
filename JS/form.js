const form = document.getElementsByTagName('form')[1];
let usr = document.getElementById("inputUsername");
let pass = document.getElementById("inputPassword");
function login(usr,pass,redirect)
{
    if((usr.value=="admin")&&(pass.value=="12345"))
{
    // window.location.href="main.html";
    redirect();
    alert("Your input is correct");
    return true;  
   
}
else
{
    alert("You have entered false input");
    return false;
}
}
function redirect()
{
    window.location.href="main.html";
}
form.addEventListener('submit', function(event)
{
    if(!validate())
    {
        event.preventDefault();
    }
});