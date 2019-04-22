let OpenPageJS = {};

OpenPageJS.path = "src/commons";

OpenPageJS.filename = "OpenPage.js";

OpenPageJS.content = `class OpenPage {
	open (path) {
		browser.maximizeWindow();
		browser.url(path);
	}
}

export default OpenPage;`;

module.exports = OpenPageJS;