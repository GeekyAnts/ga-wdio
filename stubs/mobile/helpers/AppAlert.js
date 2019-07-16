let appAlertJs = {};

appAlertJs.path = "src/helpers";

appAlertJs.filename = "AppAlert.js";

appAlertJs.content = `class AppAlert {
  static alertButton(xpath, value) {
    const buttonAlert = driver.isAndroid ? xpath.concat(\`[@text='${value.toUpperCase()}']\`) : \`~${value}\`
    $(buttonAlert).click()
  }
}

export default AppAlert;
`;

module.exports = appAlertJs;
