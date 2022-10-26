
"use strict";

let startDate = new Date("July 11, 2022");
let endDate = new Date("November 11, 2022");

let msecPerDay = 1000 * 60 * 60 * 24;

let timeDifference = endDate.getTime() - startDate.getTime();

let dayDiff = timeDifference / msecPerDay;
let numDays = Math.round(dayDiff);

console.log("The number of days between the dates is " + numDays);