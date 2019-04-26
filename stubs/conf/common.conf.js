const { get } = require("lodash");

let commonConfJS = {};

commonConfJS.content = (answers) => {
  return `
  exclude: [],
  coloredLogs: true,
  
  baseUrl: "${get(answers, 'baseUrl', '')}",
  logLevel: "${get(answers, 'logLevel', 'info')}",
  waitforTimeout: ${get(answers, 'waitTimeout', 10000)},
  connectionRetryCount: ${get(answers, 'retryCount', 3)},
  outputDir: \`${get(answers, 'outputDir', './storage/')}\${process.env.GA_SESSION_ID}/\`,
  connectionRetryTimeout: ${get(answers, 'waitTimeout', 10000)},
  screenshotPath: \`${get(answers, 'outputDir', './storage/')}\${process.env.GA_SESSION_ID}/\`,

  specs: [
    './src/tests/**/**.js',
  ],

  suites: {
    form: [
      "./src/tests/SingleTest.js",
    ],
    login: [
      "./src/tests/auth/LoginPage.js",
    ],
    signup: [
      "./src/tests/auth/SignUpPage.js",
    ],
    upload: [
      "./src/tests/profile/UploadImage.js",
    ],
    screenrecord: [
      "./src/tests/TestScreenRecord.js"
    ]
  },

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
    compilers: ['js:@babel/register'],
  },

  before: function () {
    var chai = require('chai');
    global.expect = chai.expect;
    chai.Should();
  },

  afterTest: function (test) {
    if (! test.passed) {
      return;
    }
    var filename = encodeURIComponent(test.title.replace(/\s+/g, '-'));

    var filePath = this.screenshotPath + filename + '.png';

    browser.saveScreenshot(filePath);
  }
`;
};

module.exports = commonConfJS;
