const colors = ['#FFFFFF', '#FAEDCD', '#373F51'];

function tween (node, index) {
// Store the node in another variable
let path = node;
// Loop through the colors
colors.forEach((color, index) => {
    if (index !== 0) {
    path = path.cloneNode();
    node.parentNode.appendChild(path);
    }
    path.setAttribute('stroke', color);
});
}

document.querySelectorAll('.svg-title path').forEach(p => tween(p));

document.addEventListener("scroll", () => {
    document.querySelectorAll('.svg-title path').forEach(p => {
        var rect = p.getBoundingClientRect();
        if (
            rect.top >= -200 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 200 &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        ) {
            p.classList.add("animate");
        } else {
            p.classList.remove("animate");
        }
    });
});