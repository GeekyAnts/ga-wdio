const {
	createFolder, createFileWithContent
} = require("../helpers/designer");

const {
	packageJson, babelConfigJs,

	androidConfJs, iosConfJs, browserStackAndroidConfJs, 
	browserStackIosConfJs, browserAndroidConfJs, browserIosConfJs,

	appAlertJs, selectClassJs,

	formPageJs, loginJs, signUpJs, nativeScreenJs, tabPageJs,
	pageJs, scrollToElementJs, learnPageJs,

	changeTabTestJs, formTestJs, learnDocsTestJs, loginTestJs, 
	scrollTestJs, signUpTestJs,

	xpath, formPathJSON_aND, loginPathJSON_aND, signupPathJSON_aND, 
	tabPathJSON_aND, formPathJSON_iOS, loginPathJSON_iOS, 
	signupPathJSON_iOS, tabPathJSON_iOS, learnPathJSON
} = require("../../stubs/mobile");

let mobile = {};

// Folders & Sub-Folders paths...
mobile.structure = {
	"directories": [
		"conf",		
		"src",
		"store"
	],
	"sub_directories": [
		"src/common",
		"src/helpers",
		"src/test",
		"src/xpath"
	],
	"others": [
		"src/xpath/android",
		"src/xpath/ios",
		"src/xpath/web"
	]
};

// Create project...
mobile.init = async (_appName) => await createFolder(`${_appName}`);

// Generate all the required folders...
mobile.generateFolders = async (_appName) => {
	let promises = [];
	mobile.structure.directories.forEach(folder => {
		promises.push(
			createFolder(`${_appName}/${folder}`)
		);
	});

	await Promise.all(promises);

	promises = [];
	mobile.structure.sub_directories.forEach(subFolder => {
		promises.push(
			createFolder(`${_appName}/${subFolder}`)
		);
	});

	await Promise.all(promises);

	promises = [];
	mobile.structure.others.forEach(other => {
		promises.push(
			createFolder(`${_appName}/${other}`)
		);
	});

	await Promise.all(promises);
};

// Create conf file and write content...
mobile.generateFiles = async (_answers) => {
	let _content = '';

	// Create Conf files...	
	_content = androidConfJs.content(_answers);
	await createFileWithContent(`./${_answers.appName}/${androidConfJs.path}`, androidConfJs.filename, _content);

	_content = iosConfJs.content(_answers);
	await createFileWithContent(`./${_answers.appName}/${iosConfJs.path}`, iosConfJs.filename, _content);

	_content = browserStackAndroidConfJs.content(_answers);
	await createFileWithContent(`./${_answers.appName}/${browserStackAndroidConfJs.path}`, browserStackAndroidConfJs.filename, _content);

	_content = browserStackIosConfJs.content(_answers);
	await createFileWithContent(`./${_answers.appName}/${browserStackIosConfJs.path}`, browserStackIosConfJs.filename, _content);

	_content = browserAndroidConfJs.content(_answers);
	await createFileWithContent(`./${_answers.appName}/${browserAndroidConfJs.path}`, browserAndroidConfJs.filename, _content);

	_content = browserIosConfJs.content(_answers);
	await createFileWithContent(`./${_answers.appName}/${browserIosConfJs.path}`, browserIosConfJs.filename, _content);

	// Create src's common files...
	await createFileWithContent(`./${_answers.appName}/${formPageJs.path}`, formPageJs.filename, formPageJs.content);
	await createFileWithContent(`./${_answers.appName}/${loginJs.path}`, loginJs.filename, loginJs.content);
	await createFileWithContent(`./${_answers.appName}/${signUpJs.path}`, signUpJs.filename, signUpJs.content);
	await createFileWithContent(`./${_answers.appName}/${nativeScreenJs.path}`, nativeScreenJs.filename, nativeScreenJs.content);
	await createFileWithContent(`./${_answers.appName}/${tabPageJs.path}`, tabPageJs.filename, tabPageJs.content);
	await createFileWithContent(`./${_answers.appName}/${pageJs.path}`, pageJs.filename, pageJs.content);
	await createFileWithContent(`./${_answers.appName}/${scrollToElementJs.path}`, scrollToElementJs.filename, scrollToElementJs.content);
	await createFileWithContent(`./${_answers.appName}/${learnPageJs.path}`, learnPageJs.filename, learnPageJs.content);

	// Create src's helpers files...
	await createFileWithContent(`./${_answers.appName}/${appAlertJs.path}`, appAlertJs.filename, appAlertJs.content);
	await createFileWithContent(`./${_answers.appName}/${selectClassJs.path}`, selectClassJs.filename, selectClassJs.content);

	// Create src's test files...
	await createFileWithContent(`./${_answers.appName}/${changeTabTestJs.path}`, changeTabTestJs.filename, changeTabTestJs.content);
	await createFileWithContent(`./${_answers.appName}/${formTestJs.path}`, formTestJs.filename, formTestJs.content);
	await createFileWithContent(`./${_answers.appName}/${learnDocsTestJs.path}`, learnDocsTestJs.filename, learnDocsTestJs.content);
	await createFileWithContent(`./${_answers.appName}/${loginTestJs.path}`, loginTestJs.filename, loginTestJs.content);
	await createFileWithContent(`./${_answers.appName}/${scrollTestJs.path}`, scrollTestJs.filename, scrollTestJs.content);
	await createFileWithContent(`./${_answers.appName}/${signUpTestJs.path}`, signUpTestJs.filename, signUpTestJs.content);
	
	// Create src's xpath file...
	await createFileWithContent(`./${_answers.appName}/${xpath.path}`, xpath.filename, xpath.content);

	// Create xpath's android files..
	await createFileWithContent(`./${_answers.appName}/${formPathJSON_aND.path}`, formPathJSON_aND.filename, formPathJSON_aND.content);
	await createFileWithContent(`./${_answers.appName}/${loginPathJSON_aND.path}`, loginPathJSON_aND.filename, loginPathJSON_aND.content);
	await createFileWithContent(`./${_answers.appName}/${signupPathJSON_aND.path}`, signupPathJSON_aND.filename, signupPathJSON_aND.content);
	await createFileWithContent(`./${_answers.appName}/${tabPathJSON_aND.path}`, tabPathJSON_aND.filename, tabPathJSON_aND.content);

	// Create xpath's ios files..
	await createFileWithContent(`./${_answers.appName}/${formPathJSON_iOS.path}`, formPathJSON_iOS.filename, formPathJSON_iOS.content);
	await createFileWithContent(`./${_answers.appName}/${loginPathJSON_iOS.path}`, loginPathJSON_iOS.filename, loginPathJSON_iOS.content);
	await createFileWithContent(`./${_answers.appName}/${signupPathJSON_iOS.path}`, signupPathJSON_iOS.filename, signupPathJSON_iOS.content);
	await createFileWithContent(`./${_answers.appName}/${tabPathJSON_iOS.path}`, tabPathJSON_iOS.filename, tabPathJSON_iOS.content);
	
	// Create xpath's web files..
	await createFileWithContent(`./${_answers.appName}/${learnPathJSON.path}`, learnPathJSON.filename, learnPathJSON.content);
	
	// Create root directory files...
	await createFileWithContent(`./${_answers.appName}`, packageJson.filename, packageJson.content);
	await createFileWithContent(`./${_answers.appName}`, babelConfigJs.filename, babelConfigJs.content);
};

module.exports = mobile;
