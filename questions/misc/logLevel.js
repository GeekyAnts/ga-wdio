
module.exports = {
	"type": "list",
	"name": "logLevel",
	"message": "Log level?",
	"default": "info",
	"when": (_answers) => _answers.arch === "web",
	"choices": [
		"info",
		"warn",
		"debug",
		"error"
	]
};
