const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
});

// Close menu when link clicked (mobile)
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("show");
    });
});
