
module.exports = {
	"type": "input",
	"name": "capabilities.os",
	"message": "Operating System?",
	"default": "Windows",
	"suffix": "\n Goto https://www.browserstack.com/automate/capabilities?tag=selenium-2-3#navigation-tabs \n & Select 'NodeJS' as Code:",
	"when": (_answers) => _answers.stack === "browser-stack",
};
