
"use strict";

window.onload = init;

function init() {
    const submitButton = document.getElementById("submitButton");
    submitButton.onclick = onButtonClicked;
}

function onButtonClicked(){
    const travelDate = document.getElementById("travelDate");

    let travelDate1 = travelDate.value;
    let travelDate2 = new Date(travelDate1);
    let todayDate = new Date();

    let msecPerDay = 1000 * 60 * 60 * 24;

    let timeDiff = travelDate2.getTime() - todayDate.getTime();

    let dayDiff = timeDiff / msecPerDay;
    let numDays = Math.round(dayDiff);

    const output = document.getElementById("output");
    output.innerHTML = ("Your trip is in " + numDays + " days.");
}
