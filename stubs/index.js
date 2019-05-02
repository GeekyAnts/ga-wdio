module.exports = {
	// misc...
	packageJson: require("./package-json"),
	npmRc: require("./npmrc"),
	babelConfigJS: require("./babel-config"),
	testJS: require("./test"),

	// conf...
	localConfJS: require("./conf/local.conf"),
	geckoConfJS: require("./conf/gecko.conf"),
	chromeConfJS: require("./conf/chrome.conf"),
	browserStackConfJS: require("./conf/browser-stack.conf"),
	geckoHeadlessConfJS: require("./conf/gecko-headless.conf"),
	chromeHeadlessConfJS: require("./conf/chrome-headless.conf"),
	
	// commons...
	buttonClickJS: require("./src/commons/ButtonClick"),
	loginJS: require("./src/commons/Login"),
	openPageJS: require("./src/commons/OpenPage"),
	screenshotJS: require("./src/commons/ScreenShot"),
	scrollPageJS: require("./src/commons/ScrollPage"),
	scrollToElementJS: require("./src/commons/ScrollToElement"),
	signUpJS: require("./src/commons/SignUp"),

	// tests...
	scrollDownJS: require("./src/tests/ScrollDown"),
	scrollTillJS: require("./src/tests/ScrollTill"),
	singleTestJS: require("./src/tests/SingleTest"),
	loginPageJS: require("./src/tests/auth/LoginPage"),
	signUpPageJS: require("./src/tests/auth/SignUpPage"),
	uploadImageJS: require("./src/tests/profile/UploadImage"),

	// repos...
	uploadPageJS: require("./src/repo/FormPage"),
	formPageJS: require("./src/repo/UploadPage"),

	// xpaths..
	loginPathJSON: require("./src/xpaths/LoginPath-json"),
	signupPathJSON: require("./src/xpaths/SignUpPath-json"),
	uploadPhotoJSON: require("./src/xpaths/UploadPhoto-json"),
};
