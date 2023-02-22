var transition = document.getElementById("menu-transition");
var burgerMenu = document.getElementById("burger-menu");
var menu = document.getElementById("menu");

var opened = false;

function OpenClose() {
    if (opened) {
        transition.classList.remove("opened");
        burgerMenu.classList.remove("active");
        menu.style.display = "none";
    } else {
        transition.classList.add("opened");
        burgerMenu.classList.add("active");
        menu.style.display = "block";
    }
    opened = !opened;
}