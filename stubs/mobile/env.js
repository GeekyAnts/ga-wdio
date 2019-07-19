let env = {};

env.filename = ".env";

env.content = `
#
# run:ios configurations
#

IOS_PLATFORMNAME="iOS"
IOS_DEVICENAME="iPhone Xr"
IOS_PLATFORMVERSION="12.2"
IOS_ORIENTATION="PORTRAIT"
IOS_BROWSERNAME="safari"
IOS_APP="/Users/faizahmed/Downloads/app/iOS-NativeDemoApp-0.2.1.app.zip"
IOS_UDID="3785366A-4510-4957-9B87-E69710E5ADDB"

#
# run:android configurations
#

ANDROID_PLATFORMNAME="Android"
ANDROID_PLATFORVERSION="8.1.0"
ANDROID_DEVICENAME="pixel 2"
ANDROID_APPPACKAGE="com.wdiodemoapp"
ANDROID_APPACTIVITY="com.wdiodemoapp.MainActivity"
ANDROID_APPID="/Users/faizahmed/Downloads/app/Android-NativeDemoApp-0.2.1.apk"

#
# run:ios configurations for Browser-Stack
#

IOS_BS_DEVICE="iPhone 7"
IOS_BS_APPURL="bs://<hased-id or custom-id>"

#
# run:android configurations for Browser-Stack
#

ANDROID_BS_DEVICE="OnePlus 6T"
ANDROID_BS_NAME="single_test"
ANDROID_BS_APPURL="bs://<hashed-id or custom-id>"

`;

module.exports = env;
