let signUpPathJSON = {};

signUpPathJSON.path = "src/xpaths";
signUpPathJSON.filename = 'SignUpPath.json';
signUpPathJSON.content = `{
	"seats":".seats",
    "email": "[name='email']",
    "name":"(//input[@name='name'])[2]",
    "password":"[name='password']",
    "confirmpassword":"[name='password_confirmation']",
    "address":"(//input[@type='text'])[2]",
    "city":"(//input[@type='text'])[4]",
    "cardname":"(//input[@type='text'])[7]",
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

module.exports = signUpPathJSON;
