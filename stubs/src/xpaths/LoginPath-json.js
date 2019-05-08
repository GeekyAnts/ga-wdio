let loginPathJSON = {};

loginPathJSON.path = "src/xpaths";
loginPathJSON.filename = 'LoginPath.json';
loginPathJSON.content = `{
	"email": "[name='email']",
	"password": "[name='password']",
	"submit": "//button[@type='submit']",
	"checkOutput": "//div[contains(text(),'Something went wrong!')]"
}`;

module.exports = loginPathJSON;
