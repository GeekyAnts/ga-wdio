let LogoutJS = {};

LogoutJS.path = "src/commons";

LogoutJS.filename = "Logout.js";

LogoutJS.content = `import OpenPage from "./OpenPage";
import logoutXpath from "../xpaths/LogoutPath.json";

class Logout extends OpenPage {
	open() {
		super.open("login")
	}
	settings() {
		return $(logoutXpath.settings);
	}
	clickLogout(){
		return $(logoutXpath.logoutClick);
	}
}
export default new Logout();`;

module.exports = LogoutJS;
