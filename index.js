// TODO: Include packages needed for this application
// import writeFile from 'fs';
// import prompt from 'inquirer';
// import generateMarkdown from './utils/generateMarkdown';

var fs = require('fs');
var inquirer = require('inquirer');
var generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
	{
		name: "title", type: "input",
		message: "What's the title of your project?"
	},
	{
		name: "description", type: "input",
		message: "Give a short description of your project:"
	},
	{
		name: "license", type: "input",
		message: "What kind of license should your project have?"
	},
	{
		name: "dependencies", type: "input",
		message: "Command to install dependencies:"
	},
	{
		name: "tests", type: "input",
		message: "Command to run tests:"
	},
	{
		name: "usage", type: "input",
		message: "How is this repo used?"
	},
	{
		name: "contributions", type: "input",
		message: "How can someone contribute?"
	},
	{
		name: "username", type: "input",
		message: "What's your GitHub username?"
	},
	{
		name: "email", type: "input",
		message: "What's your email?"
	},
];

/**
 * Write given markdown to 'filename'.md
 * @param {string} fileName file (without the .md) to write the markdown to
 * @param {string} data raw markdown content to be written to file
 */
function writeToFile(fileName, data) {}

/**
 * Initialize app
 */
function init() {
	inquirer.prompt(questions).then(_ => console.log("Generating README..."));
}

// Function call to initialize app
init();
