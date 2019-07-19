const {
	androidConf, androidBrowserConf, androidBrowserStackConf
} = require("../../helpers/path");
const common = require("./common");
const { exist } = require("../../helpers/validate");

const android = {};

android.init = async (_options) => {
	switch (_options.stack) {
		case "browser-stack":
			exist (process.env.ANDROID_BS_DEVICE, "ANDROID_BS_DEVICE is required!");
			exist (process.env.ANDROID_BS_NAME, "ANDROID_BS_NAME is required!");
			exist (process.env.ANDROID_BS_APPURL, "ANDROID_BS_APPURL is required!");
			
			const _path = androidBrowserStackConf();
			return await common.execute(_path);
	
		case "local":
			exist (process.env.ANDROID_PLATFORMNAME, 'ANDROID_PLATFORMNAME is required!');
			exist (process.env.ANDROID_PLATFORVERSION, 'ANDROID_PLATFORVERSION is required!');
			exist (process.env.ANDROID_DEVICENAME, 'ANDROID_DEVICENAME is required!');
			exist (process.env.ANDROID_APPPACKAGE, 'ANDROID_APPPACKAGE is required!');
			exist (process.env.ANDROID_APPACTIVITY, 'ANDROID_APPACTIVITY is required!');
			exist (process.env.ANDROID_APPID, 'ANDROID_APPID is required!');

			if (_options.browser === "true") {
				const _path = androidBrowserConf();
				return await common.execute(_path);
			}
			
			if (_options.browser === "false") {
				const _path = androidConf();
				return await common.execute(_path);
			}
	}
};

module.exports = android;
