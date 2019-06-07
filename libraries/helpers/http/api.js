const { get, includes } = require("lodash");
const { shutDown } = require("../path");

let helpers = {};

helpers.buildRequest = async (_domains, _api) => {
	const _uri = get(_api, "uri", undefined).replace(/^\/|\/$/g, '');
	const _domain = get(_api, "domain", _domains.default).replace(/^\/|\/$/g, '');

	const _headers = get(_api, "headers", {});
	const _method = get(_api, "method", "GET");
	const _timeout = get(_api, "timeout", 10 * 1000);

	if (! _uri) {
		shutDown("URI index is missing");
	}

	const _data = get(
		_api, 
		includes(_method, ["POST", "PUT", "PATCH"]) ? "data" : "query", 
		{}
	);

	return {
		method: _method, 
		uri: `${_domain}/${_uri}`, 
		data: _data,
		headers: _headers,
		timeout: _timeout
	};
};

module.exports = helpers;
