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
        },
        {
            type: 'input',
            message: "Instructions you may need to follow.",
            name: 'instructions',
            validate: (value)=>{ if (value){return true} else {return 'Please enter a value to continue'}},
        },
        {
            type: 'input',
            message: "Any credits you would like to give?",
            name: 'credits',
            validate: (value)=>{ if (value){return true} else {return 'Please enter a value to continue'}},
        },
        {
            type: 'input',
            message: "How do you use the application?",
            name: 'usage',
            validate: (value)=>{ if (value){return true} else {return 'Please enter a value to continue'}},
        },
        {
            type: 'list',
            message: "What license did you use?",
            name: 'license',
            choices: ['The MIT License', 'The GPL License', 'Apache License', 'GNU License', 'N/A'],
            validate: (value)=>{ if (value){return true} else {return 'Please enter a value to continue'}},
        },
        {
            type: 'input',
            message: "Github Username:",
            name: 'git',
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