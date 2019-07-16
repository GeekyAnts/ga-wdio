let signupPathJSON = {};

signupPathJSON.path = "src/xpath/android";

signupPathJSON.filename = "signupPath.json";

signupPathJSON.content = `{
	"LOGIN": "//android.view.ViewGroup[@content-desc='Login']/android.widget.TextView",
	"SIGNUP_FIELD": "//android.widget.TextView[@text='Sign up']",
	"EMAIL": "//android.widget.EditText[@content-desc='input-email']",
	"PASSWORD": "//android.widget.EditText[@content-desc='input-password']",
	"CONFIRM_PASSWORD": "//android.widget.EditText[@text='Confirm password']",
	"SIGNUP_BUTTON": "//android.widget.TextView[@text='SIGN UP']",
	"FAILURE_ALERT": "//android.widget.TextView[@text='Failure']",
	"TRY_AGAIN": "//android.widget.Button[@text='TRY AGAIN']",
	"FAILURE_TEXT": "//android.widget.TextView[@text='Some fields are not valid!']",
	"VALIDATE_EMAIL": "//android.widget.TextView[@text='Please enter a valid email address']",
	"VALIDATE_PASSWORD": "//android.widget.TextView[@text='Please enter at least 8 characters']",
	"VALIDATE_CONFIRM_PASSWORD": "//android.widget.TextView[@text='Please enter the same password']"
}`;

module.exports = signupPathJSON;
