module.exports = {
  packageJson: require("./package-json"),
  babelConfigJs: require("./babel-config"),

  // conf ...
  androidConfJs: require("./conf/android.conf"),
  iosConfJs: require("./conf/ios.conf"),
  browserStackAndroidConfJs: require("./conf/browserstack-android.conf"),
  browserStackIosConfJs: require("./conf/browserstack-ios.conf"),
  browserAndroidConfJs: require("./conf/android.browser.conf"),
  browserIosConfJs: require("./conf/ios.browser.conf"),

  // helpers...
  appAlertJs: require("./src/helpers/AppAlert"),
  selectClassJs: require("./src/helpers/SelectClass"),

  // commons...
  formPageJs: require("./src/common/FormPage"),
  loginJs: require("./src/common/Login"),
  signUpJs: require("./src/common/SignUp"),
  nativeScreenJs: require("./src/common/NativeScreen"),
  tabPageJs: require("./src/common/TabPage"),
  pageJs: require("./src/common/Page"),
  scrollToElementJs: require("./src/common/ScrollToElement.js"),
  learnPageJs: require("./src/common/LearnPage"),

  // tests...
  changeTabTestJs: require("./src/test/changeTab-test"),
  formTestJs: require("./src/test/form-test"),
  learnDocsTestJs: require("./src/test/learnDocs-test"),
  loginTestJs: require("./src/test/login-test"),
  scrollTestJs: require("./src/test/scroll-test"),
  signUpTestJs: require("./src/test/signUp-test"),

  // xpaths...
  xpath: require("./src/xpath"),

  // android xpaths...
  formPathJSON_aND: require("./src/xpath/android/formPath-json"),
  loginPathJSON_aND: require("./src/xpath/android/loginPath-json"),
  signupPathJSON_aND: require("./src/xpath/android/signupPath-json"),
  tabPathJSON_aND: require("./src/xpath/android/tabPath-json"),

  // ios xpaths...
  formPathJSON_iOS: require("./src/xpath/ios/formPath-json"),
  loginPathJSON_iOS: require("./src/xpath/ios/loginPath-json"),
  signupPathJSON_iOS: require("./src/xpath/ios/signupPath-json"),
  tabPathJSON_iOS: require("./src/xpath/ios/tabPath-json"),

  // web xpaths...
  learnPathJSON: require("./src/xpath/web/learnPath-json")
};
