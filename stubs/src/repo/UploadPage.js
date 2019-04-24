let uploadPageJS = {};

uploadPageJS.path = "src/repo";
uploadPageJS.filename = 'UploadPage.js';
uploadPageJS.content = `var uploadXpath = require('../xpaths/UploadPhoto.json');

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
    add () {
        const remotefilePath =  browser.sendKeys('C:\Documents and Settings\hello\My Documents\images\wallpaper4.jpg');
        (this.photo()).setValue(remotefilePath)
    }
}

export default new UploadPage();
`;

module.exports = uploadPageJS;
