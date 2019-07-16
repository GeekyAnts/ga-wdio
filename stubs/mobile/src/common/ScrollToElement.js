let scrollToElementJs = {};

scrollToElementJs.path = "src/common";

scrollToElementJs.filename = "ScrollToElement.js";

scrollToElementJs.content = `import Page from "./page";

class ScrollToElement extends Page {
	open() {
		super.open("https://builderx.io/");
	}
	scrollUntilFound() {
		return $("h5=Flutter");
	}
}
export default new ScrollToElement;
`;

module.exports = scrollToElementJs;
