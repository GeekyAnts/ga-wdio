# GA WDIO:

An automation CLI tool that creates the tests project for Web, API & Mobile apps and runs things like geckodriver, chromedriver & appium internally for various stacks, browsers & modes.

## Features:

* Supports Web App Testing
* Supports API Testing
* Supports iOS & Android Mobile App Testing
* Supports iOS & Android Mobile Browser Testing
* Supports Browser Stack cloud environment for Web & Mobile Testing
* CLI command to 
	* create the boilerplate
	* run the test cases
	* check the appium's necessary & optional dependencies on the system
	* upload the mobile APK or IPA to the browser-stack cloud

## Installation:

```sh
npm install -g ga-wdio
```

## Setup for ios
###  Configure webdriveragent 

  * Register  bundle indentifier for webdriveragent with you organisation. <br>
 eg: <kbd>com.[companyName].WebDriverAgent</kbd>

 * Open WebDriverAgent project in xCode.<br>
To find it please use the following path :<kbd> /usr/local/lib/node_modules/appium/node_modules/appium-webdriveragent/WebDriverAgent.xcodeproj</kbd>

 * Click on Project name at the left navigation (WebDriverAgent)
 * Select Automatically manage signing for <kbd>WebDriverAgentLib</kbd> & <kbd>WebDriverAgentRunner</kbd> targets and  then select your Development Team.

To test the configuration run following command in <kbd>/usr/local/lib/node_modules/appium/node_modules/appium-webdriveragent</kbd> directory 
``` 
xcodebuild -project WebDriverAgent.xcodeproj -scheme WebDriverAgentRunner -destination 'id=UDID' test 
```
NOTE: To run on simulator use .app file.

Link to official documentation  https://github.com/appium/appium-xcuitest-driver/blob/master/docs/real-device-config.md

## Setup for Android
 No extra setup needed for android.

 ### Link to the demo application
 - https://github.com/webdriverio/native-demo-app/releases

## Documentation:

- [Home](https://github.com/GeekyAnts/ga-wdio/wiki)
- [Features](https://github.com/GeekyAnts/ga-wdio/wiki/Features)
- [Usage](https://github.com/GeekyAnts/ga-wdio/wiki/Usage)
- [Architecture for Web](https://github.com/GeekyAnts/ga-wdio/wiki/Web-Architecture)
- [Architecture for API](https://github.com/GeekyAnts/ga-wdio/wiki/API-Architecture)
- [Architecture for Mobile](https://github.com/GeekyAnts/ga-wdio/wiki/Mobile-Architecture)

## Support:

GA WDIO supported version & other security related details are available in our [SECURITY](https://github.com/GeekyAnts/ga-wdio/blob/master/SECURITY.md) file.

## License

GA WDIO is MIT licensed, as found in the [LICENSE](https://github.com/GeekyAnts/ga-wdio/blob/master/LICENSE.MD) file.
