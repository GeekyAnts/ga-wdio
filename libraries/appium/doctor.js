const { spawn } = require("child_process");
const { appiumDoctor } = require("../helpers/path");

const doctor = async () => {
	return new Promise(async (resolve) => {
		const _spawn = spawn(appiumDoctor(), {stdio: "inherit"});

		_spawn.on("close", (code) => resolve(code));
	});
};

module.exports = doctor;
