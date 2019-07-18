let babelConfigJS = {};

babelConfigJS.filename = "babel.config.js";

babelConfigJS.content = `module.exports = {
	presets: [
		["@babel/preset-env", {
			targets: {
				node: 8
			}
		}]
	]
}`;

module.exports = babelConfigJS;
