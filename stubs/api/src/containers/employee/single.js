let employeeSingleJS = {};

employeeSingleJS.path = "src/containers/employee";

employeeSingleJS.filename = "single.js";

employeeSingleJS.content = `let single = {};

single.name = "Get A Single Employee";

single.uri = "/users/23";

single.method = "GET";

single.timeout = 10 * 1000;

single.headers = {
	"Content-Type": "application/json"
};

single.expected = {
	headers: {
		"Content-Type": "string"
	},
	body: {
		"data": {
			"id": "number",
			"alpha": "string",
			"email": "string",
			"first_name": "string",
			"last_name": "string",
			"avatar": "string"
		}
	}
};

module.exports = single;
`;

module.exports = employeeSingleJS;
