const { get } = require("lodash");
const commonJs = require("./common.conf");

let confJs = {};

confJs.filename = "browserstack-ios.conf.js";

confJs.path = "conf";

confJs.content = answers => {
  const _commonPartial = commonJs.content(answers);
  
  return `exports.config = {
  user: "${get(answers, "browserStack.user", "")}",
  key: "${get(answers, "browserStack.key", "")}",

  specs: [
    "./src/test/login-test.js",
    "./src/test/form-test.js",
    "./src/test/signUp-test.js",
    "./src/test/changeTab-test.js"
  ],

  capabilities: [{
    device: \`\${process.env.IOS_BS_DEVICE}\`,
    "realMobile": true,
    app: \`\${process.env.IOS_BS_APPURL}\`,
    "browserstack.debug": true
  }],

  ${_commonPartial}
}`;
};

module.exports = confJs;
