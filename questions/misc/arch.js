
module.exports = {
  type: "list",
  name: "arch",
  message: "What are we building for?",
  default: "web",
  choices: ["web", "api", "mobile"]
};
