var transition = document.getElementById("menu-transition");
var burgerMenu = document.getElementById("burger-menu");
var menu = document.getElementById("menu");

var opened = false;

function OpenClose() {
    if (opened) {
        setTimeout(() => {
            transition.style.zIndex = -1;
        }, 1000);
        document.querySelector("body").classList.remove("no-scroll");
        transition.classList.remove("opened");
        burgerMenu.classList.remove("active");
        menu.style.display = "none";
    } else {
        transition.style.zIndex = 1;
        document.querySelector("body").classList.add("no-scroll");
        transition.classList.add("opened");
        burgerMenu.classList.add("active");
        setTimeout(() => {
            menu.style.display = "block";
        }, 500);
    }
    opened = !opened;
}