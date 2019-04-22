let packageJson = {};

packageJson.filename = 'package.json';

packageJson.content = `{
	"name": "app-name",
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"scripts": {
		"test": "echo ${"\\\""}Error: no test specified${"\\\""} && exit 1",
		"single": "./node_modules/.bin/wdio conf/single.conf.js",
		"local": "./node_modules/.bin/wdio conf/local.conf.js"
	},
	"keywords": [
		"webdriverio",
		"browserstack",
		"selenium",
		"tests"
	],
	"author": "",
	"license": "ISC",
	"devDependencies": {
		"@babel/cli": "^7.4.3",
		"@babel/core": "^7.4.3",
		"@babel/preset-env": "^7.4.3",
		"@babel/register": "^7.4.0",
		"@wdio/local-runner": "^5.7.9",
		"@wdio/mocha-framework": "^5.7.8",
		"@wdio/sync": "^5.6.3"
	},
	"dependencies": {
		"@babel/polyfill": "^7.4.3",
		"chromedriver": "^73.0.0",
		"@wdio/cli": "^5.7.10",
		"babel-preset-stage-0": "^6.24.1",
		"browserstack-local": "^1.3.7",
		"chai": "^4.2.0",
		"path": "^0.12.7",
		"wdio": "^3.0.3",
		"wdio-mocha-framework": "^0.6.4",
		"wdio-video-recorder": "^1.0.2",
		"webdriverio": "^5.6.3"
	}
}`;

module.exports = packageJson;
