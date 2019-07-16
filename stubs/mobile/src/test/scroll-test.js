let scrollTestJs = {};

scrollTestJs.path = "src/test";

scrollTestJs.filename = "scroll-test.js";

scrollTestJs.content = `import ScrollToElement from "../common/ScrollToElement";
const assert = require("assert");

describe("builderx", () => {
	it("scroll to flutter  ", () => {
		const elementText = ScrollToElement.scrollUntilFound();
		ScrollToElement.open();
		ScrollToElement.scrollUntilFound().scrollIntoView();
		assert(elementText, "Flutter");
	});
});
`;

module.exports = scrollTestJs;
