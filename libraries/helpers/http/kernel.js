const { 
	successResponse, failureResponse 
} = require("./kernel");

const kernel = async (_response) => {
	return _response;
};

module.exports = kernel;
