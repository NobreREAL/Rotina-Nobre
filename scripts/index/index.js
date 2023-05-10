import { menuBarFunction } from './functions.js';

const buttonStyle = document.querySelector(".botao-estilo");
const displayMenu = document.querySelector(".cabecario-links");

buttonStyle.addEventListener('click', () => {
    menuBarFunction(displayMenu);
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 500 && displayMenu.style.display == "none")
    {
        displayMenu.style.display = "flex";
    }
})
