let LoginJS = {};

LoginJS.path = "src/commons";

LoginJS.filename = "Login.js";

LoginJS.content = `import OpenPage from "./OpenPage";
import LoginXpath from "../xpaths/LoginPath.json";

class Login extends OpenPage {
	open () {
		super.open(LoginXpath.url);
	}
	email () {
		return $(LoginXpath.email);
	}
	password () {
		return $(LoginXpath.password);
	}
	submit () {
		return $(LoginXpath.submit);
	}
	checkOutput () {
		return $(LoginXpath.checkOutput);
	}
	login (user, pass) {
		this.email().setValue(user);
		this.password().setValue(pass);
		this.submit().click();
	}
}

export default new Login();`;

module.exports = LoginJS;