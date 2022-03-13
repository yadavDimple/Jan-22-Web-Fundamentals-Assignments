function confirm_password() {
    var pas = document.getElementById("password");
    var password = pas.value;
    var conPas = document.getElementById("confirmPassword");
    var confirmPassword = conPas.value;
    var output_field = document.getElementById("op_text");
    output_field.innerText = confirmPassword;
    if (password == confirmPassword) {
        alert("Ok");
    } else {
        alert("Try Again !!! Passwords do not match")
    }
}