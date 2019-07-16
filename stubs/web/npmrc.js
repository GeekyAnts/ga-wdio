let npmRC = {};

npmRC.filename = ".npmrc";

npmRC.content = `# -----------------------------------------
#  Settings for ChromeDriver / GeckoDriver
# Note: Please do not change these values!
# -----------------------------------------
chromedriver_version=LATEST

geckodriver_version=LATEST
`;

module.exports = npmRC;