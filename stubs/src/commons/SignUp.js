let SignUpJS = {};

SignUpJS.path = "src/commons";

SignUpJS.filename = "SignUp.js";

SignUpJS.content = `import OpenPage from "../commons/OpenPage";
import signupXpath from "../xpaths/SignUpPath.json";

class Signup extends OpenPage {
	open () {
		super.open(signupXpath.url);
	}
	name () {
		return $(signupXpath.name);
	}
	email () {
		return $(signupXpath.email);
	}
	password () {
		return $(signupXpath.password);
	}
	seats () {
		return $(signupXpath.seats)
	}
	confirmPassword () {
		return $(signupXpath.confirmpassword);
	}
	address () {
		return $(signupXpath.address);
	}
	city () {
		return $(signupXpath.city);
	}
	cardName () {
		return $(signupXpath.cardname);
	}
	cardNumber () {
		return $(signupXpath.cardnumber);
	}
	securityCode () {
		return $(signupXpath.securitycode);
	}
	expirationMonth () {
		return $(signupXpath.expirationmonth);
	}
	expirationYear () {
		return $(signupXpath.expirationyear);
	}
	accept () {
		return $(signupXpath.accept);
	}
	confirm () {
		return $(signupXpath.confirm);
	}
	buy () {
		return $(signupXpath.buy);
	}
	country () {
		return $(signupXpath.country);
	}
	state () {
		return $(signupXpath.state);
	}
	postalCode () {
		return $(signupXpath.postalcode);
	}
}

export default new Signup();`;

module.exports = SignUpJS;
