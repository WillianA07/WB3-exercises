"use strict";

function getSocSecTax(grosspay) {
    let socSecTax = grosspay * 0.062;
    return socSecTax;
}

function getMedicareTax(grosspay) {
    let medicareTax = grosspay * 0.0145;
    return medicareTax;
}

function getFederalTax(grosspay, code) {
    if (code == 0) {
        let federalTax = grosspay * 0.23;
        return federalTax;
    }
    else if (code == 1) {
        let federalTax = grosspay * 0.21;
        return federalTax;
    }
    else if (code == 2) {
        let federalTax = grosspay * 0.195;
        return federalTax;
    }
    else if (code == 3) {
        let federalTax = grosspay * 0.185;
        return federalTax;
    }
    else if (code == 4) {
        let federalTax = grosspay * 0.18;
        return federalTax;
    }
    else if (code > 4) {
        let actualInterest = 0.18 - ((code - 4) * 0.005);
        let federalTax = grosspay * actualInterest;
        return federalTax;
    }
}

let grosspay = 750;
let code = 0;
let socSecTaxAmount = getSocSecTax(grosspay);
let medicareTaxAmount = getMedicareTax(grosspay);
let federalTaxAmount = getFederalTax(grosspay, code);

console.log(socSecTaxAmount.toFixed(2));
console.log(medicareTaxAmount.toFixed(2));
console.log(federalTaxAmount.toFixed(2));

let grosspay1 = 1550;
let code1 = 2;
let socSecTaxAmount1 = getSocSecTax(grosspay1);
let medicareTaxAmount1 = getMedicareTax(grosspay1);
let federalTaxAmount1 = getFederalTax(grosspay1, code1);

console.log(socSecTaxAmount1.toFixed(2));
console.log(medicareTaxAmount1.toFixed(2));
console.log(federalTaxAmount1.toFixed(2));

let grosspay2 = 1100;
let code2 = 6;
let socSecTaxAmount2 = getSocSecTax(grosspay2);
let medicareTaxAmount2 = getMedicareTax(grosspay2);
let federalTaxAmount2 = getFederalTax(grosspay2, code2);

console.log(socSecTaxAmount2.toFixed(2));
console.log(medicareTaxAmount2.toFixed(2));
console.log(federalTaxAmount2.toFixed(2));
