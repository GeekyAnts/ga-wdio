let singleTestJS = {};

singleTestJS.path = "src/tests";
singleTestJS.filename = 'SingleTest.js';
singleTestJS.content = `import assert from "assert";
import FormPage from "../repo/FormPage";

describe("Submit the geekyants form and validate Submit", function () {
	it("Should submit the geekyants form and show validation comments  ", () => {
		FormPage.open();
		FormPage.hireLink().click();
		FormPage.name().setValue("sample")
		FormPage.company().setValue("sample")
		FormPage.email().setValue("sample@gmail.com")
		FormPage.skype().setValue("sample")
		FormPage.referal().setValue("sample")
		FormPage.requirement().setValue("requirement")
		FormPage.submitButton().scrollIntoView();
		FormPage.submitButton().click();
		FormPage.checkOutput().waitForDisplayed();
		FormPage.checkOutput().scrollIntoView()
		
		const head = FormPage.checkOutput().getText();		
		assert.equal(head, "Thank You");
	});
});`;

module.exports = singleTestJS;
