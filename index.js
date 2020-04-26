// Readme Generator
// First we get fs
const fs = require('fs');
// Setting up dependencies and stuff
// we're going to use inquirer per gary's instructions to ask the user for info
// to generate their readme.
const inquirer = require('inquirer');

// // let's write to a test file until other features are working/work is donwe

// fs.writeFile("log.txt", msg, function(err) {
//     if (err) {
//         return console.log(err);
//     }
//     console.log("Success!")
// });

// really got stuck for a long long time here.  trying to figure out
// how to take questions and process them.  making them their own variable so i
// can map this out better.
let readmeInfo = [
    
    {
    type: "input",
    message: "Please enter the project title for your new README.",
    name: "title"
    },
    {
      type: "input",
      message: "Please enter your GitHub username.",
      name: "username"
    },
    {
      type: "input",
      message: "DESCRIPTION - Please enter an intro description.  Consider: Think about the what, why, and how of the project.",
      name: "descriptionOne"
    },
    {
      type: "input",
      message: "IMAGE - DESCRIPTION - Please enter an image URL for your README's introductory image.",
      name: "imageUrlOne"
    },
    {
      type: "input",
      message: "INSTALLATION - Please enter install instructions.  (Consider: What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.)",
      name: "descriptionTwo"
    },
    {
      type: "input",
      message: "IMAGE - INSTALLATION - Please enter a second image URL, if you'd like one.",
      name: "imageUrlTwo"
    },
    {
      type: "input",
      message: "USAGE - Please enter a usage description.",
      name: "descriptionThree"
    },
    {
      type: "input",
      message: "CONTRIBUTING - Please enter instructions for how people can contribute to the project.",
      name: "credits"
    },
    {
      type: "input",
      message: "CREDITS - Enter ",
      name: "contributing"
    },
    {
      type: "input",
      message: "TESTING - Enter testing instructions here:",
      name: "tests"
    },
    {
      type: "input",
      message: "FAQ - Enter frequently asked questions and answers here:",
      name: "faq"
    },
    {
      type: "input",
      message: "LICENSE - Enter your README license.  If you need help choosing a license, check out choosealicense.com",
      name: "license"
    },
  ]
  // ok, we need functions.
  // 1. a function for 

  // gives user questions
inquirer.prompt(readmeInfo)
  .then(function (response) {
    let content = compileAnswers(response)
    exportAnswers(content)
  })

  function exportAnswers(output) {
    fs.writeFile('test.md', output, function (err) {
      if (err) {
        return console.log(err);
    }
    console.log("Success!");
    });

  }

function compileAnswers(input) {
return (
  `

# ${input.title}
----
## By ${input.username}

### Description
----
${input.descriptionOne}

![first image](${input.imageUrlOne})

### Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Credits](#credits)
* [License](#license)
----

### Installation
----
${input.descriptionTwo}

![second image](${input.imageUrlTwo})


### Usage
${input.descriptionThree}


### Contributing
----
${input.credits}

### License
----
${input.license}

### Contributing
----
${input.contributing}

### How to Test
----
${input.tests}

### FAQ - Frequently Asked Questions
----
${input.faq}

`
    )}