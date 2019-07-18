const { get } = require("lodash");

let commonConfJs = {};

commonConfJs.content = answers => {
  return `runner: "local",
	framework: "mocha",
	mochaOpts: {
		ui: "bdd",
		timeout: 60000,
		compilers: ["js:@babel/register"],
	},

	logLevel: "info",
	waitforTimeout: ${get(answers, "waitTimeout", 10000)},
	sync: true,
	coloredLogs: true,
	connectionRetryTimeout: ${get(answers, "waitTimeout", 10000)},
	connectionRetryCount: ${get(answers, "retryCount", 3)},
	
	reporters: ["spec"],  
	
	afterTest: function (test) {
		if (! test.passed) {
			const fileName = encodeURIComponent(test.title.replace(/\s+/g, "-"))
			const filePath = this.screenshotPath + filename + ".png";
			
			browser.saveScreenshot(filePath);
		}
	},`;
};
module.exports = commonConfJs;
