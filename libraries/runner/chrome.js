const chromedriver = require("../drivers/chrome");

const executor = require("./exec");
const { chromePath, chromeHeadlessPath } = require("../helpers/path");

const args = [
	'--port=4444',
	'--url-base=/wd/hub'
];

let chrome = {};

chrome.init = async (_mode) => {
	const _conf = (_mode === 'headless') ? chromeHeadlessPath() : chromePath();

	chromedriver.start(args, false);
	
	executor
		.init(_conf)
		.then(code => chromedriver.stop());
};

module.exports = chrome;
