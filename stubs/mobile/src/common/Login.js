let loginJs = {};

loginJs.path = "src/common";

loginJs.filename = "Login.js";

loginJs.content = `import NativeScreen from "./NativeScreen.js";
import TabPage from "./TabPage.js";

const loginXpath = require("../xpath/ios/loginPath.json");

class Login extends NativeScreen {
	constructor() {
		super(TabPage.login);
	}
	get loginTab() {
		return $(loginXpath.LOGIN);
	}
	get email() {
		return $(loginXpath.EMAIL);
	}
	get password() {
		return $(loginXpath.PASSWORD);
	}
	get loginButton() {
		return $(loginXpath.BUTTON);
	}
	get loginAlert() {
		return $(loginXpath.ALERT_OK);
	}
}

export default new Login
`;

module.exports = loginJs;
