// création du listener pour l'execution de la fonction au clic
const buttonElement = document.getElementById('btn');
buttonElement.addEventListener('click', checkPassword);

// fonction vérifiant et validant ou non la correspondance des mots de passe
function checkPassword() {
    let password = document.getElementById('password').value;
    let passwordConfirm = document.getElementById('passwordConfirm').value;

    if (password == passwordConfirm) {
        document.getElementById('password').style.borderColor = "green";
        document.getElementById('passwordConfirm').style.borderColor = "green";

    } else {
        document.getElementById('password').style.borderColor = "red";
        document.getElementById('passwordConfirm').style.borderColor = "red";

    }
}