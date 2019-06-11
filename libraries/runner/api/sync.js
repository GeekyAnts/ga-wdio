const terminal = require("../../helpers/terminal");
const request = require("../../helpers/http/request");
const expected = require("../../helpers/http/expected");
const { buildRequest } = require("../../helpers/http/api");

let sync = {};

sync.start = async (_app) => {
	terminal.centeredHeading("GA-WDIO Test Report".bold);

	for (const _api of _app.apis) {
		const options = await buildRequest(_app.domains, _api);
		
		try {
			const response = await request(options);
			const _expected = await expected.init(_api.expected, response);

			terminal.heading(`API\t`.yellow.bold + `${_api.name || 'No Name'}` + ` (${options.method}: ${options.uri})`.white, true);
			terminal.heading(`Status`.bold.cyan, true);

			terminal.columns('Code'.boldWhite, (response.status >= 400) ? `${response.status}`.red : `${response.status}`.green);
			terminal.columns('Message'.boldWhite, (response.status >= 400) ? `${response.statusText}`.red : `${response.statusText}`.green);

			if (_expected["headers"] && _expected["headers"].length > 0) {
				terminal.heading(`Headers`.bold.cyan, true);

				_expected["headers"].map(_value => terminal.columns(`${_value['key']}`.boldWhite, `${_value['value']}`.red));
			}

			if (_expected["body"] && _expected["body"].length > 0) {
				terminal.heading(`Body`.bold.cyan, true);

				_expected["body"].map(_value => terminal.columns(`${_value['key']}`.boldWhite, `${_value['value']}`.red));
			}

			terminal.drawLine();

		} catch (e) {
			console.log(`>> ${_api.name} [Response :: Error]:`.red, e.message);
		}
	}
};

module.exports = sync;
