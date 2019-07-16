let changeTabTestJs = {};

changeTabTestJs.path = "src/test";

changeTabTestJs.filename = "changeTab-test.js";

changeTabTestJs.content = `import TabPage from "../common/TabPage";

describe("test the tab change of the application", () => {
	it("should change the tab to webView Page", () => {
		TabPage.webView.click();
	});
	it("should change the tab to Login Page", () => {
		TabPage.login.click();
	});
	it("should change the tab to form Page", () => {
		TabPage.forms.click();
	});
	it("should change the tab to swipe Page", () => {
		TabPage.swipe.click();
	});
});
`;

module.exports = changeTabTestJs;
