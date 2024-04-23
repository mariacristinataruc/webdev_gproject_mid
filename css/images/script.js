document.addEventListener("DOMContentLoaded", function() {
    var toggle = document.getElementById('password-toggle');
    var passwordField = document.getElementById('password');

    toggle.addEventListener('click', function() {
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            toggle.src = 'images/icons8-eye-30.png';
        } else {
            passwordField.type = 'password';
            toggle.src = 'images/icons8-eyelashes-2d-30.png';
        }
    });
});
