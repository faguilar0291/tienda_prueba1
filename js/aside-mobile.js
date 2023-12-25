const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const aside = document.querySelector("aside");

openMenu.addEventListener("click", () => {
    aside.classList.add("aside__mobile");
});

closeMenu.addEventListener("click", () => {
    aside.classList.remove("aside__mobile");
});


categoryButtons.forEach(button => button.addEventListener("click", () => {
    aside.classList.remove("aside__mobile");
}))