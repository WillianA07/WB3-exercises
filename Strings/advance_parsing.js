


"use strict";

function parseAndDisplayName(name) {
    console.log(`----------------------------`);
    let firstSpace = name.indexOf(" ");
    let secondSpace = name.lastIndexOf(" ");

    let doesHaveAtLeastOneSpace = (firstSpace != -1);
    let areFirstAndSecondSpaceIdentical = (firstSpace == secondSpace);

    if (!doesHaveAtLeastOneSpace) {
        console.log(`Name: ${name}`);
        console.log(`Only name: ${name}`);
    }
    else if (areFirstAndSecondSpaceIdentical) {
        let firstName = name.slice(0, firstSpace);
        let lastName = name.slice(firstSpace + 1);

        console.log(`Name: ${name}`);
        console.log(`First name: ${firstName}`);
        console.log(`Last name: ${lastName}`);
    }
    else {
        let firstName = name.slice(0, firstSpace);
        let middleName = name.slice(firstSpace, secondSpace);
        let lastName = name.slice(secondSpace + 1);

        console.log(`Full name: ${name}`);
        console.log(`First name: ${firstName}`);
        console.log(`Middle name: ${middleName}`);
        console.log(`Last name: ${lastName}`);
    }
    console.log(``);
}

parseAndDisplayName("Cher");
parseAndDisplayName("Breda Kaye");
parseAndDisplayName("Dana Lynn Wyatt");
