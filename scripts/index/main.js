
import { menuBarFunction, removerBotao } from './functions.js';

const listaLinks = document.querySelector(".links-cabecario");
const cabecario = document.querySelector(".cabecario-site");
const menuResponsivo = document.querySelector(".cabecario-links");
const botaoMenu = document.createElement("button");

window.addEventListener('resize', () => {
    if (window.innerWidth <= 500){
        botaoMenu.innerText = "☰";
        botaoMenu.classList.add("botao-estilo");

        botaoMenu.addEventListener("click", () => {
            menuBarFunction(menuResponsivo);
        })

        cabecario.appendChild(botaoMenu);
    }
    else{
        removerBotao(botaoMenu);
        
    }
})