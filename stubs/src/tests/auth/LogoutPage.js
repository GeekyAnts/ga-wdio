let logoutPageJS = {};

logoutPageJS.path = "src/tests/auth";
logoutPageJS.filename = "LogoutPage.js";
logoutPageJS.content = `import Login from "../../commons/Login";
import Logout from "../../commons/Logout";

describe("Logout the page", function () {
	before(() => {
		const emailValue = "faizz.af@gmail.com";
		const passwordValue = "123456";
		Login.login(emailValue,passwordValue)
	});

	it("should redirect to home page when logged out", () => {
		Logout.settings().click();
		Logout.clickLogout().click();
	})
});`;

module.exports = logoutPageJS;
