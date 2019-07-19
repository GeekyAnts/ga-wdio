const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");

const shutDown = (_msg) => {
	console.log("\n?".green, "[Error]:".red, `${_msg}\n`.green);
	process.exit(1);
};

const checkIfExist = (_path, _what) => {
	if (! fs.existsSync(_path)) {
		shutDown(`${_what} does not exists.`);
	}
};

const mobileDotEnv = () => {
	const _path = path.join(process.env.GA_PROJECT_PATH, ".env");
	checkIfExist(_path, ".env is missing from the project's root directory!");

	dotenv.config({
		path: _path
	});
	
	return _path;
};

const appiumDoctor = () => {
	const _path = path.join(process.env.GA_PROJECT_PATH, "node_modules/.bin/appium-doctor")
	checkIfExist(_path, "node_modules");

	return _path;
};

const npm = () => {
	const _path = path.join(process.env.GA_PROJECT_PATH, "node_modules");
	checkIfExist(_path, "node_modules");

	return _path;
};
	
const wdio = () => {
	const _path = `${npm()}/.bin/wdio`;
	checkIfExist(_path, "WebDriverIO");

	return _path;
};

const gecko = () => {
	const _path = path.join(process.env.GA_PROJECT_PATH, "conf/gecko.conf.js");;
	checkIfExist(_path, "Gecko's conf");

	return _path;
};

const chrome = () => {
	const _path = path.join(process.env.GA_PROJECT_PATH, "conf/chrome.conf.js");;
	checkIfExist(_path, "Chrome's conf");
	
	return _path;
};

const geckoHeadless = () => {
	const _path = path.join(process.env.GA_PROJECT_PATH, "conf/gecko-headless.conf.js");;
	checkIfExist(_path, "Headless Gecko's conf");
	
	return _path;
};

const chromeHeadless = () => {
	const _path = path.join(process.env.GA_PROJECT_PATH, "conf/chrome-headless.conf.js");;
	checkIfExist(_path, "Headless Chrome's conf");
	
	return _path;
};

const browserStack = () => {
	const _path = path.join(process.env.GA_PROJECT_PATH, "conf/browser-stack.conf.js");
	checkIfExist(_path, "Browser-Stack's conf");
	
	return _path;
};

const browserStackLocal = () => {
	const _path = path.join(process.env.GA_PROJECT_PATH, "conf/local.conf.js");
	checkIfExist(_path, "Browser-Stack Local's conf");
	
	return _path;
}

const apiRepo = () => {
	const _path = path.join(process.env.GA_PROJECT_PATH, "src/api.js");
	checkIfExist(_path, "Standard API Repo missing or");

	return _path;
};

const iosConf = () => {
	const _path = path.join(process.env.GA_PROJECT_PATH, "conf/ios.conf.js");
	checkIfExist(_path, "iOS conf");

	return _path;
};

const iosBrowserConf = () => {
	const _path = path.join(process.env.GA_PROJECT_PATH, "conf/ios.browser.conf.js");
	checkIfExist(_path, "iOS Browser conf");

	return _path;
};

const iosBrowserStackConf = () => {
	const _path = path.join(process.env.GA_PROJECT_PATH, "conf/browserstack-ios.conf.js");
	checkIfExist(_path, "Browser-Stack iOS conf");

	return _path;
};

const androidConf = () => {
	const _path = path.join(process.env.GA_PROJECT_PATH, "conf/android.conf.js");
	checkIfExist(_path, "Android conf");

	return _path;
};

const androidBrowserConf = () => {
	const _path = path.join(process.env.GA_PROJECT_PATH, "conf/android.browser.conf.js");
	checkIfExist(_path, "Android Browser conf");

	return _path;
};

const androidBrowserStackConf = () => {
	const _path = path.join(process.env.GA_PROJECT_PATH, "conf/browserstack-android.conf.js");
	checkIfExist(_path, "Browser-Stack Android conf");

	return _path;
};

module.exports = {
	appiumDoctor,
	shutDown,
	checkIfExist,
	npm,
	wdio,
	apiRepo,
	chromePath: chrome,
	geckoPath: gecko,
	chromeHeadlessPath: chromeHeadless,
	geckoHeadlessPath: geckoHeadless,
	browserStackPath: browserStack,
	browserStackLocalPath: browserStackLocal,
	iosConf,
	iosBrowserConf,
	iosBrowserStackConf,
	androidConf,
	androidBrowserConf,
	androidBrowserStackConf,
	mobileDotEnv
};
