
const productFilterInput = document.querySelector(".form-control")

const meyvesebze = document.getElementById("meyvesebze")
const suturunleri = document.getElementById("suturunleri")
const eturunleri = document.getElementById("eturunleri")
const temelgida = document.getElementById("temelgida")
const atistirmalik = document.getElementById("atistirmalik")
const icecek = document.getElementById("icecek")
const temizlik = document.getElementById("temizlik")
const elektronik = document.getElementById("elektronik")



runEvents()

function runEvents() {
    meyvesebze.addEventListener("click", scrollmeyvesebze)
    suturunleri.addEventListener("click", scrollsuturunleri)
    eturunleri.addEventListener("click", scrolleturunleri)
    temelgida.addEventListener("click", scrolltemelgida)
    atistirmalik.addEventListener("click", scrollatistirmalik)
    icecek.addEventListener("click", scrollicecek)
    temizlik.addEventListener("click", scrolltemizlik)
    elektronik.addEventListener("click", scrollelektronik)
    productFilterInput.addEventListener("keyup", filterProducts)
}

function filterProducts(e) {
    const inputValue = e.target.value.trim().toLowerCase();
    const products = document.querySelectorAll(".product-text.card-text.card-category")


    products.forEach((product) => {
        if (product.textContent.trim().toLowerCase().includes(inputValue)) {
             product.parentElement.parentElement.setAttribute("style","display:block")
        }
        else{
            product.parentElement.parentElement.setAttribute("style","display:none !important")
            product.parentElement.parentElement.setAttribute("style","display:none !important")
        }
    })



}

function scrollmeyvesebze() {
    window.scrollTo(0, 850)
}

function scrollsuturunleri() {
    window.scrollTo(0, 1360)
}

function scrolleturunleri() {
    window.scrollTo(0, 1800)
}

function scrolltemelgida() {
    window.scrollTo(0, 2300)
}

function scrollatistirmalik() {
    window.scrollTo(0, 2750)
}

function scrollicecek() {
    window.scrollTo(0, 3300)
}

function scrolltemizlik() {
    window.scrollTo(0, 3750)
}

function scrollelektronik() {
    window.scrollTo(0, 4200)
}







