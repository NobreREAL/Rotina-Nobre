
import { menuBarFunction, callBackForlandingPage } from './functions.js';

const botaoControle = document.querySelector(".botao-estilo");
const displayMenu = document.querySelector(".cabecario-links");
const logoImg = document.querySelector(".logo");


botaoControle.addEventListener('click', () => {
    menuBarFunction(displayMenu);
})

logoImg.addEventListener('click', () => {
    callBackForlandingPage();
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 500 && displayMenu.style.display == "none")
    {
        displayMenu.style.display = "flex";
    }
})

