// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// inquirer to generate questions
inquirer.prompt(
    [
        {
            type: 'input',
            message: "What is the project title?",
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
            message: "Instructions for deployment of the application:",
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
        },
        {
            type: 'input',
            message: "Linkedin:",
            name: 'linkedin',
            validate: (value)=>{ if (value){return true} else {return 'Please enter a value to continue'}},
        },
        {
            type: 'input',
            message: "E-mail:",
            name: 'email',
            validate: (value)=>{ if (value){return true} else {return 'Please enter a value to continue'}},
        }
    ]
).then(({
    title,
    installation,
    instructions,
    credits,
    usage,
    license,
    git,
    linkedin,
    email,
    contribution,
})=>{
    // markdown template for the actual README itself
    const template =`# ${title}

    * [Installation](#installation)
    * [Usage](#usage)
    * [Contributions](#contributions)
    * [Credits](#credits)
    * [License](#license)
    # Installation
    ${installation}
    ## Usage
    ${usage}
    ## Contribution
    ${contribution}
    ### Instructions
    ${instructions}
    ## Credits
    ${credits}
    ## License
    ${license}

    ## Contact
    * Github :${git}
    * Linkedin :${linkedin}
    * E-mail :${email}`;

    writeToFile(title,template);
}
);



// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // inserting the fs here
    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`,data,(err)=>{
        if (err) {
            console.log(err);
        }
        console.log('Your README has been generated successfully!');
    })
}