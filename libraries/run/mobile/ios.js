const {
	iosConf, iosBrowserConf, iosBrowserStackConf
} = require("../../helpers/path");
const common = require("./common");
const { exist } = require("../../helpers/validate");

const ios = {};

ios.init = async (_options) => {
	switch (_options.stack) {
		case "browser-stack":
			exist (process.env.IOS_BS_DEVICE, "IOS_BS_DEVICE is required!");
			exist (process.env.IOS_BS_APPURL, "IOS_BS_APPURL is required!");
			
			const _path = iosBrowserStackConf();
			return await common.execute(_path);
	
		case "local":
			exist (process.env.IOS_BROWSERNAME, 'IOS_BROWSERNAME is required!');
			exist (process.env.IOS_ORIENTATION, 'IOS_ORIENTATION is required!');
			exist (process.env.IOS_PLATFORMNAME, 'IOS_PLATFORMNAME is required!');
			exist (process.env.IOS_DEVICENAME, 'IOS_DEVICENAME is required!');
			exist (process.env.IOS_PLATFORMVERSION, 'IOS_PLATFORMVERSION is required!');
			exist (process.env.IOS_UDID, 'IOS_UDID is required!');

			if (_options.browser === "true") {
				const _path = iosBrowserConf();
				return await common.execute(_path);
			}
			
			if (_options.browser === "false") {
				const _path = iosConf();
				return await common.execute(_path);
			}
	}
};

module.exports = ios;
