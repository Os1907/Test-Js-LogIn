var username= document.getElementById("nameuser"); 
var useremail= document.getElementById("emailuser"); 
var userPassword= document.getElementById("Passworduser");
var logIntBtn= document.getElementById("logIntBtn");
var comparetBtn=document.getElementById("comparetBtn");

logIntBtn.addEventListener("click", showdata );

var arrSave=[];
if (localStorage.getItem("userdata") != null) {
    arrSave = JSON.parse(localStorage.getItem("userdata"));
}
var matchFound = false;

function showdata(){
var objSave={
        usermail: useremail.value,
        userpassowrdd: userPassword.value
}
arrSave.push(objSave);
localStorage.setItem('userdata', JSON.stringify(arrSave));
}
comparetBtn.addEventListener('click', compareresult)

function compareresult(){
    var email =useremail.value  ;
for (var i = 0; i < arrSave.length; i++){
    if (arrSave[i].usermail.toLowerCase() == email.toLowerCase())
        {
        matchFound = true;
        break;
    } 
    }
    console.log(matchFound);

    if (matchFound) {
        console.log('Match found!');
    } else {
        console.log('not found!');
    }
    console.log(arrSave[i].usermail +"=>");
    console.log(email);
}
