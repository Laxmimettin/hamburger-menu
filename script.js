
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const overlay = document.getElementById("overlay");
const closeButton = document.getElementById("close-btn");
const navLinks = document.querySelectorAll(".nav-link");

const mobileScreen = window.matchMedia("(max-width: 900px)");

function openMenu() {
    if (!mobileScreen.matches) return;

    document.body.classList.add("menu-open");
    hamburger.setAttribute("aria-expanded", "true");
    hamburger.setAttribute("aria-label", "Close navigation menu");

    closeButton.focus();
}

function closeMenu(returnFocus = false) {
    document.body.classList.remove("menu-open");
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.setAttribute("aria-label", "Open navigation menu");

    if (returnFocus && mobileScreen.matches) {
        hamburger.focus();
    }
}

hamburger.addEventListener("click", () => {
    const isOpen =
        hamburger.getAttribute("aria-expanded") === "true";

    if (isOpen) {
        closeMenu();
    } else {
        openMenu();
    }
});

closeButton.addEventListener("click", () => {
    closeMenu(true);
});

overlay.addEventListener("click", () => {
    closeMenu(true);
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.forEach((item) => {
            item.classList.remove("active");
        });

        link.classList.add("active");
        closeMenu();
    });
});

document.addEventListener("keydown", (event) => {
    if (
        event.key === "Escape" &&
        document.body.classList.contains("menu-open")
    ) {
        closeMenu(true);
    }
});

mobileScreen.addEventListener("change", (event) => {
    if (!event.matches) {
        closeMenu();
    }
});

document.getElementById("year").textContent =
    new Date().getFullYear();