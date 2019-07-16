let scrollTillJS = {};

scrollTillJS.path = "src/tests";
scrollTillJS.filename = 'ScrollTill.js';
scrollTillJS.content = `import ScrollToElement from "../commons/ScrollToElement";

const assert = require("assert");

describe("builderx", function () {
	it("scroll to flutter", () => {
		const elementText = ScrollToElement.scrollUntilFound();

		ScrollToElement.open();
		ScrollToElement.scrollUntilFound().scrollIntoView();

		assert(elementText, "Flutter")
	});
});
`;

module.exports = scrollTillJS;