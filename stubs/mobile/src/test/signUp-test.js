let signUpTestJs = {};

signUpTestJs.path = "src/test";

signUpTestJs.filename = "signUp-test.js";

signUpTestJs.content = `

import SignUp from "../common/SignUp"
import TabPage from "../common/TabPage";
const expect = require('chai').expect
describe('SignUp test', function () {
    beforeEach(() => {
        TabPage.login.click()
        SignUp.signupField.click()
    })
    it('should show alert and get text of fields which are empty', function () {
        const failureText = 'Failure'
        const validateEmailText = 'Please enter a valid email address'
        const validatePasswordText = 'Please enter at least 8 characters'
        const validateconfPassText = 'Please enter the same password'
        SignUp.email.setValue('')
        SignUp.password.setValue('')
        SignUp.confirmPassword.setValue('')
        if (driver.isKeyboardShown()) {
            driver.hideKeyboard()
        }
        SignUp.signupButton.click()
        const failureValue = SignUp.failureAlert.getText()
        SignUp.tryAgainButton('Try again')
        const emailValidate = SignUp.validEmail.getText()
        const passwordValidate = SignUp.validPassword.getText()
        const confPasswordValidate = SignUp.vaildConfirmPassword.getText()
        expect(failureValue).to.equal(failureText)
        expect(emailValidate).to.equal(validateEmailText)
        expect(passwordValidate).to.equal(validatePasswordText)
        expect(confPasswordValidate).to.equal(validateconfPassText)
    })
    it('should show alert and get validation message when confirm password is not entered', function () {
        const failureText = 'Failure'
        const validateconfPassText = 'Please enter the same password'
        SignUp.email.setValue('test@webdriver.io')
        SignUp.password.setValue('Test1234!')
        SignUp.confirmPassword.setValue('')
        if (driver.isKeyboardShown()) {
            driver.hideKeyboard()
        }
        SignUp.signupButton.click()
        const failureValue = SignUp.failureAlert.getText()
        SignUp.tryAgainButton('Try again')
        const confPasswordValidate = SignUp.vaildConfirmPassword.getText()
        expect(failureValue).to.equal(failureText)
        expect(confPasswordValidate).to.equal(validateconfPassText)
    })
})`;
module.exports = signUpTestJs