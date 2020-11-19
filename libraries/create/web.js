const {
	createFolder, createFileWithContent
} = require("../helpers/designer");

const {
	packageJson, babelConfigJS, testJS, npmRc, screenshotJS,
	browserStackConfJS, chromeHeadlessConfJS, chromeConfJS,
	geckoConfJS, geckoHeadlessConfJS, localConfJS, uploadPageJS,
	formPageJS, buttonClickJS, openPageJS, loginJS, loginPathJSON,
	scrollPageJS, scrollToElementJS, signUpJS, uploadImageJS,
	signupPathJSON, uploadPhotoJSON, scrollDownJS, scrollTillJS,
	singleTestJS, loginPageJS, signUpPageJS, logoutJS, learnDocsJS,
	logoutPageJS, learnPageJS, learnPathJSON, logoutPathJSON,
	scrollPathJSON, scrollToXpathJSON
} = require("../../stubs/web");

let web = {};

// Folders & Sub-Folders paths...
web.structure = {
	"directories": [
		"conf",
		"src"
	],
	"sub_directories": [
		"src/commons",
		"src/repo",
		"src/tests",
		"src/vendor",
		"src/xpaths"
	],
	"others": [
		"src/tests/auth",
		"src/tests/profile"
	]
};

// Create project...
web.init = async (_appName) => await createFolder(`${_appName}`);

// Generates all the required folders...
web.generateFolders = async (_appName) => {
	let promises = [];
	web.structure.directories.forEach(folder => {
		promises.push(
			createFolder(`${_appName}/${folder}`)
		);
	});

	await Promise.all(promises);

	promises = [];
	web.structure.sub_directories.forEach(subFolder => {
		promises.push(
			createFolder(`${_appName}/${subFolder}`)
		);
	});

	await Promise.all(promises);

	promises = [];
	web.structure.others.forEach(other => {
		promises.push(
			createFolder(`${_appName}/${other}`)
		);
	});

	await Promise.all(promises);
};

// Create conf file and write content...
web.generateFiles = async (_answers) => {
	let _content = '';

	// Create Conf files...	
	_content = chromeConfJS.content(_answers);
	await createFileWithContent(`./${_answers.appName}/${chromeConfJS.path}`, chromeConfJS.filename, _content);

	_content = localConfJS.content(_answers);
	await createFileWithContent(`./${_answers.appName}/${localConfJS.path}`, localConfJS.filename, _content);

	_content = geckoConfJS.content(_answers);
	await createFileWithContent(`./${_answers.appName}/${geckoConfJS.path}`, geckoConfJS.filename, _content);

	_content = browserStackConfJS.content(_answers);
	await createFileWithContent(`./${_answers.appName}/${browserStackConfJS.path}`, browserStackConfJS.filename, _content);

	_content = geckoHeadlessConfJS.content(_answers);
	await createFileWithContent(`./${_answers.appName}/${geckoHeadlessConfJS.path}`, geckoHeadlessConfJS.filename, _content);

	_content = chromeHeadlessConfJS.content(_answers);
	await createFileWithContent(`./${_answers.appName}/${chromeHeadlessConfJS.path}`, chromeHeadlessConfJS.filename, _content);

	// Create .env file...
	await createFileWithContent(`./${_answers.appName}`, ".env", "");

	// Create package.json file...
	await createFileWithContent(`./${_answers.appName}`, packageJson.filename, packageJson.content);

	// Create .npmrc file...
	await createFileWithContent(`./${_answers.appName}`, npmRc.filename, npmRc.content);

	// Create babel.config.js file...
	await createFileWithContent(`./${_answers.appName}`, babelConfigJS.filename, babelConfigJS.content);

	// Create test.js file...
	await createFileWithContent(`./${_answers.appName}`, testJS.filename, testJS.content);

	// Create commons files...
	await createFileWithContent(`./${_answers.appName}/${buttonClickJS.path}`, buttonClickJS.filename, buttonClickJS.content);
	await createFileWithContent(`./${_answers.appName}/${loginJS.path}`, loginJS.filename, loginJS.content);
	await createFileWithContent(`./${_answers.appName}/${openPageJS.path}`, openPageJS.filename, openPageJS.content);
	await createFileWithContent(`./${_answers.appName}/${screenshotJS.path}`, screenshotJS.filename, screenshotJS.content);
	await createFileWithContent(`./${_answers.appName}/${scrollPageJS.path}`, scrollPageJS.filename, scrollPageJS.content);
	await createFileWithContent(`./${_answers.appName}/${scrollToElementJS.path}`, scrollToElementJS.filename, scrollToElementJS.content);
	await createFileWithContent(`./${_answers.appName}/${signUpJS.path}`, signUpJS.filename, signUpJS.content);
	await createFileWithContent(`./${_answers.appName}/${logoutJS.path}`, logoutJS.filename, logoutJS.content);

	// Create tests files...
	await createFileWithContent(`./${_answers.appName}/${scrollDownJS.path}`, scrollDownJS.filename, scrollDownJS.content);
	await createFileWithContent(`./${_answers.appName}/${scrollTillJS.path}`, scrollTillJS.filename, scrollTillJS.content);
	await createFileWithContent(`./${_answers.appName}/${singleTestJS.path}`, singleTestJS.filename, singleTestJS.content);
	await createFileWithContent(`./${_answers.appName}/${loginPageJS.path}`, loginPageJS.filename, loginPageJS.content);
	await createFileWithContent(`./${_answers.appName}/${signUpPageJS.path}`, signUpPageJS.filename, signUpPageJS.content);
	await createFileWithContent(`./${_answers.appName}/${uploadImageJS.path}`, uploadImageJS.filename, uploadImageJS.content);
	await createFileWithContent(`./${_answers.appName}/${learnDocsJS.path}`, learnDocsJS.filename, learnDocsJS.content);
	await createFileWithContent(`./${_answers.appName}/${logoutPageJS.path}`, logoutPageJS.filename, logoutPageJS.content);

	// Create repo files...
	await createFileWithContent(`./${_answers.appName}/${uploadPageJS.path}`, uploadPageJS.filename, uploadPageJS.content);
	await createFileWithContent(`./${_answers.appName}/${formPageJS.path}`, formPageJS.filename, formPageJS.content);
	await createFileWithContent(`./${_answers.appName}/${learnPageJS.path}`, learnPageJS.filename, learnPageJS.content);

	// Create xpath files...
	await createFileWithContent(`./${_answers.appName}/${loginPathJSON.path}`, loginPathJSON.filename, loginPathJSON.content);
	await createFileWithContent(`./${_answers.appName}/${signupPathJSON.path}`, signupPathJSON.filename, signupPathJSON.content);
	await createFileWithContent(`./${_answers.appName}/${uploadPhotoJSON.path}`, uploadPhotoJSON.filename, uploadPhotoJSON.content);
	await createFileWithContent(`./${_answers.appName}/${learnPathJSON.path}`, learnPathJSON.filename, learnPathJSON.content);
	await createFileWithContent(`./${_answers.appName}/${logoutPathJSON.path}`, logoutPathJSON.filename, logoutPathJSON.content);
	await createFileWithContent(`./${_answers.appName}/${scrollPathJSON.path}`, scrollPathJSON.filename, scrollPathJSON.content);
	await createFileWithContent(`./${_answers.appName}/${scrollToXpathJSON.path}`, scrollToXpathJSON.filename, scrollToXpathJSON.content);
};

module.exports = web;
