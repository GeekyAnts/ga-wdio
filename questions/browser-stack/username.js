
module.exports = {
	"type": "input",
	"name": "browserStack.user",
	"message": "Browser Stack Username?",
	"when": (_answers) => _answers.stack === "browser-stack",
	"validate": (_input) => _input !== ""
};
