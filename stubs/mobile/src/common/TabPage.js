let tabPageJs = {};

tabPageJs.path = "src/common";

tabPageJs.filename = "TabPage.js";

tabPageJs.content = `

const tabXpath = require('../xpath/ios/tabPath.json')

class TabPage {
    get home() {
        return $(tabXpath.HOME)
    }
    get webView() {
        return $(tabXpath.WEB_VIEW)
    }
    get login() {
        return $(tabXpath.LOGIN)
    }
    get forms() {
        return $(tabXpath.FORMS)
    }
    get swipe() {
        return $(tabXpath.SWIPE)
    }
}
export default new TabPage()`;
module.exports = tabPageJs;
