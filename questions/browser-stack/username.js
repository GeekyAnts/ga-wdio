module.exports = {
  type: "input",
  name: "browserStack.user",
  message: "Browser Stack Username?",
  when: _answers => ["web", "mobile"].includes(_answers.arch) && _answers.stack === "browser-stack",
  validate: _input => _input !== ""
};
