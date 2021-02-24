// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

const badges = {
	"apache-2.0": "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
	"bsl-1.0": "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
	"bsd-2-clause": "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
	"bsd-3-clause": "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
	"cc0-1.0": "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)",
	"epl-2.0": "",
	"agpl-3.0": "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
	"gpl": "[![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)](http://perso.crans.org/besson/LICENSE.html)",
	"gpl-2.0": "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
	"lgpl-2.1": "",
	"mit": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
	"mpl-2.0": "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
	"unlicense": "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
};

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
