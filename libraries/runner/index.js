const colors = require("colors");
const { initAPIs } = require("./api");
const { local } = require("./web/local");
const browserStack = require("./web/browser-stack");
const { clearConsole, bgGreenBlack } = require("../helpers/terminal");

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
	api
};
