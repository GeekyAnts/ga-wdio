let screenshotJS = {};

screenshotJS.path = "src/commons";

screenshotJS.filename = "ScreenShot.js";

screenshotJS.content = `class ScreenShot {
	takeScreenshot() {
		const filePath = \`\${process.env.GA_PROJECT_PATH}/store/screenshots/\` + Math.random() + "_.png";
		browser.saveScreenshot(filePath);
	}
}

export default new ScreenShot;
`;

module.exports = screenshotJS;
