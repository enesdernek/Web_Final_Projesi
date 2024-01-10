const confirmTheOrderButton = document.getElementById("confirmTheOrderButton");
const alertWrapper = document.getElementById("alertWrapper")
const cardNo = document.getElementById("cardNo")
const cardSkt = document.getElementById("cardSkt")
const cardCvv = document.getElementById("cardCvv")
const fc1 = document.querySelector(".fc1")
const fc2 = document.querySelector(".fc2")
const alertText = document.getElementById("alert-text")


runEvents()

function runEvents() {
    confirmTheOrderButton.addEventListener("click", showAlert)
    fc1.addEventListener("click", orderedToMarket)
    fc2.addEventListener("click", orderedToAdress)

}

function orderedToMarket() {
    alertText.textContent = "Siparişinizi marketten teslim alacaksınız."
}

function orderedToAdress() {
    alertText.textContent = "Siparişiniz profilinizde kayıtlı adresinize teslim edilecektir."
}








function showAlert() {

    const alert = document.createElement("div");
    alert.className = "alert alert-success justify-content-between"
    alert.textContent = "Siparişiniz alınmıştır"
    alert.setAttribute("style", "margin-top:10px")


    const i = document.createElement("i")
    i.className = "fa-solid fa-check"
    i.setAttribute("style", "border:3px black solid;border-radius:5px;padding:5px;margin-left:10px;cursor:pointer")
    i.textContent = "Tamam"
    alert.appendChild(i)
    alertWrapper.appendChild(alert)



    const myAlert = document.getElementsByClassName("alert alert-success justify-content-between")



    i.addEventListener("click", (myAlert) => {
        alert.remove()
    })


}

