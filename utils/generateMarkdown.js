// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

/**
 * @typedef {object} InquirerResponse
 * @property {string} title - title of the project
 * @property {string} description - description of what the project is
 * @property {string} license - type of license to render badge for, , e.g. "MIT"
 * @property {string} dependencies - code snippet to be put in Dependencies section
 * @property {string} tests - code snippet to be put in the Tests section
 * @property {string} usage - blurb to be put in the Usage section
 * @property {string} contributions - blurb to be put in the Contributions section
 * @property {string} username - GitHub username
 * @property {string} email - user's email
 */

/**
 * Generate markdown for README
 * @param {InquirerResponse} data response from inquirer.prompt() to be used to generate the README
 */
function generateMarkdown(data) {

	// double tabbed to avoid ugly flushed-left text
	// in the middle of an indented code block
	const markdown =  `
		# ${data.title}

		${badges[data.license] || ""}

		## Description

		${data.description}

		## Table of Contents

		* [Installation](#installation)

		* [Usage](#usage)

		* [License](#license)

		* [Contributions](#contributions)

		* [Tests](#tests)

		* [Questions](#questions)

		## Installation

		To install necessary dependencies, run the following command:

		\`\`\`
		${data.dependencies}
		\`\`\`

		## Usage
		
		${data.usage}

		## License

		This project is licensed under the ${data.license} license.

		## Contributions

		${data.contributions}

		## Tests

		To run tests, run the following command

		\`\`\`
		${data.tests}
		\`\`\`

		## Questions
		If you have any questions about the repo, open an issue or contact me directly at <${data.email}>. You can find more of my work at [${data.username}](https://github.com/${data.username}).
`;
	
	return markdown.replace(/[\t]{2}/g, "");
}

module.exports = generateMarkdown;
