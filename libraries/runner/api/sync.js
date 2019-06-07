const terminal = require("../../helpers/terminal");
const request = require("../../helpers/http/request");
const expected = require("../../helpers/http/expected");
const { buildRequest } = require("../../helpers/http/api");

let sync = {};

sync.start = async (_app) => {
	terminal.heading("API Tests Report");
	for (const _api of _app.apis) {
		const options = await buildRequest(_app.domains, _api);
		
		try {
			const response = await request(options);
			// console.log(`>> ${_api.name} [Response :: Success]:`.green, response);

			expected.init(_api.expected, response);
			
		} catch (e) {
			console.log(`>> ${_api.name} [Response :: Error]:`.red, e.message);
		}
	}
};

module.exports = sync;
