const inquirer = require('inquirer');
const fs = require('fs');
const Triangle = require('./triangle.js');
const Square = require('./square.js');
const Circle = require('./circle.js');

// An array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'What would you like your logo to say?',
        validate: function (value) {
            if (value.length > 0 && value.length < 4) {
                return true;
            } else {
                return 'Please enter valid text (no less than 1 and no more than 3 characters).';
            }
        }
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
        message: 'What color would you like the shape of the logo to be?'
    }
];

class CLI {
    constructor() {
}
// First, I will prompt the user for input
// Then, I will create a new instance of the shape class of the specified shape
// Then, I will call the render method on the new instance
// Then, I will write the result of the render method to a file
    init() {
        return inquirer
            .prompt(questions)
            .then((response) => {
                const desiredShape = response.shape;
                console.log(desiredShape);
                if (desiredShape === 'triangle') {
                    const shape = new Triangle(response.text, response.fontColor, response.shape, response.shapeColor);
                    return shape.render();
                } else if (desiredShape === 'square') {
                    const shape = new Square(response.text, response.fontColor, response.shape, response.shapeColor);
                    return shape.render();
                } else if (desiredShape === 'circle') {
                    const shape = new Circle(response.text, response.fontColor, response.shape, response.shapeColor);
                    return shape.render();
                }
            })
            .then((response) => {
                // Here I will write the svg text to a file
                fs.writeFile('./examples/logo.svg', response, (err) => {
                    if (err) throw err;
                    console.log('Generated logo.svg');
                });
            })


    }
}

module.exports = CLI;