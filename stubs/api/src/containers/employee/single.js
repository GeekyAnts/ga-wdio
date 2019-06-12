let employeeSingleJS = {};

employeeSingleJS.path = "src/containers/employee";

employeeSingleJS.filename = "single.js";

employeeSingleJS.content = `let single = {};

// Optional: API Name for the reporting purpose
single.name = "Get A Single Employee";

// Required: API URI
single.uri = "/users/23";

/** 
 * Optional: API Domain
 * Default: API default domain defined in app.domains
 * Note: Its value is the index name from domains object
 */
// index.domain = "some_index";

// Required: API Method
single.method = "GET";

// Optional: API Timeout
single.timeout = 10 * 1000;

// Required: API Request Headers
// Note: This will override our request headers
single.headers = {
	"Content-Type": "application/json"
};

// Optional: Response Expected from Response
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
