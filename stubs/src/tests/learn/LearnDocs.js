import Learnpage from '../../repo/LearnPage';
const assert = require('assert');

describe('View Documentation of Learn Builderx ', function () {
    beforeEach(() => {
        Learnpage.open();
        Learnpage.learnClick().click();
    })
    it('should view documentation of Designer', () => {
        Learnpage.designerClick().click();
        Learnpage.getTheUrl();
        const pageUrl = Learnpage.getTheUrl();
        assert(pageUrl, "https://builderx.io/learn/designers/")
    });
    it('should view documentation of Developer', () => {
        Learnpage.developerClick().click();
        Learnpage.getTheUrl();
        const pageUrl = Learnpage.getTheUrl();
        assert(pageUrl, "https://builderx.io/learn/developers/")
    })
});