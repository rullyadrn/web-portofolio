const navbarNav = document.querySelector(".navbar");
const menuIcon = document.querySelector(".menu-icon");

document.querySelector('#hamburger-menu').
onclick = () => {
    navbarNav.classList.toggle('active')
};

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
    if (!menuIcon.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
    }
});
