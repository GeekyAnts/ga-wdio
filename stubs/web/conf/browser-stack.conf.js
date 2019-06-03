const { get } = require("lodash");
const commonJS = require("./common.conf");

let confJS = {};

confJS.filename = "browser-stack.conf.js";
confJS.path = "conf";

confJS.content = (answers) => {
  const _commonPartial = commonJS.content(answers);

  return `exports.config = {
  user: "${get(answers, 'browserStack.user', '')}",
  key: "${get(answers, 'browserStack.key', '')}",

  updateJob: false,

  capabilities: [{
    os_version: "10",
    browser: "Chrome",
    fixSessionCapabilities: true,
    remoteFiles: true,
    build: "webdriver-browserstack",
    "browserstack.debug": "true",
    "browserstack.networkLogs": "true"
  }],
${_commonPartial}
};`;
};

module.exports = confJS;