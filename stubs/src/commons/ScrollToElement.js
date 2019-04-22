let ScrollToElementJS = {};

ScrollToElementJS.path = "src/commons";

ScrollToElementJS.filename = "ScrollToElement.js";

ScrollToElementJS.content = `import OpenPage from "./OpenPage";

class ScrollToElement extends OpenPage {
	open () {
		super.open('/');
	}
	scrollUntilFound () {
		return $('h5=Flutter');
	} 
}

export default new ScrollToElement();`;

module.exports = ScrollToElementJS;
