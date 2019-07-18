module.exports = {
  type: "input",
  name: "browserStack.key",
  message: "Browser Stack Key?",
  when: _answers => ["web", "mobile"].includes(_answers.arch) && _answers.stack === "browser-stack",
  validate: _input => _input !== ""
};
