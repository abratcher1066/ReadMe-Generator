// Readme Generator
// First we get fs
const fs = require('fs');


// Setting up dependencies and stuff
// we're going to use inquirer per gary's instructions to ask the user for info
// to generate their readme.

const inquierer = require('inquirer');


// let's write to a test file until other features are working/work is donwe

fs.writeFile("log.txt", msg, function(err) {
    if (err) {
        return console.log(err);
    }
    console.log("Success!")
});
