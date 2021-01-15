let tabBarPageJs = {};

tabBarPageJs.path = "src/common";

tabBarPageJs.filename = "TabBarPage.js";

tabBarPageJs.content = `export default class TabBarPage {
    static openHome () {
        $('~Home').click();
    }

    static openWebView () {
        $('~WebView').click();
    }

    static openLogin () {
        $('~Login').click();
    }

    static openForms () {
        $('~Forms').click();
    }

    static openSwipe () {
        $('~Swipe').click();
    }

    static waitForTabBarPageShown () {
        $('~Home').waitForDisplayed({
            timeout: 20000,
        });
    }
}
`;

module.exports = tabBarPageJs;
