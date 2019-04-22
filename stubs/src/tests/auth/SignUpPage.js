let signUpPageJS = {};

signUpPageJS.path = "src/tests/auth";
signUpPageJS.filename = 'SignUpPage.js';
signUpPageJS.content = `import SignUp from "../../commons/SignUp";

describe("Do login in builderx page", function () {
	beforeEach(() => {
		SignUp.open();
	});

	it("should register to builderx page", () => {
		SignUp.confirm().doubleClick();
		SignUp.name().scrollIntoView();
		SignUp.name().setValue("sss dddd");
		SignUp.email().setValue("sss@gmail.com");
		SignUp.password().click();
		SignUp.password().setValue("textevdtve");
		SignUp.confirmPassword().setValue("textevdtve");
		SignUp.address().setValue("textevdtve");
		SignUp.address().scrollIntoView();
		SignUp.city().setValue("textevdtve");
		SignUp.state().setValue("textevdtve");
		SignUp.postalCode().setValue("textevdtve");
		SignUp.cardName().setValue("textevdtve");
		SignUp.cardNumber().setValue("32156632234");
		SignUp.securityCode().setValue("444");
		SignUp.expirationMonth().setValue("01");
		SignUp.expirationYear().setValue("2021");
		
		SignUp.accept().scrollIntoView();
		SignUp.accept().click();
		SignUp.buy().click();
	});
});`;

module.exports = signUpPageJS;
