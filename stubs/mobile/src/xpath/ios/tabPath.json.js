let signupPathJSON = {};

signupPathJSON.path = "src/xpath/ios";
signupPathJSON.filename = "tabPath-json.json";
signupPathJSON.content = `
{
    "HOME": "//XCUIElementTypeOther[@name='Home']",
    "WEB_VIEW": "//XCUIElementTypeOther[@name='WebView']",
    "LOGIN": "//XCUIElementTypeOther[@name='Login']",
    "FORMS": "//XCUIElementTypeOther[@name='Forms']",
    "SWIPE": "//XCUIElementTypeOther[@name='Swipe']"
}`;
module.exports = tabPathJSON;
