let constantsJS = {};

constantsJS.path = "src/constants";

constantsJS.filename = "index.js";

constantsJS.content = (answers) => {

  return `let constants = {};

constants.env = "production";

constants.architecture = "sync"; // sync, parallel OR mixed (ie. sync followed by parallel)

constants.domains = {
	default: "${answers.baseUrl}"
};

module.exports = constants;
`;
};

module.exports = constantsJS;
