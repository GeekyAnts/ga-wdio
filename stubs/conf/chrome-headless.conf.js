const commonJS = require("./common.conf");

let confJS = {};

confJS.filename = "chrome-headless.conf.js";
confJS.path = "conf";

confJS.content = (answers) => {
  const _commonPartial = commonJS.content(answers);

  return `exports.config = {
	runner: 'local',

	maxInstances: 1,

	capabilities: [{
		maxInstances: 1,
		browserName: 'chrome',
		chromeOptions: {
			args: [
				'--headless'
			],
		}
	}],
${_commonPartial}
};`;
};

module.exports = confJS;