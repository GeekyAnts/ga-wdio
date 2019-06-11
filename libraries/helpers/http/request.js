 /**
 * Makes the request with the created configuration
 */

const kernel = require("./kernel");
const fetch = require("node-fetch");
const { get, includes } = require("lodash");
const { shutDown } = require("../../helpers/path");

const request = async (_options) => {
	
	const { 
		uri, method, headers, timeout, data
	} = _options;

	// Default headers
	const _headers = {
		'Accept': '*/*',
		'Content-Type': 'application/json'
	};

	let options = {};

	options.method = method;
	options.timeout = timeout;
	
	// Combining headers
	options.headers = {
		..._headers,
		...headers
	};

	// Adding body index iff 
	if (
		includes(['POST', 'PUT', 'PATCH'], method)
	) {
		options.body = JSON.stringify(data);
	}

	// Returns after adding request and kernel filteration, 
	// if needed any in near future...
	return fetch (uri, options)
		.then(kernel);
};

module.exports = request;
