let employeeListJS = {};

employeeListJS.path = "src/containers/employee";

employeeListJS.filename = "list.js";

employeeListJS.content = `let index = {};

index.name = "Get list of Employees";

index.uri = "/users";

index.query = {
	page: 2
};

index.method = "GET";

index.timeout = 10 * 1000;

index.headers = {
	"Content-Type": "application/json"
};

index.expected = {
	headers: {
		"Content-Type": "string"
	},
	body: {
		"page": "number",
		"per_page": "number",
		"total": "number",
		"total_pages": "number",
		"faiz": "",
		"ahmed": "",
		"data": [{
			"id": "number",
			"alpha": "string",
			"email": "string",
			"first_name": "string",
			"last_name": "string",
			"avatar": "string"
		}]
	}
};

module.exports = index;
`;

module.exports = employeeListJS;
