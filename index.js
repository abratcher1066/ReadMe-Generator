// Readme Generator
// First we get fs
const fs = require('fs');
// Setting up dependencies and stuff
// we're going to use inquirer per gary's instructions to ask the user for info
// to generate their readme.
const inquirer = require('inquirer');


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
      message: "CREDITS - Please enter the names of people you'd like to thank.  You can use @user to tag them!",
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
    {
      type: "input",
      message: "QUESTIONS/CONTACT - Enter any specific instructions for people with questions.",
      name: "contact"
    },
    
  ]

// prompts user, waits til they fill it out, then writes it all to readme.md.
inquirer.prompt(readmeInfo)
  .then(function (response) {
    let content = compileAnswers(response)
    exportAnswers(content)
  })

// exports user answers and markdown content to file
  function exportAnswers(output) {
    fs.writeFile('README.md', output, function (err) {
      if (err) {
        return console.log(err);
    }
    console.log("Success!");
    });

  }

// populates markdown content with user answers
function compileAnswers(input) {
return (
  `
# ${input.title}
----
## By ${input.username}
[![Build Status](https://travis-ci.com/username/projectname.svg?branch=master)](https://travis-ci.com/username/projectname)

### Description
----
${input.descriptionOne}

![first image](${input.imageUrlOne})

### Table of Contents
----
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Credits](#credits)
* [Testing](#testing)
* [FAQ](#faq)
* [License](#license)
* [Questions/Contact]

### Installation
----
${input.descriptionTwo}

![second image](${input.imageUrlTwo})


### Usage
----
${input.descriptionThree}

### Contributing
----
${input.contributing}

### Credits
----
${input.contributing}

### How to Test
----
${input.tests}

### FAQ - Frequently Asked Questions
----
${input.faq}

### License
----
${input.license}

### Questions/Contact
----
${input.contact}



`
    )}


    var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Travis!\n')
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');