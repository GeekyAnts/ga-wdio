const colors = require("colors");
const { initAPIs } = require("./api");
const { local } = require("./web/local");
const browserStack = require("./web/browser-stack");
const { clearConsole, bgGreenBlack } = require("../helpers/terminal");
const { _android, _ios } = require("../run");

const android = async (_options) => {
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

const ios = async (_options) => {
	const { 
		platform, browser, stack
	} = _options;

	clearConsole();

	bgGreenBlack(`Storage folder ==> ${process.env.GA_SESSION_ID}/\n`);
	
	const options = {
		browser,
		stack
	};

	console.log(">> Browser:", browser);
	console.log(">> Stack:", stack);
	console.log(">> UDID:", udid);
	console.log(">> Device Name:", deviceName);
	console.log(">> Platform Version:", platformVersion);
	
	// return await _ios.init(options);
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
