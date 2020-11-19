
const { expect } = require("chai");
const traverse = require("traverse");
const { get, map, xor, difference, isEmpty } = require("lodash");

var GlobalStore = require("../../run/api/store");

let expected = {};

expected.objectsHaveSameKeys = (...objects) => {
	const allKeys = objects.reduce((keys, object) => keys.concat(Object.keys(object)), []);

	const union = new Set(allKeys);
	return objects.every(object => union.size === Object.keys(object).length);
};

expected.init = async (_expected, _response) => {
	let _errors = [];
	_errors.headers = [];
	_errors.body = [];

	if (!_response.ok) {
		return {};
	}

	const headers = _response.headers;
	const body = await _response.json();

	// Check for Expected Headers...
	if (_expected.headers !== undefined && Object.keys(_expected.headers) !== 0) {
		for (const iterator in _expected.headers) {
			// Check if the index exist as expected
			if (!headers.get(`${iterator}`)) {
				let _u = [];
				_u['key'] = iterator;
				_u['value'] = "Not available";

				_errors.headers.push(_u);
			}

			// Match the value of each index in headers
			if (headers.get(`${iterator}`) !== _expected.headers[`${iterator}`]) {
				let _u = [];
				_u['key'] = iterator;
				_u['value'] = 'Receiving incorrect value as \'' + headers.get(`${iterator}`) + '\'';

				_errors.headers.push(_u);
			}
		}
	}

	const bodyTraces = traverse(body).paths(x => x, []);
	const expectedBodyTraces = traverse(_expected.body).paths(x => x, []);

	let expectedTree = [];
	expectedBodyTraces.map(value => {
		const _data = value.join(".");
		const _iterator = get(_expected.body, _data);

		if (typeof _data !== "object" && value.length > 0) {
			expectedTree.push(_data);
		}
	});

	let responseTree = [];
	bodyTraces.map(value => {
		const _data = value.join(".");
		const _iterator = get(body, _data);

		if (typeof _data !== "object" && value.length > 0) {
			responseTree.push(_data);
		}
	});

	const isSomethingLeft = difference(expectedTree, responseTree);
	if (isSomethingLeft && isSomethingLeft.length > 0) {

		isSomethingLeft.map(_value => {
			let _u = [];
			_u["key"] = _value;
			_u["value"] = `'${_value}' index is missing from the response!`;

			_errors.body.push(_u);
		});
	}

	if (_expected.hasOwnProperty('store') && !isEmpty(_expected.store)) {
		for (const iterator in _expected.store) {
			let _iterator = get(_expected.store, iterator, undefined);
			if (_iterator) _iterator = _iterator.replace("body.", "");

			GlobalStore.modules.set(iterator, get(body, _iterator));
		}
	}

	return _errors;
};

module.exports = expected;
