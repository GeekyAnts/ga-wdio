const { get } = require("lodash");
const commonJs = require("./common.conf");

let confJs = {};

confJs.filename = "ios.conf.js";

confJs.path = "conf";

confJs.content = answers => {
  const _commonPartial = commonJs.content(answers);
  return `exports.config = {
	specs: [
		"./src/test/login-test.js",
		"./src/test/form-test.js",
		"./src/test/signUp-test.js",
		"./src/test/changeTab-test.js"
	],
	
	services: ["appium"],

	appium: {
		logPath: \`${get(answers, "logPath", "./store/")}\${process.env.GA_SESSION_ID}/\`,
	},

	port: 4723,
	capabilities: [{
		maxInstances: 1,
		deviceName: "\`\${process.env.IOS_DEVICENAME}\`",
		platformName: "iOS",
		app:  "${get(answers, "app", "")}",
		platformVersion: "\`\${process.env.IOS_PLATFORMVERSION}\`",
		orientation: "PORTRAIT",
		noReset: true,
		automationName: "XCUITest",
		useNewWDA: true,
		waitForQuiescence: false,
		newCommandTimeout: 240,
		udid: "\`\${process.env.IOS_UDID}\`",
	}],
	
	${_commonPartial}
}`;
};

module.exports = confJs;
