const colors = require("colors");

// Define custom theme...
colors.setTheme({
	boldWhite: ["white", "bold"]
});

let terminal = {};

terminal.drawLine = () => {
	// Get the available screen size
	var width = process.stdout.columns;

	var lines = '';
	for (var i = 0; i < width; i++) {
		lines += '-';
	}

	console.log(`${lines}`.boldWhite);
};

terminal.clearConsole = () => process.stdout.write('\033c');

terminal.bgGreenBlack = (_sessionID) => console.log(`${_sessionID}`.bgGreen.black);

terminal.showInfo = (_prefix, _midfix, _postfix) => 
	console.log(
		"?".green, 
		`${_prefix}`.boldWhite, 
		`${_midfix}`.cyan, 
		`${_postfix}`.boldWhite
	);

// Centered Heading
terminal.centeredHeading = (str, _noLine) => {
	if (!_noLine) {
		terminal.drawLine();
	}

	str = typeof(str) == 'string' && str.trim().length > 0 ? str.trim() : '';

	// Get the available screen size
	const width = process.stdout.columns;

	// Calculate the left padding there should be
	const leftPadding = Math.floor((width - str.length) / 2);

	// Put in lefy padded spaces before the string itself
	let line = '';
	for (let i = 0; i < leftPadding; i++) {
		line += ' ';
	}
	line += str;

	console.log(`${line}`.green);

	if (!_noLine) {
		terminal.drawLine();
	}
};

terminal.heading = (_text, _noLine) => {
	if (!_noLine) {
		terminal.drawLine();
	}

	console.log(`${_text}`.green);

	if (!_noLine) {
		terminal.drawLine();
	}
};

terminal.columns = (_text1, _text2) => {
	console.log(`\t${_text1}`, `${_text2}`);
};

terminal.newLine = () => {
	console.log("\n");
};

module.exports = terminal;
