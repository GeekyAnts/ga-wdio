let loginPathJSON = {};

loginPathJSON.path = "src/xpaths";
loginPathJSON.filename = 'LoginPath.json';
loginPathJSON.content = `{
	"url": "https://builderx.io/login",
	"email": "[name='email']",
	"password": "[name='password']",
	"submit": "//button[@type='submit']",
	"checkOutput": "//div[contains(text(),'Something went wrong!')]"
}`;

module.exports = loginPathJSON;
