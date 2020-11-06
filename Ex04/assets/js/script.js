// mise en place des listeners
document.addEventListener('click', changeImage);
document.addEventListener('mouseover', scaleImage);
document.addEventListener('mouseout', unScaleImage);

// fonction qui change la source de l'image au clic
function changeImage() {
    document.getElementById("pict").src = "assets/img/img2.jpg"		
}

// fontion qui agrandit l'image au survole de la souris
function scaleImage() {
    document.getElementById('pict').style.width='750px';
}

// fonction qui fait reprendre la taille normale de l'image quand le pointeur quitte l'image
function unScaleImage() {
    document.getElementById('pict').style.width='500px';
}