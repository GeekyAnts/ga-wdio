const commonJS = require("./common.conf");

let confJS = {};

confJS.filename = "gecko.conf.js";
confJS.path = "conf";

confJS.content = (answers) => {
  const _commonPartial = commonJS.content(answers);

  return `exports.config = {
	path: '/',
	
	runner: 'local',
	
	maxInstances: 1,

	capabilities: [{
		maxInstances: 1,
		browserName: 'firefox'
	}],
${_commonPartial}
};`;
};

module.exports = confJS;
