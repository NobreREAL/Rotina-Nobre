import mysql from 'mysql'; 
export const formGetter = document.querySelector("form") || "";

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
    const isValid = verifyPasswords(input.senha, input.confirmSenha);

    if (!isValid) {
        return false;
    } else {
        registerOnDB(input.nome, input.email, input.senha)
    }

};

export function formLogin(input) {

};

export function verifyPasswords(passcode, passcode2) {
    if (passcode !== passcode2) {
        modalError(typeError(1), formGetter);
        return false;
    }
    
    else {
        return true;
    };
}

function findModalOnHTML() {
    const modalCreated = document.querySelector(".modalMessage");

    return modalCreated ? modalCreated : false;
}

export function modalError(errorMessage = "TestMessage", tag) {
    
    if (tag && !findModalOnHTML()) {
    const exitButton = document.createElement("button");
    exitButton.innerText = 'x';
    exitButton.setAttribute("class", "modalClosure");
    const divError = document.createElement("div");
    const textError = document.createTextNode(errorMessage);
    divError.appendChild(textError);
    divError.appendChild(exitButton);
    divError.setAttribute("class", "modalMessage");
   
    exitButton.addEventListener("click", (event) => {
        event.preventDefault();
        divError.remove();
    }); 
    tag.appendChild(divError);
    findModalOnHTML(tag);
    } else {
        console.log("Nada.");
    }
}

function typeError(arg) {
    if (arg === 1) return "Senhas não são iguais!";
    else if (arg === 2) return "Usuário já está cadastro no sistema!";
}

function connectDatabase() {
    const con = mysql.createConnection({
    host: "localhost",
    user : "root",
    password: "",
    database: "dbWebpage"
});
    con.connect();
}

function insertInto(nome, email, senha) {
    if (nome && email && senha) {
        return `INSERT INTO tbUsers (nome,email,senha) VALUES (?, ?, ?)`;
    }
};

function selectAll() {
    return "SELECT * FROM tbUsers";
}

export function registerOnDB(nome, email, senha, ) {
    connectDatabase();
    const sql = insertInto(nome, email, senha);

    con.query(sql, [nome, email, senha], function (err, results, fields) {
        if (err) modalError(2, formGetter);
    })
}

function selectValues() {
    const sql = selectAll();

    con.query(sql , function (err, results, fields) {
        if (err) throw err;
        for (let colunas of results) {
            for (let linhas of Object.values(colunas)) {
                console.log(linhas);
            }
        }
    }
)};
