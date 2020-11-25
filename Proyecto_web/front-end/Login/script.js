function validate (){
    var Username = document.getElementById("uname")
    var password = document.getElementById("pass")

if (Username.value.trim() == "" || password.value.trim() == "")
{   
    alert("No blank values allowed")
    return false;
}
else
{
    true;
}

}