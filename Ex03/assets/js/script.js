let name = document.getElementById("name");
let nameValue = document.getElementById("name").value;
console.log(nameValue);
let missName = document.getElementById("missName");
const regName = new RegExp(/^[a-zA-Z]+$/);

let mail = document.getElementById("mail");
let missMail = document.getElementById("missMail");
const regMail = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

let age = document.getElementById("age");
let missAge = document.getElementById("missAge");
const regAge = new RegExp(/^[0-9]{1,3}$/);

name.addEventListener('input', checkName);
mail.addEventListener('input', checkMail);
age.addEventListener('input', checkAge);

function checkName() {
    if (nameValue.match(regName)) {
        missName.textContent = 'Ce champ ne doit contenir que des lettres';
        missName.style.color = "red";
    }
    else {
        missName.textContent = '';
    };
}

// function checkName() {
//     if (name.validity.valueMissing) {
//         missName.textContent = 'Champ obligatoire';
//         missName.style.backgroundColor = "red";
//     } else if (regName.test(name.value) == false) {
//         missName.textContent = 'Ce champ ne doit contenir que des lettres';
//         missName.style.backgroundColor = "red";
//     }
// }

function checkAge() {
    if (age.validity.valueMissing) {
        missAge.textContent = 'Champ obligatoire';
        missAge.style.backcolor = "red";
    } else if (regAge.test(age.value) == false) {
        missAge.textContent = 'Ce champ ne doit contenir que des chiffres';
        missAge.style.color = "red";
    }
}

function checkMail() {
    if (mail.validity.valueMissing) {
        missMail.textContent = 'Champ obligatoire';
        missMail.style.color = "red";
    } else if (regMail.test(mail.value) == false) {
        missMail.textContent = 'Ce champ doit contenir une adresse email valide';
        missMail.style.color = "red";
    }
} 