// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
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

`;
}

module.exports = generateMarkdown;
