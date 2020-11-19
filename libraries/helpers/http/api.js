const { shutDown } = require("../path");
const { get, includes, isEmpty } = require("lodash");
const { interpolate } = require("../interpolate");

let helpers = {};

helpers.buildRequest = async (_domains, _api) => {
	let _uri = get(_api, "uri", undefined);
	if (_uri) _uri = _uri.replace(/^\/|\/$/g, '');

	if (_api.domain !== undefined && _domains[_api.domain] === undefined) {
		shutDown(`Domain index provided '${_api.domain}' does not exist in App's domains list!`);
	}

	const _domain = _domains[_api.domain || 'default'];
	let _headers = get(_api, "headers", {});
	const _method = get(_api, "method", "GET");
	const _timeout = get(_api, "timeout", 10 * 1000);

	if (!_uri) {
		shutDown("URI index is missing");
	}

	let _data = get(
		_api,
		includes(["POST", "PUT", "PATCH"], _method) ? "body" : "query",
		{}
	);

	// Converting Body Object to String for data interpolation
	if (!isEmpty(_data)) {
		_data = JSON.stringify(_data);
		_data = interpolate(_data, global.store);
		_data = JSON.parse(_data);
	}

	// Converting Headers Object to String for data interpolation
	if (!isEmpty(_headers)) {
		_headers = JSON.stringify(_headers);
		_headers = interpolate(_headers, global.store);
		_headers = JSON.parse(_headers);
	}

	return {
		method: interpolate(_method, global.store),
		uri: interpolate(`${_domain}/${_uri}`, global.store),
		data: _data,
		headers: _headers,
		timeout: _timeout
	};
};

module.exports = helpers;
