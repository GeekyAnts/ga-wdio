let signupPathJSON = {};

signupPathJSON.path = "src/xpath/ios";
signupPathJSON.filename = "signupPath-json.json";
signupPathJSON.content = `

{
    "LOGIN": "//XCUIElementTypeOther[@name='Login']",
    "SIGNUP_FIELD": "//XCUIElementTypeStaticText[@name='Sign up']",
    "EMAIL": "//XCUIElementTypeTextField[@name='input-email']",
    "PASSWORD": "//XCUIElementTypeSecureTextField[@name='input-password']",
    "CONFIRM_PASSWORD": "//XCUIElementTypeSecureTextField[@name='input-repeat-password']",
    "SIGNUP_BUTTON": "//XCUIElementTypeStaticText[@name='SIGN UP']",
    "FAILURE_ALERT": "//XCUIElementTypeAlert",
    "TRY_AGAIN": "//XCUIElementTypeAlert",
    "FAILURE_TEXT": "//XCUIElementTypeAlert",
    "VALIDATE_EMAIL": "//XCUIElementTypeStaticText[@name='Please enter a valid email address']",
    "VALIDATE_PASSWORD": "//XCUIElementTypeStaticText[@name='Please enter at least 8 characters']",
    "VALIDATE_CONFIRM_PASSWORD": "//XCUIElementTypeStaticText[@name='Please enter the same password']"
}`;
module.exports = signupPathJSON;
