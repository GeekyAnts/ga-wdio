
module.exports = {
	"type": "list",
	"name": "stack",
	"message": "Where are we building?",
	"default": "browser-stack",
	"when": (_answers) => _answers.arch === "web" && _answers.arch === "web",
	"choices": [
		"browser-stack",
		"local"
	]
};
