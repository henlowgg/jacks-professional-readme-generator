// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// inquirer to generate questions
inquirer.prompt(
    [
        {
            type: 'input',
            message="What is the project title?",
            name:'title',
            validate: (value)=>{ if (value){return true} else {return 'Please enter a value to continue'}},
        },
        {
            type: 'input',
            message: "How is the application installed?",
            name: 'installation',
            validate: (value)=>{ if (value){return true} else {return 'Please enter a value to continue'}},
        }
    ]
)


// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
