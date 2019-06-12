let apiJS = {};

apiJS.path = "src";

apiJS.filename = "api.js";

apiJS.content = `const { domains } = require("./constants");

const { 
	list, single
} = require("./containers/employee");

let api = {};

api.domains = domains;

api.apis = [
	list, 
	single
];

module.exports = api;
`;

module.exports = apiJS;
