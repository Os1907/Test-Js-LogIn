var arrSave=[];
if (localStorage.getItem("userdata") != null) {
    arrSave = JSON.parse(localStorage.getItem("userdata"));
}
console.log(arrSave[0].usernme);
for (var i=0; i<arrSave.length; i++) {
document.getElementById("userName").innerHTML=('Welcome '+ arrSave[i].usernme) ;  
}

var logout = document.getElementById("logout");
logout.addEventListener("click",  logoutfuc)
function logoutfuc(){
    window.location.assign("./index.html")
}