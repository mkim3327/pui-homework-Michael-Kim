//Javascript for the alert messages for the contact me form
function notification() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name.length == 0) {
        alert("Please Enter a Name");
    }
    if (email.length == 0) {
        alert("Please Enter an Email");
    }
    if (message.length == 0) {
        alert("Please Enter a Message for Michael");
    }
    else {
        alert("Hello " + name + "! Thank you for your message!\nMichael will reach out to you via "
        + email +"\nAbout your message: " + message);
    }
}

