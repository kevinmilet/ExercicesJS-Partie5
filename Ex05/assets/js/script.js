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


function textPink() {
    paragraph.style.color = "pink";
}

function textBlue() {
    paragraph.style.color = "blue";
}

function textViolet() {
    paragraph.style.color = "violet";
}

function textBold() {
    paragraph.style.fontWeight = 'bold';
}

function textItalic() {
    paragraph.style.fontStyle = 'italic';
}
