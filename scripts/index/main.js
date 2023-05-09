
import { menuBarFunction } from './functions.js';

const buttonStyle = document.querySelector(".botao-estilo");
const displayMenu = document.querySelector(".cabecario-links");
const submitDetect = document.querySelector(".queryForm");


if (submitDetect) {
    submitDetect.addEventListener("submit", (event) => {
        event.preventDefault();
        const dataCollect = document.querySelectorAll(".getInput");
        for (let inputs of dataCollect) {
            console.log(`Os dados a seguir ${inputs.value}`);
        }
    });
}


buttonStyle.addEventListener('click', () => {
    menuBarFunction(displayMenu);
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 500 && displayMenu.style.display == "none")
    {
        displayMenu.style.display = "flex";
    }
})



