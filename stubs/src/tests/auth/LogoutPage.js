let logoutPageJS = {};

logoutPageJS.path = "src/tests/auth";
logoutPageJS.filename = 'LogoutPage.js';
logoutPageJS.content = `import Login from "../../commons/Login";
import Logout from "../../commons/Logout";


describe('Logout the page', function () {
    before(() => {
        Login.login()
    })
    it('should redirect to home page when logged out', () => {
        Logout.settings().click();
        Logout.clickLogout().click();
    })
});`;

module.exports = logoutPageJS;