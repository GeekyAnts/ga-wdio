const { spawn } = require("child_process");
const { wdio } = require("../../helpers/path");

let executor = {};

executor.init = async (_conf) => {
	return new Promise(async (resolve) => {
		const _spawn = spawn(wdio(), [_conf], { stdio: 'inherit' });

		_spawn.on("close", (code) => resolve(code));
	});
};

module.exports = executor;