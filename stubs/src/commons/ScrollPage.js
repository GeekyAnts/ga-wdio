let ScrollPageJS = {};

ScrollPageJS.path = "src/commons";

ScrollPageJS.filename = "ScrollPage.js";

ScrollPageJS.content = `import OpenPage from "./OpenPage";
import scrollXpath from "../xpaths/ScrollPath.json";
class ScrollPage extends OpenPage {
	open () {
		super.open('/');
	}
	width () {
		return $(scrollXpath.pageBody).getSize('width');
	}
	height () {
		return $(scrollXpath.pageBody).getSize('height');
	}
	scrollDown () {
		browser.touchScroll(0, this.height());
	}
}

export default new ScrollPage();`;

module.exports = ScrollPageJS;
