export class userAccount {
    login;
    email;
    _password;

    registerUser(login, email, password) {
        if (login && email && password) {
            return `INSERT INTO tbUsuarios (Username, Passcode, Email) VALUES (${login}, ${password}, ${email})`;
        } else {
            console.log("Sharky é gay");
        }
    }
};
