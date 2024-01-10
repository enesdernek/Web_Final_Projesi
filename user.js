const changeButton = document.getElementById("changeButton");
const changeInputs = document.querySelectorAll(".userInformation");
const confirmButton = document.getElementById("confirmButton");


runEvents()

function runEvents(){
    disableInputs(changeInputs);
    changeButton.addEventListener("click",changeUserInformation)
    confirmButton.addEventListener("click",saveInfos);
}

function disableInputs(changeInputs){
        for(i=0;i<changeInputs.length;i++){
             changeInputs[i].disabled = true
        }
}

function enableInputs(changeInputs){
    for(i=0;i<changeInputs.length;i++){
        changeInputs[i].disabled = false
   }
}

function changeUserInformation(){
    console.log("a");
    enableInputs(changeInputs)
    confirmButton.setAttribute("style","display:inline")  
}



function saveInfos(){
    confirmButton.setAttribute("style","display:none") 
    disableInputs(changeInputs)
}

