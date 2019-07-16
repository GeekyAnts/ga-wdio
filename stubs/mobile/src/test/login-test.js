let loginTestJs = {};

loginTestJs.path = "src/test";

loginTestJs.filename = "login-test.js";

loginTestJs.content = `
import TabPage from "../common/TabPage";
import Login from "../common/Login";

describe('Test login elements', () => {
    it('It should go to login page', () => {
        TabPage.login.click()
        Login.email.click()
        Login.email.setValue('test@webdriver.io')
        Login.password.setValue('Test1234!')
        if (driver.isKeyboardShown()) {
            driver.hideKeyboard()
        }
        Login.loginButton.click()
        Login.loginAlert.click()
    })
})`;
module.exports = loginTestJs;
