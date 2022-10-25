"use strict";

function convertCtoF(currentTemp) {
    let answer = (currentTemp * (9 / 5)) + 32;
    return answer;
}

let currentTemp = 100;
let fahrenheitTemp = convertCtoF(currentTemp);

console.log(fahrenheitTemp);

let currentTemp1 = 45
let fahrenheitTemp1 = convertCtoF(currentTemp1);

console.log(fahrenheitTemp1);

let currentTemp2 = 19;
let fahrenheitTemp2 = convertCtoF(currentTemp2);

console.log(fahrenheitTemp2);

let currentTemp3 = 0;
let fahrenheitTemp3 = convertCtoF(currentTemp3);

console.log(fahrenheitTemp3);

let currentTemp4 = -7;
let fahrenheitTemp4 = convertCtoF(currentTemp4);

console.log(fahrenheitTemp4);

let currentTemp5 = -40;
let fahrenheitTemp5 = convertCtoF(currentTemp5);

console.log(fahrenheitTemp5);