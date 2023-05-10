import mysql from 'mysql';
import {userAccount} from "../index/clients-database";


const con = mysql.createConnection({
    host: "localhost",
    user : "root",
    password: "",
    database: "dbBanco"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
})

export function signingUp(verifyConnection ,...args) {

}