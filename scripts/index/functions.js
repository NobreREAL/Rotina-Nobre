export function menuBarFunction(menuResponsivo) {
    if (menuResponsivo.style.display == "none") {
        menuResponsivo.style.display = "flex";
    } else {
        menuResponsivo.style.display = "none";
    }
}

export function detectForm (form) {
    if (!form) return false;
    else {
        if (form.getAttribute("id") === "formRegister")  {
            const inputValues = getInput(form);
            formRegister(inputValues);
        } else if (form.getAttribute("id") === "formLogin") {
            const inputValues = getInput(form);
            formLogin(inputValues);
        }
    }
};

function getInput(form) {
    const inputForm = {
        nome: null,
        email: "",
        senha: "",
        confirmSenha: ""
    };

    for (let tags of form) {
        if (tags.type === "text" || tags.type === "password" || tags.type === "email") {
           inputForm[tags.name] = tags.value;
        }

    }
    return inputForm;    
}

export function formRegister(input) // 4 args 'login, email, senha, confirmasenha' 
{
    /*const isValid = verifyPasswords(input);

    if (!isValid) {
        error(1);
    } else {
        console.log(login, email, password, confirmPassword);
    }
    */
    console.log(input);
};

export function formLogin(input) {
    for (let values in input) {
        console.log(input[values]);
    }

    console.log(input);
};


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


function error(typeOfError) {
    if (typeOfError === 1) {
        return "Senhas não batem";
    } else if (typeOfError === 2) {

    }

}