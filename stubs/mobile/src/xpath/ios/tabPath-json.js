let tabPathJSON = {};

tabPathJSON.path = "src/xpath/ios";

tabPathJSON.filename = "tabPath.json";

tabPathJSON.content = `{
	"HOME": "//XCUIElementTypeOther[@name='Home']",
	"WEB_VIEW": "//XCUIElementTypeOther[@name='WebView']",
	"LOGIN": "//XCUIElementTypeOther[@name='Login']",
	"FORMS": "//XCUIElementTypeOther[@name='Forms']",
	"SWIPE": "//XCUIElementTypeOther[@name='Swipe']"
}`;

module.exports = tabPathJSON;
