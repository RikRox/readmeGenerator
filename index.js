// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
//const questions = [];
const questions = require('inquirer');

const askQuestions = data => {
    return questions.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required):',
            validate: titleInput => {
                if(titleInput) {
                    return true;
                } else {
                    console.log('Please enter the title of your project!:');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of your project (Required):',
            validate: descInput => {
                if(descInput) {
                    return true;
                } else {
                    console.log('Please enter your project description!:');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'Enter installation instructions for your project (Required):',
            validate: installInput => {
                if(installInput) {
                    return true;
                } else {
                    console.log('Please enter installation instructions!:');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage instructions for your project(Required):',
            validate: usageInput => {
                if(usageInput) {
                    return true;
                } else {
                    console.log('Please enter usage instructions!:');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Enter contribution guidelines (Required):',
            validate: contributionInput => {
                if(contributionInput) {
                    return true;
                } else {
                    console.log('Please enter contribution guidelines!:');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter explanation of testing your project (Required):',
            validate: testsInput => {
                if(testsInput) {
                    return true;
                } else {
                    console.log('Please enter testing explanation!:');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Type of licensing (Required):',
            choices: ['MIT', 'GNU GPLv3' ,'No License'],
            validate: licenseInput => {
                if(licenseInput) {
                    return true;
                } else {
                    console.log('Please enter installation instructions!:');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'username',
            message: 'Enter your github username (Required):',
            validate: usernameInput => {
                if(usernameInput) {
                    return true;
                } else {
                    console.log('Please enter your github username!:');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email (Required):',
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email!:');
                    return false;
                }
            }
        }
    ]);
};

// TODO: Create a function to write README file

function writeToFile(readmeData) {
    fs.writeFile('./dist/readme.md', readmeData, err => {
        if(err){
            console.log(err);
        } else {
            console.log('README created!');
        }
    });
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();



askQuestions()
    .then(data => {
        console.log(data.title);
        generateMarkdown(data);
        //writeToFile(generateMarkdown);
        const readmeData = generateMarkdown(data);
        console.log(readmeData);
        writeToFile(readmeData);
    });
