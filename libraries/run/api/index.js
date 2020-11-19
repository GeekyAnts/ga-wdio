const _sync = require("./sync");
const { get } = require("lodash");
const { apiRepo, shutDown } = require("../../helpers/path");

let api = {};

api.validateAPI = async (_path) => {
	const _app = require(_path);

	const domains = get(_app, "domains", undefined);
	const defaultDomain = get(domains, "default", undefined);

	if (!domains || !defaultDomain) {
		shutDown('Domains or default domain does not exist.');
	}

	const apis = get(_app, "apis", []);
	if (apis.length <= 0) {
		shutDown('APIs lists seems to be empty.');
	}

	await _sync.start(_app);
};

api.initAPIs = async () => {
	const _path = apiRepo();

	await api.validateAPI(_path);
};

module.exports = api;
