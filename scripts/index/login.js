import { detectForm } from './functions.js';

const formDetect = document.querySelector(".queryForm");

formDetect.addEventListener("submit", (event) => {
    event.preventDefault();
    detectForm(formDetect);
});
