const { get } = require("lodash");
const commonJs = require("./common.conf");

let confJs = {};

confJs.filename = "android.browser.conf.js";

confJs.path = "conf";

confJs.content = answers => {
  const _commonPartial = commonJs.content(answers);
	
	return `exports.config = {
	specs: [
		"./src/test/scroll-test.js"
	],

	services: ["appium"],

	appium: {
		logPath: \`${get(answers, "logPath", "./store/")}\${process.env.GA_SESSION_ID}/\`,
	},

	port: 4723,

	capabilities: [{
		deviceName: \`\${process.env.ANDROID_DEVICENAME}\`,
		platformName: \`\${process.env.ANDROID_PLATFORMNAME}\`,
		platformVersion: \`\${process.env.ANDROID_PLATFORVERSION}\`,
		maxInstances: 1,
		browserName: "chrome",
		chromedriverExecutable: "/your/path/for/chromedriver",
		chromeOptions: {
			args: ["--no-first-run"],
		},
		newCommandTimeout: 240,
	}],

	${_commonPartial}
}`;
};

module.exports = confJs;
