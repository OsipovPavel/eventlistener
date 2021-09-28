'use strict';
let bigBox = document.querySelector('#big-box');

bigBox.addEventListener('mousemove', (event) => {
    bigBox.textContent = `X=${event.clientX}, Y=${event.clientY}`;
    // console.dir(event);
})

bigBox.addEventListener('mousedown', (event) => {
    console.dir(event);
    event.preventDefault(); 
    bigBox.textContent = `X=${event.clientX}, Y=${event.clientY}, нажата ${(event.which == 1) ? `левая` : (event.which == 3) ? `правая` : `средняя`} кнопка мыши`;
})