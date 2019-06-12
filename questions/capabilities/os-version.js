
module.exports = {
	"type": "input",
	"name": "capabilities.os_version",
	"message": "Operating System Version?",
	"default": "10",
	"suffix": "\n Goto https://www.browserstack.com/automate/capabilities?tag=selenium-2-3#navigation-tabs \n & Select 'NodeJS' as Code:",
	"when": (_answers) => _answers.arch === "web" && _answers.stack === "browser-stack",
};
