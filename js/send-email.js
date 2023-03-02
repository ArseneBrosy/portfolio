function SendEmail() {
    emailjs.init("dqG17UKsAm3gKcmWO");
    var params = {
        name: document.getElementById('email-name').value,
        email: document.getElementById('email-email').value,
        type: document.getElementById('email-type').options[document.getElementById('email-type').selectedIndex].text,
        message: document.getElementById('email-message').value
    };
    emailjs.send("service_72a8r59", "template_g7iu40d", params);
    document.getElementById('email-button').innerHTML = "Envoyé";

    // reset
    document.getElementById('email-name').value = "";
    document.getElementById('email-email').value = "";
    document.getElementById('email-type').selectedIndex = 0;
    document.getElementById('email-message').value = "";
}