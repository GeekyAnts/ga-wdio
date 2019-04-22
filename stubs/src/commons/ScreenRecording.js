let ScreenRecordingJS = {};

ScreenRecordingJS.path = "src/commons";

ScreenRecordingJS.filename = "ScreenRecording.js";

ScreenRecordingJS.content = `import recorder from "wdio-video-recorder";

class ScreenRecording {
	startScreenRecording () {
		recorder.start(browser);
	}
	async stopScreenRecording () {
		recorder.stop(browser);
		await browser.saveRecordingScreen('/store/screenshots/video.mp4');
	}
}

export default new ScreenRecording();`;

module.exports = ScreenRecordingJS;
