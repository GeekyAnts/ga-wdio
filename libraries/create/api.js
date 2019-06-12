const {
	createFolder, createFileWithContent
} = require("../helpers/designer");

const {
	apiJS, constantsJS, storeJS,
	employeeIndexJS, employeeListJS, 
	employeeSingleJS
} = require("../../stubs/api");

let api = {};

// Folders & Sub-Folders paths...
api.structure = {
	"directories": [
		"src"
	],
	"sub_directories": [
		"src/constants",
		"src/containers",
		"src/libraries"
	],
	"others": [
		"src/containers/employee"
	]
};

// Create project...
api.init = async (_appName) => await createFolder(`${_appName}`);

// Generates all the required folders...
api.generateFolders = async (_appName) => {
	let promises = [];
	api.structure.directories.forEach(folder => {
		promises.push(
			createFolder(`${_appName}/${folder}`)
		);
	});

	await Promise.all(promises);

	promises = [];
	api.structure.sub_directories.forEach(subFolder => {
		promises.push(
			createFolder(`${_appName}/${subFolder}`)
		);
	});

	await Promise.all(promises);

	promises = [];
	api.structure.others.forEach(subFolder => {
		promises.push(
			createFolder(`${_appName}/${subFolder}`)
		);
	});

	await Promise.all(promises);
};

// Create conf file and write content...
api.generateFiles = async (_answers) => {
	
	let content = constantsJS.content(_answers);
	await createFileWithContent(`./${_answers.appName}/${constantsJS.path}`, constantsJS.filename, content);
	
	await createFileWithContent(`./${_answers.appName}/${apiJS.path}`, apiJS.filename, apiJS.content);
	await createFileWithContent(`./${_answers.appName}/${storeJS.path}`, storeJS.filename, storeJS.content);
	
	await createFileWithContent(`./${_answers.appName}/${employeeIndexJS.path}`, employeeIndexJS.filename, employeeIndexJS.content);
	await createFileWithContent(`./${_answers.appName}/${employeeListJS.path}`, employeeListJS.filename, employeeListJS.content);
	await createFileWithContent(`./${_answers.appName}/${employeeSingleJS.path}`, employeeSingleJS.filename, employeeSingleJS.content);
};

module.exports = api;
