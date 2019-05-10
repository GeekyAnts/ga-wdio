let LoginJS = {};

LoginJS.path = "src/commons";

LoginJS.filename = "Login.js";

LoginJS.content = `import OpenPage from "./OpenPage";
import loginXpath from "../xpaths/LoginPath.json";

class Login extends OpenPage {
	open () {
		super.open('login');
	}
	email () {
		return $(loginXpath.email);
	}
	password () {
		return $(loginXpath.password);
	}
	submit () {
		return $(loginXpath.submit);
	}
	checkOutput () {
		return $(loginXpath.checkOutput);
	}
	login (userName, password) {
		this.email().setValue(userName);
		this.password().setValue(password);
		this.submit().click();
	}
}

export default new Login();`;

module.exports = LoginJS;