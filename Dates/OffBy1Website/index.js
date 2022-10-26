
"use strict";

window.onload = init;

function init() {
    const buttonToGetDate = document.getElementById("buttonToGetDate");
    buttonToGetDate.onclick = onButtonClicked;
}

function onButtonClicked() {
    const dateInput = document.getElementById("dateInput");

    let convertDateToString = dateInput.value.toString();

    const dateAsString = document.getElementById("dateAsString");

    dateAsString.value = convertDateToString;

    const output = document.getElementById("output");

    output.innerHTML = convertDateToString;
}

