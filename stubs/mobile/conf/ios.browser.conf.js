const { get } = require("lodash");
const commonJs = require("./common.conf");

let confJs = {}
confJs.filename = "android.browser.conf.js";
confJs.path = "conf";
confJs.content = (answers) => {
    const _commonPartial = commonJs.content(answers);
    return `
    exports.config = {
        specs: [
            './src/test/scroll-test.js'
        ],
        services: ['appium'],
        reporters: ['spec'],
        appium: {
            logPath: \`${get(answers,'logPath','./store/')}\${process.env.GA_SESSION_ID}/\`,
        },
        port: 4723,
        capabilities: [{
            deviceName: 'iPhone X',
            platformName: 'iOS',
            platformVersion: '12.1',
            orientation: 'PORTRAIT',
            maxInstances: 1,
            browserName: 'safari',
            newCommandTimeout: 240,
        },
        ]
        ${_commonPartial}
    }`
};
module.exports = confJs