const { spawn } = require("child_process");
const { wdio } = require("../helpers/path");

let executor = {};

executor.init = async (_conf) => {
	return new Promise(async (resolve) => {
		const _spawn = spawn(wdio(), [_conf]);

		_spawn.stdout.on("data", (_data) => _data.toString().trim() !== "" ? console.log(_data.toString()) : "");
		_spawn.stderr.on("data", (_data) => _data.toString().trim() !== "" ? console.log(_data.toString()) : "");
		
		_spawn.on("close", (code) => resolve(code));
	});
};

module.exports = executor;