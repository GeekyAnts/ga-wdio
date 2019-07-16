let loginPathJSON = {};

loginPathJSON.path = "src/xpath/android";
loginPathJSON.filename = 'loginPath-json.json';
loginPathJSON.content = `
{
    "LOGIN": "//android.view.ViewGroup[@content-desc='Login']/android.widget.TextView",
    "EMAIL": "//android.widget.EditText[@content-desc='input-email']",
    "PASSWORD": "//android.widget.EditText[@content-desc='input-password']",
    "BUTTON": "//android.view.ViewGroup[@content-desc='button-LOGIN']/android.view.ViewGroup",
    "ALERT_OK": "//android.widget.Button[@text='OK']"
}`;
module.exports = loginPathJSON