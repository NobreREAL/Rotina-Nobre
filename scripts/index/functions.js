export function menuBarFunction(menuResponsivo)
{
    if (menuResponsivo.style.display == "none") {
        menuResponsivo.style.display = "flex";
    }else {
        menuResponsivo.style.display = "none";
    }
}

export function removerBotao(botao)
{
    botao.remove();
}