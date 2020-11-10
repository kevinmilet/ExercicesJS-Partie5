// mise en place des listeners
let pict = document.getElementById('pict');
pict.addEventListener('click', changeImage);
pict.addEventListener('mouseover', scaleImage);
pict.addEventListener('mouseout', unScaleImage);

// fonction qui change la source de l'image au clic
function changeImage() {
    if (pict.getAttribute('src') == 'assets/img/img.jpg') {
        pict.setAttribute('src', 'assets/img/img2.jpg');		
    } else {
        pict.setAttribute('src', 'assets/img/img.jpg');		
    };
}

// fonction qui agrandit l'image au survole de la souris
function scaleImage() {
    pict.style.width='750px';
}

// fonction qui fait reprendre la taille normale de l'image quand le pointeur quitte l'image
function unScaleImage() {
    pict.style.width='500px';
}