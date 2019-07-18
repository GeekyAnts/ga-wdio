
module.exports = {
  type: "list",
  name: "stack",
  message: "Where are we building?",
  default: "browser-stack",
  when: _answers => ["web", "mobile"].includes(_answers.arch),
  choices: ["browser-stack", "local"]
};
