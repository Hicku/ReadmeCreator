const inquirer = require('inquirer');
const fs = require('fs');
const markDown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a short description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions for your project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide usage instructions for your project:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which license would you like to use for your project?',
    choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What are the contributing guidelines for your project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please provide testing instructions for your project:',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README file generated successfully!')
  );
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdown = markDown(answers);
    writeToFile('README.md', markdown);
  });
}

// Function call to initialize app
init();










