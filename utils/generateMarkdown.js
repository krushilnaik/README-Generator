const badges = [
	['Apache License 2.0', "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"],
	['Boost Software License 1.0', "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"],
	['GNU General Public License', "[![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)](http://perso.crans.org/besson/LICENSE.html)"],
	['GNU General Public License 2.0', "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"],
	['MIT License', "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"],
	['Mozilla Public License 2.0', "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"],
	['Unlicense License', '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'],
];

/**
 * Map the license type to the markdown representation of its badge
 * @type {Map<string, string>}
 */
// @ts-ignore
let badgeMap = new Map(badges);

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

		${badgeMap.get(data.license) || ""}

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

		${data.license ? `This project is licensed under the ${data.license}.` : "This project is not licensed."}

		## Contributions

		${data.contributions}

		## Tests

		To run tests, run the following command

		\`\`\`
		${data.tests}
		\`\`\`

		## Questions

		If you have any questions about the repo, open an issue or contact me directly at <${data.email}>.
		You can find more of my work on [my GitHub](https://github.com/${data.username}).
	`;
	
	return markdown.replace(/[\t]{2}/g, "");
}

module.exports = {generateMarkdown, badgeMap};
