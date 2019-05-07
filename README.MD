# GA WDIO:

An automation CLI tool that creates the project and runs things like geckodriver / chromedriver internally for various stacks, browsers & modes.

## Table of Content:

- [Installation](#installation)

- [Usage](#usage)

	- [Creator Command](#creator-command)
	- [Runner Command](#runner-command)

- [Architecture](#architecture)

	- [Boilerplate Design](#boilerplate-design)
	- [Folder Structure](#folder-structure)
	- [Getting to know more about the folders / files](#getting-to-know-more-about-the-folders--files)

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

### Getting to know more about the folders / files:

Based on Page Object Model, meaning it is based on page by page test execution & therefore we have divided things into sub-folders for easy test management.

- **conf/:**

	- **browser-stack.conf.js:** It works for BrowserStack cloud platform
	- **chrome.conf.js:** It works within the local environment on chrome browser
	- **gecko.conf.js:** It works within the local environment on firefox browser
	- **chrome-headless.conf.js:** It works within the local environment on chrome browser but in headless mode
	- **gecko-headless.conf.js:** It works within the local environment on firefox browser but in headless mode
	
- **src/:**

	- **commons/:** All the common components / functionality which are present in an application such as Login, etc
	- **repo/:** All the components / functionality which are application specific such as filling a form or downloading a file.
	- **tests/:** The folder where we actually write the test scripts which is based on "Mocha" as a BDD (Behaviour driven development) testing by describing the suite and the test case for that suite.
	- **vendor/:** In case, if we have to add/use some 3rd party tool.
	- **xpaths/:** Xpath is the locator of element(s) which is defined within a JSON file according to different pages in an application.

- **storage/:** Storage folder contains sessions folder. These session folders will contain logs, screenshots & screen-recordings generated after the automation-test is being executed. Note: This folder will be created after you to perform tests.

