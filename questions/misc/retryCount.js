module.exports = {
  type: "number",
  name: "retryCount",
  message: "Max retry count?",
  default: 3,
  when: _answers => _answers.arch === "web" || _answers.arch == "mobile"
};
