
"use strict";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let d = new Date();
let monthName = months[d.getMonth()];
let dayName = days[d.getDay()];

console.log(d.getDate() + "-" + monthName + "-" + d.getFullYear() + "(" + dayName + ")");