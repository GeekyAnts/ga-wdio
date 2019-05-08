let learnPathJSON = {};

learnPathJSON.path = "src/xpaths";
learnPathJSON.filename = 'LearnPath.json';
learnPathJSON.content = `{
    "learnLink": "//div[contains(text(),'Learn')]",
    "designer": "//a[contains(text(),'Designer')]",
    "developer": "//a[contains(text(),'Developer')]"
}`;

module.exports = learnPathJSON;