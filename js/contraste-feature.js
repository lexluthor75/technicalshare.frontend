const htmlContraste = document.querySelector(".nada")
const contrasteBtn = document.querySelector(".contraste__btn")

contrasteBtn.addEventListener("click", () =>{
    htmlContraste.classList.toggle("alto-contraste")
})