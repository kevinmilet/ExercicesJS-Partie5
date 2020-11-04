document.addEventListener('scroll', textFat);

function textFat() {
    document.querySelector('p').style.fontSize = "x-large";
}

// let scrolling = document.getElementById('scroller');
// scrolling.addEventListener('scroll', function(textFat) {
//     console.log('coucou');
//     document.querySelector('p').style.fontSize = "x-large";
// })