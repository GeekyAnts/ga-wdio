let ScrollPageJS = {};

ScrollPageJS.path = "src/commons";

ScrollPageJS.filename = "ScrollPage.js";

ScrollPageJS.content = `import OpenPage from "./OpenPage";

class ScrollPage extends OpenPage {
	open () {
		super.open('/');
	}
	width () {
		return $('#spark-app').getSize('width');
	}
	height () {
		return $('#spark-app').getSize('height');
	}
	scrollDown () {
		window.scrollTo(0, document.body.scrollHeight);
	}
}

export default new ScrollPage();`;

module.exports = ScrollPageJS;
