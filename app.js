// console.log("this is mahi");

// alert("this script works");
// var username = prompt("type username");
var txtInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output");

function clickEventHandler(){
    // alert("clicked");
    //console.log("input",txtInput.value)
    outputDiv.innerText = "mahnasknsknf" + txtInput.value;  
};
btnTranslate.addEventListener("click",clickEventHandler);