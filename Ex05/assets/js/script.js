// ajout des listeners pour les boutons
let paragraph = document.querySelector('p');

let pink = document.getElementById('tPink');
pink.addEventListener('click', textPink);

let blue = document.getElementById('tBlue');
blue.addEventListener('click', textBlue);

let violet = document.getElementById('tViolet');
violet.addEventListener('click', textViolet);

let bold = document.getElementById('tBold');
bold.addEventListener('click', textBold);

let italic = document.getElementById('tItalic');
italic.addEventListener('click', textItalic);

// fonction bouton rose
function textPink() {
    paragraph.style.color = "pink";
}

// fonction bouton bleu
function textBlue() {
    paragraph.style.color = "blue";
}

// fonction bouton violet
function textViolet() {
    paragraph.style.color = "violet";
}

// fonction bouton gras
function textBold() {
    paragraph.style.fontWeight = 'bold';
}

// fonction bouton italique
function textItalic() {
    paragraph.style.fontStyle = 'italic';
}
