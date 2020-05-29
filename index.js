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