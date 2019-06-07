const { get } = require("lodash");

let expected = {};

expected.init = async (_expected, _response) => {
	let _errors = [];

	if (!_response.ok || Object.keys(_expected).length === 0) {
		return {};
	}
	
	const headers = _response.headers;
	const body = await _response.json();

	// Check for Expected Headers...
	if (_expected.hasOwnProperty('headers') && Object.keys(_expected.headers) !== 0) {
		_errors.headers = [];

		for (const iterator in _expected.headers) {
			// Check if the index exist as expected
			if (! _response.headers.get(`${iterator}`)) {
				_errors.headers[`${iterator}`] = "Not available";
			}
			
			// Match the value of each index in headers
			if (_response.headers.get(`${iterator}`) !== _expected.headers[`${iterator}`]) {
				_errors.headers[`${iterator}`] = 'Receiving incorrect value as \'' + _response.headers.get(`${iterator}`) + '\'';
			}
		}
	}

	// Check for Expected Body...
	if (_expected.hasOwnProperty('body') && Object.keys(_expected.body) !== 0) {
		_errors.body = [];

		if (_expected.body && _expected.body.constructor === Array) {
			for (const iterator of _expected.body) {
				
			}
		}

		for (const iterator in body) {
			//
		}
	}

	console.log('Print:', _errors);
};	

module.exports = expected;
