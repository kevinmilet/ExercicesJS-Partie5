// création du listener pour l'execution de la fonction au clic
const buttonElement = document.getElementById('btn');
buttonElement.addEventListener('click', checkPassword);

// fonction vérifiant et validant ou non la correspondance des mots de passe
function checkPassword() {
    let password = document.getElementById('password');
    let passwordConfirm = document.getElementById('passwordConfirm');

    password.classList.remove('green', 'red');
    if (password.value == passwordConfirm.value) {
        password.classList.add('green');
        passwordConfirm.classList.add('green');

    } else {
        password.classList.add('red');
        passwordConfirm.classList.add('red');
    }
}