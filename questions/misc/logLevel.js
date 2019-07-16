
module.exports = {
  type: "list",
  name: "logLevel",
  message: "Log level?",
  default: "info",
  when: _answers => (_answers.arch === "web" || _answers.arch === "mobile"),
  choices: ["info", "warn", "debug", "error"]
};
