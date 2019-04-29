/**
 * All the questions are collected here...!
 */

module.exports = {
	appName: require('./misc/appName'),
	stack: require('./misc/stack'),
	browserStackUser: require('./browser-stack/username'),
	browserStackKey: require('./browser-stack/key'),
	osVersion: require('./capabilities/os-version'),
	osName: require('./capabilities/os'),
	logLevel: require('./misc/logLevel'),
	outputDir: require('./misc/outputDir'),
	screenshotPath: require('./misc/screenshotPath'),
	baseUrl: require('./misc/baseUrl'),
	waitTimeout: require('./misc/waitTimeout'), 
	retryCount: require('./misc/retryCount')
};
