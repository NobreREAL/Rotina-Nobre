export function menuBarFunction(menuResponsivo) {
    if (menuResponsivo.style.display == "none") {
        menuResponsivo.style.display = "flex";
    } else {
        menuResponsivo.style.display = "none";
    }
}


export function verifyPasswords(passcode, passcode2) {
    if (passcode.value !== passcode2.value) {
        passcode.setAttribute("id", "submitWrongPassword");
        passcode2.setAttribute("id", "submitWrongPassword");
        return false;
    }
    
    else {
        passcode.removeAttribute("id");
        passcode2.removeAttribute("id");
        return true;
    };
}

export function testData(dataUsed) {
    for (let data of dataUsed) {
        console.log(data.value);
    };
}
