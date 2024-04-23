// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your title',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Description of your readme',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Description of how to install app',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Description of how your app is used',
  },
  {
    type: 'input',
    name: 'license',
    message: 'Which license would you like to use?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Who contributed to your app',
  },
  {
    type: 'input',
    name: 'test',
    message: 'What test need or have been done',
  },
  {
    type: 'input',
    name: 'questions',
    message: 'What questions',
  },
];

// TODO: Create a function to write README file
function writeToFile(data) {
  fs.writeFile('readme.md', data, (err) => {
    if (err) throw err;
  });
}

// TODO: Create a function to initialize app
function init() {
  // ask required questions
  inquirer.prompt(questions).then((answers) => {
    // pass the answer to the string
    const string = generateMarkdown(answers);
    // write the file with that string
    writeToFile(string);
  });
}
// function call to initialize app
init();
