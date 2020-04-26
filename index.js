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
      message: "What is your GitHub user name?",
      name: "username"
    },
    {
      type: "input",
      message: "README construction has begun.  Please enter a title for your new README.",
      name: "title"
    },
    {
      type: "input",
      message: "Please enter a prologue description (a short description: what, why, and how.  Why did you build this project?) for your README.",
      name: "descriptionOne"
    },
    {
      type: "input",
      message: "Please enter an image URL for you README's title image.",
      name: "imageUrlOne"
    },
    {
      type: "input",
      message: "Please enter usage instructions and examples for use.  You will be able to add one more image and one more description field after this one.",
      name: "descriptionTwo"
    },
    {
      type: "input",
      message: "Please enter a second image URL, if you'd like one.",
      name: "imageUrlTwo"
    },
    {
      type: "input",
      message: "Please enter a closing description.",
      name: "descriptionThree"
    },
    {
      type: "input",
      message: "Enter your credits, collaborators, etc.",
      name: "credits"
    },
    {
      type: "input",
      message: "Enter your README license.  If you need help choosing a license, check out choosealicense.com",
      name: "license"
    },
    {
      type: "input",
      message: "Enter contributing instructions here:",
      name: "contributing"
    },
    {
      type: "input",
      message: "Enter testing instructions here:",
      name: "tests"
    },
    {
      type: "input",
      message: "Enter frequently asked questions and answers here:",
      name: "faq"
    },
  ]
  // ok, we need functions.
  // 1. a function for 

  // gives user questions
inquirer.prompt(readmeInfo)
  .then(function (response) {
    let content = compileAnswers(response)
    writeToFile(content)
  })

  function writeToFile(output) {
    fs.writeFile('text.txt', output, function (err) {
      if (err) {
        return console.log(err);
    }
    console.log("Success!");
    });

  }

  function compileAnswers(data) {
    return ('test')
  }


// function writeToFile (output) {

// }
//   // ok, now to command the asking


//   inquirer.prompt(readmeInfo)
//     .then(function (response) {
//        fs.writeFile("test.txt", response)
//   })
    


//w
  
  
  
//   .then(fs.writeFile("readme.txt", function(err) {
//       if (err) {
//         return console.log(err);
//       }
//       console.log("Successfully written to file!");
//   });
// }






// ~~~~~~~~
// ~~~~~~~~


// * The generated README includes the following sections: 
//   * Title
//   * Description
//   * Table of Contents
//   * Installation
//   * Usage
//   * License
//   * Contributing
//   * Tests
//   * Questions

// # Your Project Title

// ## Description 

// Your GitHub profile is an extremely important aspect of your public identity as a developer. A well-crafted one allows you to show off your work to other developers as well as potential employers. An important component of your GitHub profile—and one that many new developers often overlook—is the README.md file.

// The quality of a README often differentiates a good project from a bad project. A good one takes advantage of the opportunity to explain and showcase what your application does, justify the technologies used, and even talk about some of the challenges you faced and features you hope to implement in the future. A good README helps you stand out among the large crowd of developers putting their work on GitHub.

// There's no one right way to structure a good README. There is one very wrong way, however, and that is to not include a README at all or to create a very anemic one. This guide outlines a few best practices. As you progress in your career, you will develop your own ideas about what makes a good README.

// At a minimum, your project README needs a title and a short description explaining the what, why, and how. What was your motivation? Why did you build this project? (Note: The answer is not "Because it was a homework assignment.") What problem does it solve? What did you learn? What makes your project stand out? If your project has a lot of features, consider adding a heading called "Features" and listing them here.

// If you're new to Markdown, read the GitHub guide on [Mastering Markdown](https://guides.github.com/features/mastering-markdown/).

// If you need an example of a good README, check out [the VSCode repository](https://github.com/microsoft/vscode).


// ## Table of Contents (Optional)

// If your README is very long, add a table of contents to make it easy for users to find what they need.

// * [Installation](#installation)
// * [Usage](#usage)
// * [Credits](#credits)
// * [License](#license)


// ## Installation

// What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.


// ## Usage 

// Provide instructions and examples for use. Include screenshots as needed. 


// ## Credits

// List your collaborators, if any, with links to their GitHub profiles.

// If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

// If you followed tutorials, include links to those here as well.



// ## License

// The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)


// ---

// 🏆 The sections listed above are the minimum for a good README, but your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

// ## Badges

// ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

// Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.


// ## Contributing

// If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own.

// ## Tests

// Go the extra mile and write tests for your application. Then provide examples on how to run them.


// ---
// © 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved