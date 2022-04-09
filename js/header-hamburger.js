const navHamburger = document.querySelector(".navbar__hamburger");
const navMenu = document.querySelector(".navbar__menu");
const hBarActive = document.querySelector(".navbar__hamburger-hbar");

navHamburger.addEventListener("click", () =>{
    navHamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    const active = navHamburger.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active){
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else{
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
})

document.querySelectorAll(".navbar__link").forEach(n => n.addEventListener("click", () =>{
    navHamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))