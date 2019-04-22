let scrollTillJS = {};

scrollTillJS.path = "src/tests";
scrollTillJS.filename = 'ScrollTill.js';
scrollTillJS.content = `import ScrollToElement from "../commons/ScrollToElement";

describe('builderx', function () {
	it('scroll to flutter  ', () => {
		ScrollToElement.open();
		ScrollToElement.scrollUntilFound().scrollIntoView();
	});
});`;

module.exports = scrollTillJS;