const body = document.body;
const colorMode = document.getElementById('colorMode');
let isWhite = true;
const myImg = document.getElementById('Myimg');

colorMode.addEventListener('click', function() {
    if (isWhite) {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        colorMode.style.backgroundColor= 'black';
        isWhite = false;      
        myImg.src ='mooninwhite.webp';
    } else {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        colorMode.style.backgroundColor= 'white';
        isWhite = true;
        myImg.src ='9-96004_summer-sun-weather-icon-sun-icon-black-and-white.png';
    }
});