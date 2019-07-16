let learnDocsTestJs = {};

learnDocsTestJs.path = "src/test";

learnDocsTestJs.filename = "learnDocs-test.js";

learnDocsTestJs.content = `
import LearnPage from '../common/LearnPage';
const assert = require('assert');

describe('View Documentation of Learn Builderx ', function () {
    beforeEach(() => {
        LearnPage.open();
        LearnPage.learnClick().click();
    })
    it('should view documentation of Designer', () => {
        LearnPage.designerClick().click();
        LearnPage.getTheUrl();
        const pageUrl = LearnPage.getTheUrl();
        assert(pageUrl, "https://builderx.io/learn/designers/")
    });
    it('should view documentation of Developer', () => {
        LearnPage.developerClick().click();
        LearnPage.getTheUrl();
        const pageUrl = LearnPage.getTheUrl();
        assert(pageUrl, "https://builderx.io/learn/developers/")
    })
});`;
module.exports = learnDocsTestJs