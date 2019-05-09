let loginPageJS = {};

loginPageJS.path = "src/tests/auth";
loginPageJS.filename = 'LoginPage.js';
loginPageJS.content = `import assert from "assert";
import Login from "../../commons/Login";

describe("Do login in builderx page", function () {
	beforeEach(() => {
		Login.open();
	});

	it("should notlogin to builderx page", () => {
		const emailValue = 'ttt@gmail.com';
		const passwordValue = 'wwww';
		const outputText = 'Something went wrong! '
		Login.email().setValue(emailValue)
  
		Login.password().setValue(passwordValue)
  
		Login.submit().click()
  
		const textShow = Login.checkOutput().getText();
		assert(textShow, outputText);
	});

	it("should login to builderx page", () => {
		const emailValue = 'faizz.af@gmail.com';
		const passwordValue = '123456';
		Login.login(emailValue, passwordValue);
		const outputTitle = browser.getTitle();
		const expectedTitle = 'License';
		assert(outputTitle, outputTitle.includes(expectedTitle));
	});
});`;

module.exports = loginPageJS;
