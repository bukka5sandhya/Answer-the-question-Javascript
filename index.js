let questionsFormEle = document.getElementById("questionsForm");
let cityHyderabadEle= document.getElementById("cityHyderabad");
let cityChennaiEle = document.getElementById("cityChennai");
let cityDelhiEle = document.getElementById("cityDelhi");
let cityMumbaiEle = document.getElementById("cityMumbai");
let  submitBtnEle = document.getElementById("submitBtn");
let resultMsgEle = document.getElementById("resultMsg");

let capitalCity="Delhi";
let selectedCity = null;

cityHyderabadEle.addEventListener("change",function(event){
    selectedCity = event.target.value;
})
cityChennaiEle.addEventListener("change",function(event){
    selectedCity = event.target.value;
})
cityDelhiEle.addEventListener("change",function(event){
    selectedCity = event.target.value;
})
cityMumbaiEle.addEventListener("change",function(event){
    selectedCity = event.target.value;
})

questionsFormEle.addEventListener("submit",function(event){
    event.preventDefault();
    if(selectedCity === null){
        resultMsgEle.textContent ="Please select the city";
        resultMsgEle.style.color="#dc3545";
    } else if(selectedCity === capitalCity){
        resultMsgEle.textContent = "Correct Answer";
        resultMsgEle.style.color="#2b9a40";
    } else{
        resultMsgEle.textContent ="Wrong Answer";
        resultMsgEle.style.color="#dc3545";
    }
});