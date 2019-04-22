
const chromedriver = require("chromedriver");
const util = require("util");
const exec = util.promisify(require("child_process").exec);

const browserStack = async () => {
	return new Promise(async (resolve, reject) => {
		const command = "./geekyants-tester/node_modules/.bin/wdio geekyants-tester/conf/browser-stack.conf.js";

		const args = [
			"--port=4444",
			"--url-base=/wd/hub"
		];

		const returnPromises = true;

		chromedriver
			.start(args, returnPromises)
			.then(async () => {
				console.log("Chrome Driver is running...");

				const { stdout, stderr } = await exec(command);

				console.log(stdout || stderr);

				if (stderr) return resolve(stderr || stdout);
				return resolve(stdout);
			});
	});
};

module.exports = {
	browserStack
};
