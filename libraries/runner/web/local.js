const chrome = require("./chrome");
const gecko = require("./gecko");

const local = async (browser, mode) => {
	switch (browser) {
		case 'chrome':
			chrome.init(mode);
			break;
		case 'firefox':
			gecko.init(mode);
			break;
	}
};

module.exports = {
	local
};
