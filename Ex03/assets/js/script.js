// déclaration des variables pour le champ Nom
let name = document.getElementById("inputName");
let missName = document.getElementById("missName");
const regName = /^[a-zA-Z\-]+$/;


// déclaration des variables pour le champ Mail
let mail = document.getElementById("inputMail");
let missMail = document.getElementById("missMail");
const regMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,5}$/;


// déclaration des variables pour le champ Age
let age = document.getElementById("inputAge");
let missAge = document.getElementById("missAge");
const regAge = /^[0-9]{1,3}$/;


// déclaration des écouteurs sur les champs
name.addEventListener('input', checkName);
mail.addEventListener('input', checkMail);
age.addEventListener('input', checkAge);


// fonction qui vérifie si l'utilisateur a entré des lettres
function checkName() {
    if (regName.test(name.value)) {
        missName.textContent = '';
    }
    else {
        missName.textContent = 'Ce champ ne doit contenir que des lettres';
        missName.style.color = "red";
    };
}

// fonction qui vérifie si l'utilisateur a entré une adresse mail valide
function checkMail() {
    if (regMail.test(mail.value)) {
        missMail.textContent = '';
    }
    else {
        missMail.textContent = 'Ce champ doit contenir une adresse email valide';
        missMail.style.color = "red";
    };
}

// fonction qui vérifie si l'utilisateur a entré des chiffres
function checkAge() {
    if (regAge.test(age.value)) {
        missAge.textContent = '';
    }
    else {
        missAge.textContent = 'Ce champ ne doit contenir que des chiffres';
        missAge.style.color = "red";
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

// function checkAge() {
//     if (age.validity.valueMissing) {
//         missAge.textContent = 'Champ obligatoire';
//         missAge.style.backcolor = "red";
//     } else if (regAge.test(age.value) == false) {
//         missAge.textContent = 'Ce champ ne doit contenir que des chiffres';
//         missAge.style.color = "red";
//     }
// }

// function checkMail() {
//     if (mail.validity.valueMissing) {
//         missMail.textContent = 'Champ obligatoire';
//         missMail.style.color = "red";
//     } else if (regMail.test(mail.value) == false) {
//         missMail.textContent = 'Ce champ doit contenir une adresse email valide';
//         missMail.style.color = "red";
//     }
// }