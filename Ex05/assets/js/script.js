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
    if (paragraph.style.color == 'pink') {
        cancelStyle();
    } else {
        paragraph.style.color = 'pink';
    };
}

// fonction bouton bleu
function textBlue() {
    if (paragraph.style.color == 'blue') {
        cancelStyle();
    } else {
        paragraph.style.color = 'blue';
    };
}

// fonction bouton violet
function textViolet() {
    if (paragraph.style.color == 'violet') {
        cancelStyle();
    } else {
        paragraph.style.color = 'violet';
    };
}

// fonction bouton gras
function textBold() {
    if (paragraph.style.fontWeight == 'bold') {
        cancelStyle();
    } else {
        paragraph.style.fontWeight = 'bold';
    };
}

// fonction bouton italique
function textItalic() {
    if (paragraph.style.fontStyle == 'italic') {
        cancelStyle();
    } else {
        paragraph.style.fontStyle = 'italic';
    };
}

// fonction qui annule les changements
function cancelStyle() {
    paragraph.style.color = 'black';
    paragraph.style.fontWeight = 'normal';
    paragraph.style.fontStyle = 'normal';
}