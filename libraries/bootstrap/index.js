const program = require("commander");
const { create } = require("../create");
const doctor = require("../appium/doctor");
const { web, api, ios, android } = require("../run");
const { makeRed } = require("../helpers/colors");
const upload = require("../upload");

// Instance...
const bootstrap = {};

// Shows the version...
bootstrap.version = (_version) => {
	program
		.version(_version)
		.usage("<commands> [options]")
		.description("A Simple Tool that builds a boilerplate for you");
};

// Creates the app...
bootstrap.create = () => {
	program
		.command("create")
		.description("Creates the boilerplate in the present directory")
		.on("--help", () => {
			console.log("");
			console.log("Examples:");
			console.log("  ga-wdio create");
		})
		.action(create);
};

// Runs the app...
bootstrap.run = () => {
	program
		.command("run:web")
		.description("[For WebApp] Runs the testing scripts with the options / stacks specified")
		.option("-s, --stack <local> <browser-stack> <browser-stack-local>", "runs your tests on the local system or browser-stack", "local") 
		.option("-b, --browser <chrome> <firefox>", "web browser [chrome or firefox]", "chrome")
		.option("-m, --mode [headless]", "sets the mode to the run web-browser, this feature is applicable only with local stack", "head")
		.on("--help", () => {
			console.log("");
			console.log("Examples:");
			console.log("  ga-wdio run:web # Imp Note: This command will set all the default values");
			console.log("  ga-wdio run:web --stack=local --browser=chrome --mode=headless");
			console.log("  ga-wdio run:web --stack=browser-stack --browser=firefox");
		})
		.action(web);
	
	program
		.command("run:api")
		.description("[For API] Runs the testing API scripts in sync mode")
		.on("--help", () => {
			console.log("");
			console.log("Examples:");
			console.log("  ga-wdio run:api");
		})
		.action(api);

	program
		.command("run:ios")
		.description("[For Mobile] Runs the testing scripts on iOS platform")
		.option("-b, --browser <true>", "enables the mobile's browser testing", "false")
		.option("-s, --stack <browser-stack>", "runs your tests on environments like browser-stack or local simulator", "local")
		.on("--help", () => {
			console.log("");
			console.log("Examples:");
			console.log("  ga-wdio run:ios # Imp Note: This command will set all the default values");
			console.log("  ga-wdio run:ios --browser=true");
			console.log("  ga-wdio run:ios --stack=browser-stack");
		})
		.action(ios);
	
	program
		.command("run:android")
		.description("[For Mobile] Runs the testing scripts on Android platform")
		.option("-b, --browser <true>", "enables the mobile's browser testing", "false")
		.option("-s, --stack <browser-stack>", "runs your tests on environments like browser-stack or local simulator", "local")
		.on("--help", () => {
			console.log("");
			console.log("Examples:");
			console.log("  ga-wdio run:android # Imp Note: This command will set all the default values");
			console.log("  ga-wdio run:android --browser=true");
			console.log("  ga-wdio run:android --stack=browser-stack");
		})
		.action(android);
};

// Runs the checks...
bootstrap.check = () => {
	program
		.command("check:appium")
		.description("[For Mobile] Checks the necessary & optional dependencies for appium")
		.action(doctor);
};

// Runs the uploads...
bootstrap.upload = () => {
	program
		.command("upload:app")
		.description("Uploads IPA or APK file to browser stack & returns the app url with custom ID")
		.option("-f, --file </path/to/file>", "runs your tests on the local system or browser-stack") 
		.option("-u, --username <username>", "browser-stack username")
		.option("-p, --password <password>", "browser-stack password")
		.option("-c, --customId <MyApp>", "your custom ID for the app")
		.on("--help", () => {
			console.log("");
			console.log("Examples:");
			console.log("  ga-wdio upload:app --file=/path/to/file --username=faizahmed --password=somethingsecret --customId=MyApp");
		})
		.action(upload.app);
};

// Handles the arguements / options
bootstrap.handler = () => {
	program
		.parse(process.argv);

	if (! process.argv.slice(2).length) {
		program.outputHelp(makeRed);
	}	
};

module.exports = bootstrap;
