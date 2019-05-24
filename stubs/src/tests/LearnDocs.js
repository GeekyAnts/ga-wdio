let learnDocsJS = {};

learnDocsJS.path = "src/tests";
learnDocsJS.filename = 'LearnDocs.js';
learnDocsJS.content = `import Learnpage from "../repo/LearnPage";
const assert = require("assert");

describe("View Documentation of Learn Builderx ", function () {
	beforeEach(() => {
		Learnpage.open();
		Learnpage.learnClick().click();
	});

	it("should view documentation of Designer", () => {
		Learnpage.designerClick().click();
		Learnpage.getTheUrl();
		const pageUrl = Learnpage.getTheUrl();
		const actualUrl="https://builderx.io/learn/designers/";
		assert(pageUrl, actualUrl)
	});

	it("should view documentation of Developer", () => {
		Learnpage.developerClick().click();
		Learnpage.getTheUrl();
		const pageUrl = Learnpage.getTheUrl();
		const actualUrl="https://builderx.io/learn/developers/";
		assert(pageUrl, actualUrl)
	});
});`;

module.exports = learnDocsJS;
