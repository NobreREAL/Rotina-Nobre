export function menuBarFunction(menuResponsivo)
{
    if (menuResponsivo.style.display == "none") {
        menuResponsivo.style.display = "flex";
    }else{
        menuResponsivo.style.display = "none";
    }
}

export function callBackForlandingPage()
{
    if (!(window.location.href.indexOf("index.html") > -1))
    {
        window.location.href= "../../pages/index.html";
    }
    
}