
module.exports = {
  type: "number",
  name: "waitTimeout",
  message: "Max timeout?",
  default: 10000,
  when: _answers => ["web", "mobile"].includes(_answers.arch)
};
