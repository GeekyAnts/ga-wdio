let logoutPathJSON = {};

logoutPathJSON.path = "src/xpaths";
logoutPathJSON.filename = "LogoutPath.json";
logoutPathJSON.content = `{
	"settings": "[href='/settings']",
	"logoutClick": "//a[contains(text(),'Logout')]"
}`;

module.exports = logoutPathJSON;
