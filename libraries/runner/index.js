const colors = require("colors");
const { local } = require("./local");
const browserStack = require("./browser-stack");

// Define custom theme...
colors.setTheme({
	boldWhite: ['white', 'bold'],
	boldCyan: ['cyan', 'bold']
});

const runner = async (options) => {
	console.log('\033[2J');
	console.log("\n?".green, `Storage folder ==> ${process.env.GA_SESSION_ID}`.boldCyan);
	console.log("\n");

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
