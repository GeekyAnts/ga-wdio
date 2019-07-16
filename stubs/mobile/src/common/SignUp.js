let signUpJs = {};

signUpJs.path = "src/common";

signUpJs.filename = "SignUp.js";

signUpJs.content = `

import AppAlert from '../../helpers/AppAlert.js';

const signupXpath=require('../xpath/ios/signupPath.json')
class SignUp {
    get signupField() {
        return $(signupXpath.SIGNUP_FIELD)
    }
    get email() {
        return $(signupXpath.EMAIL)
    }
    get password() {
        return $(signupXpath.PASSWORD)
    }
    get confirmPassword() {
        return $(signupXpath.CONFIRM_PASSWORD)
    }
    get signupButton() {
        return $(signupXpath.SIGNUP_BUTTON)
    }
    get failureAlert() {
        return $(signupXpath.FAILURE_ALERT)
    }
     tryAgainButton(value) {
        return AppAlert.alertButton(signupXpath.TRY_AGAIN, value)
    }
    get failureText() {
        return $(signupXpath.FAILURE_TEXT)
    }
    get validEmail() {
        return $(signupXpath.VALIDATE_EMAIL)
    }
    get validPassword() {
        return $(signupXpath.VALIDATE_PASSWORD)
    }
    get vaildConfirmPassword() {
        return $(signupXpath.VALIDATE_CONFIRM_PASSWORD)
    }

}

export default new SignUp()`;
module.exports = signUpJs;
