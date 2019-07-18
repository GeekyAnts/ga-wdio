let xpath = {};

xpath.path = "src/xpath";

xpath.filename = "index.js";

xpath.content = `module.exports = (path) => {
	path = path.toLowerCase();

	if (driver.isAndroid) {
		return require(\`./android/\${path}\`);
	}

	if (driver.isIOS) {
		return require(\`./ios/\${path}\`);
	}

	return require(\`./web/\${path}\`);
};
`;

module.exports = xpath;
