const productWrapper = document.querySelector(".productWrapper")

runEvents()

function runEvents(){
    productWrapper.addEventListener("click",removeProduct)
}

function removeProduct(e){
      
      
      if(e.target.classList.contains('deleteProductBtn')){
           e.target.parentElement.remove()
           showAlert("success","Ürün başarıyla silindi.")
      }
}

function showAlert(type,message){
     const alert = document.createElement("div")
     alert.className=`alert alert-${type}`
     alert.textContent=message;
     productWrapper.appendChild(alert)

     setTimeout(function(){
           alert.remove()
     },1500)
}