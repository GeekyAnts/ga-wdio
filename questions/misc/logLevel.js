
module.exports = {
  type: "list",
  name: "logLevel",
  message: "Log level?",
  default: "info",
  when: _answers => ["web", "mobile"].includes(_answers.arch),
  choices: ["info", "warn", "debug", "error"]
};
