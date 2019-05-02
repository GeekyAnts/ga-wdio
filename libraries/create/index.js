// Importing libraries...
const colors = require("colors");
const inquirer = require("inquirer");

const {
	init, generateFolders, generateFiles
} = require("./creator");

const { perform: runNpmInstall } = require("../install");

// Load all the necessary questions...
const {
	stack, browserStackUser, browserStackKey, osVersion, 
	osName, logLevel, screenshotPath, baseUrl, 
	waitTimeout, retryCount, appName
} = require("../../questions");

// Define custom theme...
colors.setTheme({
	boldWhite: ['white', 'bold']
});

const create = async (options, cmd) => {
	console.log('--------------------------------------------------------------------'.boldWhite);

	// Start the CLI communication...
	inquirer
		.prompt([
			appName, stack, browserStackUser, browserStackKey, osName, 
			osVersion, logLevel, baseUrl, waitTimeout, retryCount
		])
		.then(async answers => {
			console.log('--------------------------------------------------------------------'.boldWhite);
			console.log("\n?".green, "Please wait...".yellow);
			console.log('--------------------------------------------------------------------'.boldWhite);

			console.log("?".green, `Creating your`.boldWhite, `${answers.appName}`.cyan, 'directory...'.boldWhite);
			await init(answers.appName);

			console.log("?".green, `Adding our directories into`.boldWhite, `${answers.appName}`.cyan, `project...`.boldWhite);
			await generateFolders(answers.appName);

			console.log("?".green, `Adding files into those directories of`.boldWhite, `${answers.appName}`.cyan, `project...`.boldWhite);
			await generateFiles(answers);

			console.log("?".green, `Installing NPM dependencies to`.boldWhite, `${answers.appName}`.cyan, `directory...`.boldWhite);
			console.log('--------------------------------------------------------------------'.boldWhite);
			await runNpmInstall(answers.appName);
		});
};

module.exports = {
	create
};
