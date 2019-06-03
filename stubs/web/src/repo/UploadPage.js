let uploadPageJS = {};

uploadPageJS.path = "src/repo";
uploadPageJS.filename = "UploadPage.js";
uploadPageJS.content = `import uploadXpath from "../xpaths/UploadPhoto.json";

class UploadPage {
	image () {
		return $(uploadXpath.image);
	}
	settings () {
		return $(uploadXpath.settings);
	}
	profile () {
		return $(uploadXpath.profile);
	}
	photo () {
		return $(uploadXpath.photo);
	}
}

export default new UploadPage();`;

module.exports = uploadPageJS;
