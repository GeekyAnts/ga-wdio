let employeeListJS = {};

employeeListJS.path = "src/containers/employee";

employeeListJS.filename = "list.js";

employeeListJS.content = `let index = {};

// Optional: API Name for the reporting purpose
index.name = "Get list of Employees";

// Required: API URI
index.uri = "/users";

/** 
 * Optional: API Domain
 * Default: API default domain defined in app.domains
 * Note: Its value is the index name from domains object
 */
// index.domain = "some_index";

// Optional: API Query
index.query = {
	page: 2
};

// Required: API Method
index.method = "GET";

// Optional: API Timeout
index.timeout = 10 * 1000;

// Required: API Request Headers
// Note: This will override our request headers
index.headers = {
	"Content-Type": "application/json"
};

// Optional: Response Expected from Response
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
