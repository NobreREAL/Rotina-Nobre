
import { verifyPasswords, testData } from './functions.js';
import {userAccount} from "./clients-database.js";



const dataCollect = {
    username:document.querySelector("#nome").value ? document.querySelector("#nome").value : "",
    password:document.querySelector("#senha").value ? document.querySelector("#senha").value : "",
    email:document.querySelector("#email").value ? document.querySelector("#email").value : "" 
}


const clientOperation = new userAccount(dataCollect.username, dataCollect.email, dataCollect.password);

clientOperation.registerUser(clientOperation.login, clientOperation._password, clientOperation.email);


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
