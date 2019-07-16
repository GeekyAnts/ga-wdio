let buttonClickJS = {};

buttonClickJS.path = "src/commons";

buttonClickJS.filename = "ButtonClick.js";

buttonClickJS.content = `import OpenPage from "./OpenPage";

class ButtonClick extends OpenPage {
	open () {
		super.open('/');
	}
}

export default new ButtonClick;
`;

module.exports = buttonClickJS;
