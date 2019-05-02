const geckodriver = require("../drivers/gecko");

const executor = require("./exec");
const { geckoPath, geckoHeadlessPath } = require("../helpers/path");

const args = [
	'--port=4444'
];

let gecko = {};

gecko.init = async (_mode) => {
	const _conf = (_mode === 'headless') ? geckoHeadlessPath() : geckoPath();

	geckodriver.start(args);
	
	executor
		.init(_conf)
		.then(code => geckodriver.stop());
};

module.exports = gecko;
