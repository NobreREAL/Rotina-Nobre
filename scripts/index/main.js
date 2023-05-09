
import { menuBarFunction, verifyPasswords, testData } from './functions.js';

const buttonStyle = document.querySelector(".botao-estilo");
const displayMenu = document.querySelector(".cabecario-links");
const submitDetect = document.querySelector(".queryForm");



if (submitDetect) {
    submitDetect.addEventListener("submit", (event) => {
        event.preventDefault();
        const passwordInput = document.querySelector(".queryPassword");
        const confirmPassword = document.querySelector(".queryConfirm");
        const dataCollect = document.querySelectorAll(".getInput");
        if (passwordInput && confirmPassword) {
            (verifyPasswords(passwordInput, confirmPassword)) ? testData(dataCollect) : '';
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



