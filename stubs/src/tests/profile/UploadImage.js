let uploadImageJS = {};

uploadImageJS.path = "src/tests/profile";
uploadImageJS.filename = 'UploadImage.js';
uploadImageJS.content = `import Login from "../../commons/Login";
import UploadPage from "../../repo/UploadPage";

describe("Do upload image in builderx page", function () {
	beforeEach(() => {
		Login.open();
	});

	it("should upload the image", () => {
		Login.login("faizz.af@gmail.com", "123456");
		UploadPage.image().click();
		UploadPage.settings().click();
		UploadPage.profile().click();
		UploadPage.photo().click();
		UploadPage.add();
	});
});`;

module.exports = uploadImageJS;
