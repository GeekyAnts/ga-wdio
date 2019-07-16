let tabPathJSON = {};

tabPathJSON.path = "src/xpath/android";

tabPathJSON.filename = "tabPath.json";

tabPathJSON.content = `{
	"HOME": "//android.view.ViewGroup[@content-desc='Home']/android.widget.TextView",
	"WEB_VIEW": "//android.view.ViewGroup[@content-desc='WebView']/android.widget.TextView",
	"LOGIN": "//android.view.ViewGroup[@content-desc='Login']/android.widget.TextView",
	"FORMS": "//android.view.ViewGroup[@content-desc='Forms']/android.widget.TextView",
	"SWIPE": "//android.view.ViewGroup[@content-desc='Swipe']/android.widget.TextView"
}`;

module.exports = tabPathJSON;
