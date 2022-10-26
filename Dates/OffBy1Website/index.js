
"use strict";

window.onload = init;

function init() {
    const buttonToGetDate = document.getElementById("buttonToGetDate");
    buttonToGetDate.onclick = onButtonClicked;
}

function onButtonClicked() {
    const dateInput = document.getElementById("dateInput");

    let date = dateInput.value;

    let convertDateToString = new Date(date)

    const dateAsString = document.getElementById("dateAsString");

    dateAsString.value = convertDateToString;

    const output = document.getElementById("output");

    output.innerHTML = convertDateToString;
}

