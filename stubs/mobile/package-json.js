let packageJson = {};

packageJson.filename = "package.json";

packageJson.content = `{
  "name": "app-name",
  "version": "1.0.0",
  "description": "",
  "main": "wdio.conf.js",
  "dependencies": {
    "appium": "^1.13.0",
    "chai": "^4.2.0"
  },
  "devDependencies": {
    "@babel/cli": "^7.4.4",
    "@babel/core": "^7.4.5",
    "@babel/preset-env": "^7.4.5",
    "@babel/register": "^7.4.4",
    "@wdio/appium-service": "^5.9.3",
    "@wdio/cli": "^5.10.4",
    "@wdio/local-runner": "^5.10.4",
    "@wdio/mocha-framework": "^5.10.1",
    "@wdio/spec-reporter": "^5.7.9",
    "@wdio/sync": "^5.10.1",
    "chromedriver": "^75.0.0",
    "wdio-chromedriver-service": "^5.0.1",
    "webdriverio": "^5.10.4"
  },
  "scripts": {
    "test": "mocha"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}`;

module.exports = packageJson;
