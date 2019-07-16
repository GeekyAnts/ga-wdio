let learnPageJs = {};

learnPageJs.path = "src/commons";

learnPageJs.filename = "LearnPage.js";

learnPageJs.content =
	`
 import Page from "./page";
 const learnAction=require('../xpath/WEB/learnPath.json');
 class LearnPage extends Page{
    open(){
        super.open('https://builderx.io/')
    }
    learnClick(){
        return $(learnAction.learnLink)
    }
    designerClick(){
        return $(learnAction.designer)
    }
    developerClick(){
        return $(learnAction.developer)
    }
    getTheUrl(){
        return browser.getUrl()
    }

}
export default new LearnPage();`;
module.exports = learnPageJs