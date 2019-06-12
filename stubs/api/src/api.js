let apiJS = {};

apiJS.path = "src";

apiJS.filename = "api.js";

apiJS.content = `const { domains } = require("./constants");

const { 
	list, single
} = require("./containers/employee");

let app = {};

app.domains = domains;

app.apis = [
	list, 
	single
];

module.exports = app;
`;

module.exports = apiJS;
