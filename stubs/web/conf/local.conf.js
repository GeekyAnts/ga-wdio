const { get } = require("lodash");
const commonJS = require("./common.conf");

let confJS = {};

confJS.filename = "local.conf.js";
confJS.path = "conf";

confJS.content = (answers) => {
  const _commonPartial = commonJS.content(answers);

  return `const browserstack = require("browserstack-local");

exports.config = {
  user: "${get(answers, 'browserStack.user', '')}",
  key: "${get(answers, 'browserStack.key', '')}",

  capabilities: [{
    browser: 'chrome',
    'browserstack.local': true,

    build: 'webdriver-browserstack'
  }],

  host: 'hub.browserstack.com',  
  ${_commonPartial},

  // Code to start browserstack local before start of test
  onPrepare: function (config, capabilities) {
    console.log("Connecting local");
    return new Promise(function(resolve, reject){
      exports.bs_local = new browserstack.Local();
      exports.bs_local.start({'key': exports.config.key }, function(error) {
        if (error) return reject(error);
        console.log('Connected. Now testing...');

        resolve();
      });
    });
  },

  // Code to stop browserstack local after end of test
  onComplete: function (capabilties, specs) {
    exports.bs_local.stop(function() {});
  }
};`;
};

module.exports = confJS;
