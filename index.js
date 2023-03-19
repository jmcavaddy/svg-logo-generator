const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes.js');

// An array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'What would you like your logo to say?'
    },
    {
        type: 'input',
        name: 'fontColor',
        message: 'What color would you like the font of the logo to be?'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like your logo to be?',
        choices: ['circle', 'square', 'triangle']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What would you like the shape of the logo to be?'
    }
];



// A function that prompts the user for inputs needed to generate a logo,
// then passes the user's responses to the generateLogo function
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            console.log(response);
        });
}

// Function call to initialize app
init();