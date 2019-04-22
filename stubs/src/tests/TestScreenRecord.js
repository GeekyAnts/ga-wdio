let testScreenRecordJS = {};

testScreenRecordJS.path = "src/tests";
testScreenRecordJS.filename = 'TestScreenRecord.js';
testScreenRecordJS.content = `import Login from "../commons/Login";
import ScreenRecording from "../commons/ScreenRecording";

describe('test the screen Recording option', function () {
	it('should start recording', () => {
		ScreenRecording.startScreenRecording();
		
		Login.open();

		ScreenRecording.stopScreenRecording();
	});
});`;

module.exports = testScreenRecordJS;
