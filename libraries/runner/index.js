const colors = require("colors");
const { local } = require("./local");
const browserStack = require("./browser-stack");

const runner = async (options) => {
	console.log('\033[2J');
	console.log(`Storage folder ==> ${process.env.GA_SESSION_ID}/\n`.bgGreen.black);

	const { stack, browser, mode } = options;

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
