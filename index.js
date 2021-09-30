// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// inquirer to generate questions
function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            message: "What is the project title?",
            name:'title',
            validate: (value)=>{ if (value){return true} else {return 'Please enter a value to continue'}},
        },
        {
            type: 'input',
            message: "Enter a description of the project:",
            name: 'description',
            validate: (value)=>{ if (value){return true} else {return 'Please enter a value to continue'}},
        },
        {
            type: 'input',
            message: "How is the application installed? Write NONE if there are no instructions.",
            name: 'installation',
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
            choices: ['MIT', 'Apache-2.0', 'GPL-3.0-only', 'N/A'],
            name: 'license',
            validate: (value)=>{ if (value){return true} else {return 'Please enter a value to continue'}},
        },
        {
            type: 'input',
            message: "What is your Github Username?",
            name: 'git',
            validate: (value)=>{ if (value){return true} else {return 'Please enter a value to continue'}},
        },
        {
            type: 'input',
            message: "How can you be found on Linkedin?",
            name: 'linkedin',
            validate: (value)=>{ if (value){return true} else {return 'Please enter a value to continue'}},
        },
        {
            type: 'input',
            message: "What is your E-mail?",
            name: 'email',
            validate: (value)=>{ if (value){return true} else {return 'Please enter a value to continue'}},
        },
    ]);
}

function generateMarkdown(response) {
    return `
# ${response.title}

# Table of Contents



- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Instructions](#instructions)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)

## Description:
![License](https://img.shields.io/badge/License-${response.license}-blue.svg "License Badge")

    ${response.description}
## Installation:
    ${response.installation}

## Usage
    ${response.usage}

## Contribution
    ${response.contribution}

## Instructions
    ${response.instructions}

## Credits
    ${response.credits}

## License
    For more information about the License, click the link below.

- [License](https://opensource.org/licenses/${response.license})

## Questions:
    For any questions please go to my Github page through the link below:

- [Github Profile](https://github.com/${response.git})

## For any other questions you might have please reach out to me via E-mail at: ${response.email}.
`;
}

async function init() {
    try {
        const response = await promptUser();

        const readMe = generateMarkdown(response);

        await writeFileAsync("README.md", readMe);
        console.log("Your README has been generated successfully!");
    } catch (err) {
        console.log(err);
    }
}

// initialize the program
init();

