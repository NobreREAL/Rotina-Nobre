
import { menuBarFunction } from './functions.js';

const botaoControle = document.querySelector(".botao-estilo");
const displayMenu = document.querySelector(".cabecario-links");

botaoControle.addEventListener('click', () => {
    menuBarFunction(displayMenu);
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 500 && displayMenu.style.display == "none")
    {
        displayMenu.style.display = "flex";
    }
})