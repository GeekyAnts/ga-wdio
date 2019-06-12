const program = require("commander");
const { create } = require("../create");
const { web, api } = require("../runner");
const { makeRed } = require("../helpers/colors");

// Instance
const bootstrap = {};

// Shows the version
bootstrap.version = (_version) => {
	program
		.version(_version)
		.usage('<commands> [options]')
		.description("A Simple Tool that builds a boilerplate for you");
};

// Creates the app
bootstrap.create = () => {
	program
		.command('create')
		.description('Creates the boilerplate in the present directory')
		.on('--help', () => {
			console.log('');
			console.log('Examples:');
			console.log('  ga-wdio create');
		})
		.action(create);
};

// Runs the app
bootstrap.runner = () => {
	program
		.command('runner:web')
		.description('[For WebApp] Runs the testing scripts with the options / stacks specified')
		.option('-s, --stack <local> <browser-stack> <browser-stack-local>', 'runs your tests on the local system or browser-stack', 'local') 
		.option('-b, --browser <chrome> <firefox>', 'web browser [chrome or firefox]', 'chrome')
		.option('-m, --mode [headless]', 'sets the mode to the run web-browser, this feature is applicable only with local stack', 'head')
		.on('--help', () => {
			console.log('');
			console.log('Examples:');
			console.log('  ga-wdio runner:web # Imp Note: This command will set all the default values');
			console.log('  ga-wdio runner:web --stack=local --browser=chrome --mode=headless');
			console.log('  ga-wdio runner:web --stack=browser-stack --browser=firefox');
		})
		.action(web);
	
	program
		.command("runner:api")
		.description("[For API] Runs the testing scripts with the options specified")
		.on('--help', () => {
			console.log('');
			console.log('Examples:');
			console.log('  ga-wdio runner:api');
		})
		.action(api)
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
