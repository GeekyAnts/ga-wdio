const colors = require("colors");
const { initAPIs } = require("./api");
const { local } = require("./web/local");
const browserStack = require("./web/browser-stack");
const { clearConsole, bgGreenBlack } = require("../helpers/terminal");

const runner = async (_options) => {
	const { stack, browser, mode, api } = _options;
	
	if (api) {
		return await initAPIs();
	}

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

module.exports = {
	runner
};
