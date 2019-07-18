
const web = require("./web");
const api = require("./api");
const mobile = require("./mobile");

module.exports = (_arch) => {
	switch (_arch) {
		case "mobile":
			return mobile;
		case "api":
			return api;
		default:
			return web;
	}
};
