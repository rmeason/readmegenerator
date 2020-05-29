const inquirer = require("inquirer");
const fs = require('fs');
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);


function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "title",
        message: "What is your repo title?"
      },
      {
        type: "input",
        name: "description",
        message: "What is the description of this project?"
      },
      {
        type: "input",
        name: "contents",
        message: "Give a table of contents."
      },
      {
        type: "input",
        name: "installation",
        message: "Installation."
      },
      {
        type: "input",
        name: "usage",
        message: "Intended use."
      },
      {
        type: "input",
        name: "license",
        message: "License."
      },
      {
        type: "input",
        name: "contributing",
        message: "Who contributed?"
      },
      {
        type: "input",
        name: "tests",
        message: "Enter your GitHub Username"
      },
      {
        type: "input",
        name: "questions",
        message: "Questions?"
      },
    ]);
  }

  function generateMD(answers) {
    return `

${answers.title}
${answers.description}
${answers.contents}
${answers.instllation}
${answers.usage}
${answers.license}
${answers.contributing}
${answers.tests}
${answers.questions}

`;
  }

  promptUser()
  .then(function(answers) {
    const md = generateMD(answers);

    return writeFileAsync("Readme.md", md);
  })
  .then(function() {
    console.log("Successfully wrote to Readme.md");
  })
  .catch(function(err) {
    console.log(err);
  });