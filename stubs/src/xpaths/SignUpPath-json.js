let uploadPhotoJSON = {};

uploadPhotoJSON.path = "src/xpaths";
uploadPhotoJSON.filename = 'SignUpPath.json';
uploadPhotoJSON.content = `{
	"url": "https://builderx.io/register",
	"seats":".seats",
	"email": "[name='email']",
	"name":"/html[1]/body[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/input[1]",
	"password":"[name='password']",
	"confirmpassword":"[name='password_confirmation']",
	"address":"/html[1]/body[1]/div[2]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/input[1]",
	"city":"/html[1]/body[1]/div[2]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[2]/form[1]/div[3]/div[1]/input[1]",
	"cardname":"/html[1]/body[1]/div[2]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[2]/form[1]/div[6]/div[1]/input[1]",
	"cardnumber":"//input[@name='number']",
	"securitycode":"//input[@name='cvc']",
	"expirationmonth":"//input[@placeholder='MM']",
	"expirationyear":"//input[@placeholder='YYYY']",
	"accept":"//input[@type='checkbox']",
	"buy":"//span[contains(text(),'Buy Now')]",
	"country":" //select[@class='form-control']",
	"state":"//input[@placeholder='State']",
	"postalcode":"//input[@placeholder='Postal Code']",
	"confirm":"//a[@class='eupopup-closebutton btn btn-custom']"
}`;

module.exports = uploadPhotoJSON;
