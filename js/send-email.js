function SendEmail() {
    emailjs.init("dqG17UKsAm3gKcmWO");
    var params = {
        name: document.getElementById('email-name').value,
        email: document.getElementById('email-email').value,
        message: document.getElementById('email-message').value
    };
    emailjs.send("service_72a8r59", "template_g7iu40d", params);
}