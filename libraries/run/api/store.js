let store = {};

store.override = (contents) => global.store = contents;

store.modules = {
	set: (_index, _value) => global.store[_index] = _value,

	get: (_index) => global.store[_index] || false,

	delete: (_index) => global.store[_index] ? (delete global.store[_index]) : false
};

module.exports = store;
