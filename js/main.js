const btn = document.querySelector(".navbar__open");
const menu = document.querySelector(".navbar__items");

btn.addEventListener('click', () => {
    menu.classList.toggle("show");
    console.log("toggle");
})