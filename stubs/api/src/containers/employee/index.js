let employeeIndexJS = {};

employeeIndexJS.path = "src/containers/employee";

employeeIndexJS.filename = "index.js";

employeeIndexJS.content = `module.exports = {
	list: require("./list"),
	single: require("./single")
};
`;

module.exports = employeeIndexJS;
