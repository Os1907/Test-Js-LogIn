var username= document.getElementById("nameuser"); 
var useremail= document.getElementById("emailuser"); 
var userPassword= document.getElementById("Passworduser");
var logIntBtn= document.getElementById("logIntBtn");
var creatBtn=document.getElementById("creatBtn");


// ==>Buttons <===
creatBtn.addEventListener("click", signup );
logIntBtn.addEventListener("click", testData );

// ==> Array <===
var arrSave=[]
if (localStorage.getItem("userdata") != null) {
    arrSave = JSON.parse(localStorage.getItem("userdata"));
}
// ============

var messageDisaple=document.getElementById("message-disaple");
var messageDisaple2=document.getElementById("message-disaple2");
var alertDisaple = document.getElementById("alertMessage");
var locationGo= document.getElementById("ancer");

// ===> for Message User about data

if (arrSave.length == 0)
    {
        console.log('You dont have an account');
        messageDisaple.style="display:block"
        logIntBtn.style="display:none"
    } else if (arrSave.length > 0 ) {

        console.log('You have an account');
        messageDisaple2.style="display:block"
    }

// ====> For testing Data

var matchFound = false;
function testData(){
    var email =useremail.value  ;
    var Passworduser =userPassword.value  ;

//====================> <================================ 
//     if (arrSave.length == 0)
//     {
//     matchFound = true;
// } if (matchFound) {
//     console.log('You dont have an account');
//     window.location.assign("./signup.html")
// } else {}
//====================> <================================ 

    for (var i = 0; i < arrSave.length; i++){
        if (arrSave[i].usermail.toLowerCase() == useremail.value && arrSave[i].userpassowrdd == Passworduser)
            {
            matchFound = true;
            console.log(matchFound);
            break;
        } 
        }
        if (matchFound) {
            console.log('You have an account');
            window.location.assign("./welcome.html")

        } else {
            console.log('not found!');
            alertDisaple.style.display="block";

        }

}


// ===> For signin <==
function signup(){
    window.location.assign("./signup.html")
}


locationGo.addEventListener('click',signup );
