"use strict";

function parseAndDisplayName(name) {
    let nameSpace = name.indexOf(" ");
    let firstName = name.slice(0, nameSpace);
    let lastName = name.slice(nameSpace + 1);

    console.log(`Full Name: ${name}`);
    console.log(`First Name: ${firstName}`);
    console.log(`Last Name: ${lastName}`);
}

parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");

