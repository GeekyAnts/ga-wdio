let uploadPhotoJSON = {};

uploadPhotoJSON.path = "src/xpaths";
uploadPhotoJSON.filename = 'UploadPhoto.json';
uploadPhotoJSON.content = `{
	"image":"//img[@class='spark-nav-profile-photo m-r-xs']",
	"settings":"[href='/settings']",
	"profile":"//a[contains(text(),'Profile')]",
	"photo":"//input[@name='photo']"
}`;

module.exports = uploadPhotoJSON;
