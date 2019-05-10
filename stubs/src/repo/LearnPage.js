let learnPageJS = {};

learnPageJS.path = "src/repo";
learnPageJS.filename = 'LearnPage.js';
learnPageJS.content = `import OpenPage from '../commons/OpenPage';

class LearnPage extends OpenPage{
	open(){
		super.open('/')
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

module.exports = learnPageJS;
