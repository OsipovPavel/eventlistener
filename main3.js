'use strict';

let btnHideText = document.querySelector('#hideText');
let mainText = document.querySelector('.main-text');

btnHideText.addEventListener('click', () => {
    mainText.classList.toggle('show-text');
    console.dir(mainText);
})