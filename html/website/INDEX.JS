function validate()
{
    var username=document.getElementById("uername").value;
    var password=document.getElementById("password").value;

    if(username=="employee" && password=="employee"){
        alert("login successfully");
    }else{
        alert("login failed")
    }

}