const executor = require("./exec");
const { browserStackPath, browserStackLocalPath } = require("../helpers/path");

let browserStack = {};

browserStack.init = async () => {	
	const _conf = browserStackPath();

	executor
		.init(_conf)
		.then(code => code);
};

browserStack.local = async () => {
	const _conf = browserStackLocalPath();

	executor
		.init(_conf)
		.then(code => code);
};

module.exports = browserStack;
