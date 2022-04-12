const navHamburger = document.querySelector(".navbar__hamburger");
const navMenu = document.querySelector(".navbar__menu");
const target = document.querySelector('[data-scroll]')

navHamburger.addEventListener("click", () =>{
    navHamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    const active = navHamburger.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active){
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
        navHamburger.classList.add("scroll");
    } else{
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
        //tira o a class scroll do hamburger
        navHamburger.classList.remove("scroll");
    }
})

document.querySelectorAll(".navbar__link").forEach(n => n.addEventListener("click", () =>{
    navHamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))
