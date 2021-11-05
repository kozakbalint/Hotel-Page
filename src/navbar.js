const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu");
const crossIcon = document.getElementById("cross");

mobileMenu.hidden = true;

function changeState() {
    if (mobileMenu.hidden) {
        mobileMenu.hidden = false;
        menuIcon.classList.remove("block")
        menuIcon.classList.add("hidden")
        crossIcon.classList.remove("hidden")
        crossIcon.classList.add("block")

    }
    else {
        mobileMenu.hidden = true;
        menuIcon.classList.remove("hidden")
        menuIcon.classList.add("block")
        crossIcon.classList.remove("block")
        crossIcon.classList.add("hidden")
    }
}