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
		Login.email().setValue("ttt@gmail.com");
		Login.password().setValue("wwww");
		Login.submit().click();

		const textShow = Login.checkOutput().getText();
		assert(textShow, "Something went wrong!");
	});

	it("should login to builderx page", () => {
		Login.login("faizz.af@gmail.com", "123456");
	});
});`;

module.exports = loginPageJS;
