let iName = document.getElementById("name");
let missName = document.getElementById("missName");
let vName = new RegExp("[a-zA-Z]");

let iMail = document.getElementById("mail");
let missMail = document.getElementById("missMail");
let vMail = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);

let iAge = document.getElementById("age");
let missAge = document.getElementById("missAge");
let vAge = new RegExp("[0-9]");

iName.addEventListener('input', checkName);
iMail.addEventListener('input', checkMail);
iAge.addEventListener('input', checkAge);

function checkName() {
    if (iName.validity.valueMissing) {
        missName.textContent = 'Champ obligatoire';
        missName.style.backgroundColor = "red";
    } else if (vName.test(iName.value) == false) {
        missName.textContent = 'Ce champ ne doit contenir que des lettres';
        missName.style.backgroundColor = "red";
    }
}

function checkAge() {
    if (iAge.validity.valueMissing) {
        missAge.textContent = 'Champ obligatoire';
        missAge.style.backgroundColor = "red";
    } else if (vAge.test(iAge.value) == false) {
        missAge.textContent = 'Ce champ ne doit contenir que des chiffres';
        missAge.style.backgroundColor = "red";
    }
}

function checkMail() {
    if (iAge.validity.valueMissing) {
        missMail.textContent = 'Champ obligatoire';
        missMail.style.backgroundColor = "red";
    } else if (vMail.test(iMail.value) == false) {
        missMail.textContent = 'Ce champ doit contenir une adresse email valide';
        missMail.style.backgroundColor = "red";
    }
} 