module.exports = {
  type: "input",
  name: "browserStack.key",
  message: "Browser Stack Key?",
  when: _answers => ((_answers.arch === "web" || _answers.arch === "mobile") && (_answers.stack === "browser-stack")),
  validate: _input => _input !== ""
};
