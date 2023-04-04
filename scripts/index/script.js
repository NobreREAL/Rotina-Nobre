const listaLinks = document.querySelector(".links-cabecario");
const cabecario = document.querySelector(".cabecario-site");


window.addEventListener('resize', () => {
    if (window.innerWidth <= 500){
        listaLinks.style.display = "none";
    }
    else{
        listaLinks.style.display = "flex";
    }
})