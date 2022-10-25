"use strict";

function convertFtoC(currentTemp) {
    let answer = (currentTemp - 32) * (5 / 9);
    return answer;
}

let currentTemp = 212;
let celsiuseTemp = convertFtoC(currentTemp);

console.log(celsiuseTemp);

let currentTemp1 = 90;
let celsiusTemp1 = convertFtoC(currentTemp1);

console.log(celsiusTemp1);

let currentTemp2 = 72;
let celsiusTemp2 = convertFtoC(currentTemp2);

console.log(celsiusTemp2);

let currentTemp3 = 32;
let celsiusTemp3 = convertFtoC(currentTemp3);

console.log(celsiusTemp3);

let currentTemp4 = 0;
let celsiusTemp4 = convertFtoC(currentTemp4);

console.log(celsiusTemp4);

let currentTemp5 = -7;
let celsiusTemp5 = convertFtoC(currentTemp5);

console.log(celsiusTemp5);

let currentTemp6 = -40;
let celsiusTemp6 = convertFtoC(currentTemp6);

console.log(celsiusTemp6);
