let swipeTestJs = {};

swipeTestJs.path = "src/test";

swipeTestJs.filename = "swipe-test.js";

swipeTestJs.content = `
import TabBarPage from "../common/TabbarPage";
import SwipePage from "../common/SwipePage";
describe("WebdriverIO and Appium", () => {
  it("go to carousel page and swipe", () => {
    TabBarPage.openSwipe();

    SwipePage.swipeLeft();
    SwipePage.swipeRight();
  });
});
`;

module.exports = swipeTestJs;
