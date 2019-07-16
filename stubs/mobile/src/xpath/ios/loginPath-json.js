let loginPathJSON = {};

loginPathJSON.path = "src/xpath/ios";
loginPathJSON.filename = "loginPath-json.json";
loginPathJSON.content = `
{
    "LOGIN": "//XCUIElementTypeOther[@name='Login']",
    "EMAIL": "//XCUIElementTypeTextField[@name='input-email']",
    "PASSWORD": "//XCUIElementTypeSecureTextField[@name='input-password']",
    "BUTTON": "//XCUIElementTypeOther[@name='LOGIN']",
    "ALERT_OK": "//XCUIElementTypeStaticText[@name='LOGIN']"
}`;
module.exports = loginPathJSON;
