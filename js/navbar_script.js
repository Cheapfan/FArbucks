const burger = document.querySelector(".burger");
const nav = document.querySelector(".left");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
})

document.querySelectorAll(".left").forEach(n => n.addEventListener("click", () => {
    burger.classList.remove("active");
    nav.classList.remove("active");
}))