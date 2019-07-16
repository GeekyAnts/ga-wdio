let scrollDownJS = {};

scrollDownJS.path = "src/tests";
scrollDownJS.filename = 'ScrollDown.js';
scrollDownJS.content = `import ScrollPage from "../commons/ScrollPage";

describe("builderx", function () {
	it("scroll down builderx", () => {
		ScrollPage.open();
		ScrollPage.scrollDown();
	});
});
`;

module.exports = scrollDownJS;
