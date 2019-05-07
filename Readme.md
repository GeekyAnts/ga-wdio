# GA WDIO:

An automation CLI tool that creates the project and runs things like geckodriver / chromedriver internally for various stacks, browsers & modes.

### Documentation:

- [Notion.so](https://www.notion.so/geekyants/085bbb0e72314327878b73801fd0794d?v=207a10e7cde8409daf9be7fc13177a35)

### Installation:

```sh
npm install -g ga-wdio
```

### Usage:

#### Creator Command:

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