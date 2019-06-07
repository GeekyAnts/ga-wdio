const colors = require("colors");

// Define custom theme...
colors.setTheme({
	boldWhite: ["white", "bold"]
});

let terminal = {};

terminal.drawLine = () => console.log("--------------------------------------------------------------------".boldWhite);

terminal.clearConsole = () => console.log("\033[2J");

terminal.bgGreenBlack = (_sessionID) => console.log(`${_sessionID}`.bgGreen.black);

terminal.showInfo = (_prefix, _midfix, _postfix) => 
	console.log(
		"?".green, 
		`${_prefix}`.boldWhite, 
		`${_midfix}`.cyan, 
		`${_postfix}`.boldWhite
	);

terminal.heading = (_text) => {
	terminal.drawLine();
	console.log(`${_text}`.green);
	terminal.drawLine();
};

module.exports = terminal;
