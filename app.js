// console.log("this is mahi");

// alert("this script works");
// var username = prompt("type username");
var txtInput = document.querySelector("#txt-input1");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output1");
var serverURL = "https://api.funtranslations.com/translate/minion.json";


function getTranslationURL(text){
    return serverURL  + "?" +"text=" +text;
}

function errorHandler(error){
    console.log("error occured",error)
    alert("something wrong with server plse try again sometime");
}

function clickEventHandler(){
    // alert("clicked");
    //console.log("input",txtInput.value)
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
            console.log(translatedText)
        })
        .catch(errorHandler)
        //if the server is not up
        

      
};
btnTranslate.addEventListener("click",clickEventHandler);