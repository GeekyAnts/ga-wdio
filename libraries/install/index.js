const util = require("util");
const exec = util.promisify(require("child_process").exec);

let runner = {};

runner.perform = async (_appName) => {
	return new Promise(async (resolve, reject) => {		
		const { stdout, stderr } = await exec(`cd ${_appName} && npm install;`);

		console.log(stdout || stderr);

		if (stderr) return resolve(stderr);
		return resolve(stdout);
	});
};

module.exports = runner;
