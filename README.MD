# GA WDIO:

An automation CLI tool that creates the project and runs things like geckodriver / chromedriver internally for various stacks, browsers & modes.

## Table of Content:

- Installation

- Usage

	- Creator Command

	- Runner Command

- Architecture

	- Boilerplate Design

	- Folder Structure

	- Getting to know more about the folders / files

## Installation:

```sh
npm install -g ga-wdio
```

## Usage:

### Creator Command:

```sh
ga-wdio create --help
# Usage: create [options]

# Creates the boilerplate in the present directory

# Options:
#  -h, --help  output usage information

# Examples:
#  ga-wdio create
```

### Runner Command:

```sh
ga-wdio runner --help
# Usage: runner [options]

# Runs the testing scripts with the options / stacks specified

# Options:
#  -s, --stack <local> <browser-stack> <browser-stack-local>  runs your tests on the local system or browser-stack (default: "local")
#  -b, --browser <chrome> <firefox>                           web browser [chrome or firefox] (default: "chrome")
#  -m, --mode [headless]                                      sets the mode to the run web-browser, this feature is applicable only with local stack (default: "head")
#  -h, --help                                                 output usage information

# Examples:
#  ga-wdio runner . 							# Imp Note: This command will set all the default values
#  ga-wdio runner --stack=local --browser=chrome --mode=headless
#  ga-wdio runner --stack=browser-stack --browser=firefox
```

## Architecture:

### Boiler Plate Design:

- The design contains `/conf/` which contains  configuration files for running the tests accroding to usage i.e. in cloud or local browsers.
- `/src/` folder is the main folder where the project's source files are located, which contains subfolders.
- `/storage/` folder  contains video, screenshots and log files which are generated according to sessionId(storage folder is generated only after a test has been runned).

### Folder Structure:

```sh
├── conf
│   ├── browser-stack.conf.js
│   ├── chrome-headless.conf.js
│   ├── chrome.conf.js
│   ├── gecko-headless.conf.js
│   ├── gecko.conf.js
│   └── local.conf.js
├── src
│   ├── commons
│   ├── repo
│   ├── tests
│   ├── vendor
│   └── xpaths
├── storage
│   └── session_<Session-Number>
```

### Getting to know the folders / files:

It is based on Page Object Model which is based on page by page test execution and therefore being divided into sub-folders for easy test management.

1. **conf/:**
	1. **browser-stack.conf.js:** The configuration file which works on cross-browser testing on cloud platform(BrowserStack). It enables to test on different os versions and different browsers.
	2. **chrome-headless.conf.js:** It works within the local environment on chrome browser without a GUI. ****
	3. **chrome.conf.js:** It works within the local environment on chrome browser.
	4. **gecko-headless.conf.js:** It works within the local environment on firefox browser without a GUI. ****
	5. **gecko.conf.js:** It works within the local environment on firefox browser.
2. **src/:**
	1. **commons/:** It is generally the common components/functionality which are present in an application such as Login,Signup .
	2. **repo/:** It is the components/functionality which are application specific such as filling a form, downloading a file.
	3. **tests/:** It is the folder where we actually write the test scripts which is based on "Mocha" as a BDD(Behaviour driven development) testing by describing the suite and the test case for that suite.
	4. **vendor/:** 
	5. **xpaths/:** Xpath is the locator of element/elements which is defined within a JSON file according to different pages in an application.
3. **storage/:** Storage folder consists of screenshots,logs,videos generated after the automation-test is being executed.This folder is only generated when the test has been executed atleast once.

