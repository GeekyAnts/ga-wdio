const colors = require("colors");
const _ios = require("./mobile/ios");
const { initAPIs } = require("./api");
const { local } = require("./web/local");
const _android = require("./mobile/android");
const { mobileDotEnv } = require("../helpers/path");
const browserStack = require("./web/browser-stack");
const { clearConsole, bgGreenBlack } = require("../helpers/terminal");

const ios = async (_options) => {	
	mobileDotEnv();

	const { 
		platform, browser, stack, udid, deviceName, platformVersion
	} = _options;

	clearConsole();

	bgGreenBlack(`Storage folder ==> ${process.env.GA_SESSION_ID}/\n`);
	
	const options = {
		udid, stack, deviceName, 
		browser, platformVersion
	};

	return await _ios.init(options);
};

const android = async (_options) => {
	mobileDotEnv();

	const { 
		platform, browser, stack
	} = _options;

	clearConsole();

	bgGreenBlack(`Storage folder ==> ${process.env.GA_SESSION_ID}/\n`);
	
	const options = {
		browser,
		stack
	};
	
	return await _android.init(options);
};

const web = async (_options) => {
	const { stack, browser, mode, api } = _options;

	clearConsole();

	bgGreenBlack(`Storage folder ==> ${process.env.GA_SESSION_ID}/\n`);

	switch (stack) {
		case 'browser-stack-local':
			await browserStack.local();
		case 'browser-stack': 
			await browserStack.init();
			break;
		case 'local':
			await local(browser, mode);
			break;
	}
};

const api = async (_options) => {
	clearConsole();
	
	return await initAPIs();
};

module.exports = {
	web,
	api,
	ios,
	android
};
