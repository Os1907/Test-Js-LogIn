
var username= document.getElementById("nameuser"); 
var useremail= document.getElementById("emailuser"); 
var userPassword= document.getElementById("Passworduser");
var SignuptBtn= document.getElementById("SignuptBtn");

SignuptBtn.addEventListener("click", saveData );

// ==> elements selected from Html ==

var messageDisaple=document.getElementById("message-disaple");
var signUpBtnDisaple = document.getElementById("SignuptBtn");
var loginBtnDisaple = document.getElementById("logIntBtn");
var alertisaple = document.getElementById("alertMessage");
var alertisaple2 = document.getElementById("alertMessage2");
var locationGo= document.getElementById("ancer");

// ============================================================
locationGo.addEventListener('click',goToLogIn );


var arrSave=[];
if (localStorage.getItem("userdata") != null) {
    arrSave = JSON.parse(localStorage.getItem("userdata"));
}
var matchFound = false;
function saveData(){
var objSave={
        usernme: username.value,
        usermail: useremail.value,
        userpassowrdd: userPassword.value
}
if (testvalue(username.value) ){
    console.log("Done!");
    arrSave.push(objSave);
    localStorage.setItem('userdata', JSON.stringify(arrSave));
    messageDisaple.style.display = 'block';
    signUpBtnDisaple.style.display = 'none';
    loginBtnDisaple.style.display = 'block';
} else {
    console.log('Please select');
    alertisaple.style.display = 'block';
    alertisaple2.style.display = 'block';
}
clearinput()
} 




function clearinput() {
    username.value = "";
    useremail.value = "";
    userPassword.value = "";
}

loginBtnDisaple.addEventListener("click", goToLogIn );

function goToLogIn(){
    window.location.assign("./index.html")
    console.log("done");

}

function testvalue(vaildValue) {
    var regex=  /^[a-zA-Z]{2,25}$/ 
    return regex.test(vaildValue)

}
function testMail(mailvalue){
    var regex2=  /^[a-zA-z @.]{2,45}$/
    return regex2.test(mailvalue)

}





// comparetBtn.addEventListener('click', compareresult)

// function compareresult(){
//     var email =useremail.value  ;
// for (var i = 0; i < arrSave.length; i++){
//     if (arrSave[i].usermail.toLowerCase() == email.toLowerCase())
//         {
//         matchFound = true;
//         break;
//     } 
//     }
//     console.log(matchFound);

//     if (matchFound) {
//         console.log('Match found!');
//     } else {
//         console.log('not found!');
//     }
//     console.log(arrSave[i].usermail +"=>");
//     console.log(email);
// }
