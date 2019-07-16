module.exports = {
	packageJson: require("./package-json"),
	babelConfigJs: require("./babel-config"),
	testJs: require("./test"),

	//conf ...
	androidConfJs: require("./conf/android.conf"),
	iosConfJs: require("./conf/ios.conf"),
	browserStackAndroidConfJs: require("./conf/browserstack-android.conf"),
	browserStackIosConfJs: require("./conf/browserstack-ios.conf"),
	browserAndroidConfJs: require("./conf/android.browser.conf"),
	browserIosConfJs: require("./conf/ios.browser.conf"),

	//helpers...
	appAlertJs: require("./helpers/AppAlert"),
	selectClassJs: require("./helpers/SelectClass"),

	//commons...
	formPageJs: require("./src/common/FormPage"),
	loginJs: require("./src/common/Login"),
	signUpJs: require("./src/common/SignUp"),
	nativeScreenJs: require("./src/common/NativeScreen"),
	tabPageJs: require("./src/common/TabPage"),
	pageJs: require("./src/common/Page"),
	scrollToElementJs: require("./src/common/ScrollToElement.js"),
	learnPageJs: require("./src/common/LearnPage"),

	//tests...
	changeTabTestJs: require("./src/test/changeTab-test"),
	formTestJs: require("./src/test/form-test"),
	learnDocsTestJs: require("./src/test/learnDocs-test"),
	loginTestJs: require("./src/test/login-test"),
	scrollTestJs: require("./src/test/scroll-test"),
	signUpTestJs: require("./src/test/signUp-test"),

	//xpaths...

	//babel-config...
	babelConfigJS: require("./babel-config"),

	//package-json...
	packageJson: require("./package-json"),


}