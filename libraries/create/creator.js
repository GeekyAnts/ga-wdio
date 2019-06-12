
const web = require("./web");
const api = require("./api");

module.exports = (_arch) => {
	switch (_arch) {
		case "mobile":
			// do something & return;
			break;
		case "api":
			return api;
		default:
			return web;
	}
};
