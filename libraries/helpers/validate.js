
const shutDown = (_msg) => {
	console.log("\n?".green, "[Error]:".red, `${_msg}\n`.green);
	process.exit(1);
};

const exist = (_variable, _msg) => {
	if (!_variable) {
		return shutDown(_msg);
	}

	return true;
};

module.exports = {
	exist
};