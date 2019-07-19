const util = require("util");
const { drawLine } = require("../helpers/terminal");
const exec = util.promisify(require("child_process").exec);

const { exist } = require("../helpers/validate");
const { checkIfExist } = require("../helpers/path");

const upload = {};

upload.app = async (_options) => {
	const {
		file, username, password, customId
	} = _options;

	exist (file, "--file is required field");
	exist (username, "--username is required field");
	exist (password, "--password is required field");
	exist (customId, "--customId is required field");

	checkIfExist(file, "Given file");

	const command = `curl -u "${username}:${password}" -X POST "https://api-cloud.browserstack.com/app-automate/upload" -F "file=@${file}" -F "data={\\\"custom_id\\\": \\\"${customId}\\\"}"`;

	return await upload.curl(command);
};

upload.curl = async (_command) => {
	const { stdout, stderr } = await exec(_command, {stdio: 'inherit'});

	drawLine();

	console.log(stdout || stderr);

	drawLine();

	return true;
};

module.exports = upload;
