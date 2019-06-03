const { get } = require("lodash");
const commonJS = require("./common.conf");

let confJS = {};

confJS.filename = "chrome.conf.js";
confJS.path = "conf";

confJS.content = (answers) => {
  const _commonPartial = commonJS.content(answers);

  return `const video = require("wdio-video-reporter");

exports.config = {
	runner: 'local',

	maxInstances: 1,

	capabilities: [{
		maxInstances: 1,
		browserName: 'chrome',
		chromeOptions: {
			args: [
				'disable-extensions',
				'safebrowsing-disable-extension-blacklist',
				'safebrowsing-disable-download-protection'
			],
			prefs: {
				'safebrowsing.enabled': true,
				'download.default_directory': \`\${process.env.GA_SESSION_ID}/\`
			}
		}
	}],

	reporters: [
    [video, {
			saveAllVideos: true,
      videoSlowdownMultiplier: 10,
      outputDir: \`${get(answers, 'outputDir', './storage/')}\${process.env.GA_SESSION_ID}/\`,
    }],
	],
${_commonPartial}
};`;
};

module.exports = confJS;
