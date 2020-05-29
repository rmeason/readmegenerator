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
        message: "What is your favorite food?"
      },
      {
        type: "input",
        name: "usage",
        message: "Enter your GitHub Username"
      },
      {
        type: "input",
        name: "license",
        message: "Enter your LinkedIn URL."
      },
      {
        type: "input",
        name: "contributing",
        message: "Enter your GitHub Username"
      },
      {
        type: "input",
        name: "tests",
        message: "Enter your GitHub Username"
      },
      {
        type: "input",
        name: "questions",
        message: "Enter your GitHub Username"
      },
    ]);
  }