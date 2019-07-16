let signUpPageJS = {};

signUpPageJS.path = "src/tests/auth";
signUpPageJS.filename = "SignUpPage.js";
signUpPageJS.content = `import SignUp from "../../commons/SignUp";
import assert from "assert";

describe("Do Signup in builderx page", () => {
	beforeEach(() => {
		SignUp.open();
	});

	it("should not register to builderx ", () => {
		const nameValue = "sss dddd";
		const emailValue = "sss@gmail.com";
		const passwordValue = "textevdtve";
		const addressValue = "sss dddd";
		const cityValue = "sss dddd";
		const stateValue = "sss dddd";
		const postalValue = "sss dddd";
		const cardValue = "textevdtve";
		const cardNoValue = "32156632234";
		const secValue = "444";
		const expMonthValue = "01";
		const expYearValue = "2021";
		const wrongMsg = "Your card number is incorrect."
		
		SignUp.confirm().doubleClick();
		SignUp.name().scrollIntoView();
		SignUp.name().setValue(nameValue);
		SignUp.email().setValue(emailValue);
		SignUp.password().click();
		SignUp.password().setValue(passwordValue);
		SignUp.confirmPassword().setValue(passwordValue);
		SignUp.address().setValue(addressValue);
		SignUp.address().scrollIntoView();
		SignUp.city().setValue(cityValue);
		SignUp.state().setValue(stateValue);
		SignUp.postalCode().setValue(postalValue);
		SignUp.cardName().setValue(cardValue);
		SignUp.cardNumber().setValue(cardNoValue);
		SignUp.securityCode().setValue(secValue);
		SignUp.expirationMonth().setValue(expMonthValue);
		SignUp.expirationYear().setValue(expYearValue);
		SignUp.accept().scrollIntoView();
		SignUp.accept().click();

		SignUp.buy().click();
		const expWrongMsg = SignUp.wrongCard().getText();
		assert(expWrongMsg, wrongMsg);
	});
});
`;

module.exports = signUpPageJS;
