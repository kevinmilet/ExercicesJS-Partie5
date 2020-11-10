// création du listener pour l'execution de la fonction au clic
const buttonElement = document.getElementById('btn');
buttonElement.addEventListener('click', checkPassword);

// fonction vérifiant et validant ou non la correspondance des mots de passe
function checkPassword() {
    let password = document.getElementById('password');
    let passwordConfirm = document.getElementById('passwordConfirm');

    if (password.value == passwordConfirm.value) {
        password.style.borderColor = "green";
        passwordConfirm.style.borderColor = "green";

    } else {
        password.style.borderColor = "red";
        passwordConfirm.style.borderColor = "red";
    }
}