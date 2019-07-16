
module.exports = {
	"type": "number",
	"name": "waitTimeout",
	"message": "Max timeout?",
	"default": 10000,
	"when": (_answers) => _answers.arch === "web" || _answers.arch === "mobile",
};
