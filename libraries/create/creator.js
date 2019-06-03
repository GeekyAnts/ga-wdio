
const web = require("./web");

module.exports = (_arch) => {
	switch (_arch) {
		case "mobile":
			// do something & return;
			break;
		case "api":
			// do something & return;
			break;
		default:
			return web;
	}
}
