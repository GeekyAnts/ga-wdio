let ScrollToElementJS = {};

ScrollToElementJS.path = "src/commons";

ScrollToElementJS.filename = "ScrollToElement.js";

ScrollToElementJS.content = `import OpenPage from "./OpenPage";
import scrollElement from "../xpaths/ScrollToXpath.json";
class ScrollToElement extends OpenPage {
	open () {
		super.open('/');
	}
	scrollUntilFound () {
		return $(scrollElement.scrollTo);
	} 
}

export default new ScrollToElement();`;

module.exports = ScrollToElementJS;
