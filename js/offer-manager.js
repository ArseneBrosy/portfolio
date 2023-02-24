var descriptions = [
    `
    Test 001<br>
    retour.
    `,
    `
    Test 002<br>
    retour<br>
    retour.
    `,
    `
    Test 003<br>
    retour<br>
    retour<br>
    retour.
    `,
    `
    Test 004<br>
    retour<br>
    retour<br>
    retour<br>
    retour.
    `,
];
var prices = [
    200,
    100,
    75,
    50
];

function o_loop() {
        if (document.getElementById('offers-select').selectedIndex === 0) {
            document.getElementById('offer-details').style.display = "none";
            document.getElementById('offer-button').style.display = "none";
        } else {
            document.getElementById('offer-details').style.display = "block";
            document.getElementById('offer-button').style.display = "block";
        }

        document.getElementById("offer-price").innerHTML = prices[document.getElementById('offers-select').selectedIndex - 1] + " CHF";
        document.getElementById("offer-description").innerHTML = descriptions[document.getElementById('offers-select').selectedIndex - 1];

    requestAnimationFrame(o_loop);
}

requestAnimationFrame(o_loop);