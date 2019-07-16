const { get } = require("lodash");
const commonJs = require("./common.conf");

let confJs = {};
confJs.filename = "android.conf.js";
confJs.path = "conf";
confJs.content = answers => {
  const _commonPartial = commonJs.content(answers);
  return `
 exports.config =
        {
            specs: [
                './src/test/login-test.js',
                './src/test/form-test.js',
                './src/test/signUp-test.js',
                './src/test/changeTab-test.js'
            ],
            services: ['appium'],
            reporters: ['spec'],
            appium: {
                logPath: \`${get(
                  answers,
                  "logPath",
                  "./store/"
                )}\${process.env.GA_SESSION_ID}/\`,
            },
            port: 4723,
            capabilities: [{
                maxInstances: 1,
                deviceName: 'iPhone X',
                platformName: 'iOS',
                app:  "${get(answers, "app", "")}",
                platformVersion: "${get(answers, "platformVersion", "")}",
                orientation: 'PORTRAIT',
                noReset: true,
                automationName: 'XCUITest',
                useNewWDA: true,
                waitForQuiescence: false,
                newCommandTimeout: 240,
                udid: "${get(answers, "udid", "")}",
            }],
            ${_commonPartial}
        }`;
};
module.exports = confJs;
