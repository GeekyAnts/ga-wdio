let webviewTestJs = {};

webviewTestJs.path = "src/test";

webviewTestJs.filename = "webview-test.js";

webviewTestJs.content = `
import { CONTEXT_REF } from "../helpers/WebView";
import WebviewPage from "../common/webviewPage";
import TabBar from "../common/TabbarPage";

describe("WebdriverIO and Appium, when interacting with a WebView,", () => {
  beforeEach(() => {
    // TabBar.waitForTabBarShown(true);
    TabBar.openWebView();
    // WebviewPage.waitForWebsiteLoaded();
  });

  it("should be able to open call action on the API page", () => {
    // To be able to use the site in the webview webdriver.io first needs
    // change the context from native to webview
    WebviewPage.switchToContext(CONTEXT_REF.WEBVIEW);
    // Now the site can be accessed like you would automate a normal website
    // keep in mind the responsiveness
    // Open the API docs
    $("=API").click();

    /**
     * IMPORTANT!!
     *  Because the app is not closed and opened between the 2 tests
     *  (and thus is NOT starting in the default context which is native)
     *  the context is here set to native. This is bad practice,
     *  because you should never rely on the state of a different test,
     *  but here it is excepted ;-)
     */
    WebviewPage.switchToContext(CONTEXT_REF.NATIVE);
  });

  it("should be able to switch between webview, native and webview", () => {
    // To be able to use the site in the webview webdriver.io first needs
    // change the context from native to webview
    WebviewPage.switchToContext(CONTEXT_REF.WEBVIEW);
    $("=API").click();

    const toggle = $(".navToggle");
    toggle.waitForDisplayed({ timeout: 3000 });

    // Now open the swipe screen and do some action there
    // This can only be done if webdriver.io is told to go to the native context
    WebviewPage.switchToContext(CONTEXT_REF.NATIVE);
    TabBar.openSwipe();
    // Now go back to the webview and open the call actions
    TabBar.openWebView();
    // To be able to use the site in the webview webdriver.io first needs
    // change the context from native to webview
    WebviewPage.switchToContext(CONTEXT_REF.WEBVIEW);
  });
});

`;

module.exports = webviewTestJs;
