"use strict";

function displayMailingLabel(name, address, city, state, zip) {
    let message = "Hi my name is " + name + ", and my full address is " + address + " " + city + " " + state + " " + zip + ".";
    console.log(message);
}

let someName = "Willian A";
let someAddress = "1234 56 St";
let someCity = "Somewhere";
let someState = "New York";
let someZip = "56789";

displayMailingLabel(someName, someAddress, someCity, someState, someZip)

function addNumbers(num1, num2) {
    let message = num1 + " + " + num2 + " = " + num3;
    console.log(message);
}

let someNumber1 = 5;
let someNumber2 = 5;
let num3 = someNumber1 + someNumber2;

addNumbers(someNumber1, someNumber2,);


function displayReceipt(totalDue, amountPaid) {
    let message1 = "Total Due: $" + totalDue;
    let message2 = "Amount Paid: $" + amountPaid;
    let message3 = "Change Due: $" + change;

    console.log(message1);
    console.log(message2);

    if (somePaid < someTotal) {
        let remaining = change;
        console.log("You are still missing $" + remaining + " more to pay.");
    }
    else if (somePaid >= someTotal) {
        console.log(message3);
    }
}

let someTotal = 10;
let somePaid = 15;
let change = someTotal - somePaid;

displayReceipt(someTotal, somePaid);
