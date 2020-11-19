const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");
const tcpPortUsed = require("tcp-port-used");

const getPortFromArgs = args => {
  let port = 9515;
  if (!args) {
    return port;
  }

  const portRegexp = /--port=(\d*)/;
  const portArg = args.find(arg => portRegexp.test(arg));
  if (portArg) {
    port = parseInt(portRegexp.exec(portArg)[1]);
  }
  return port;
}

// project's NPM binary directory...
exports.npm_bin_path = path.join(process.env.GA_PROJECT_PATH, "node_modules/.bin");

// support win32 vs other platforms
exports.browser_ext = process.platform === "win32" ? "chromedriver.exec" : "chromedriver";

// add the chrome-driver path to process PATH
process.env.PATH += path.delimiter + path.join(exports.npm_bin_path, exports.browser_ext);

// sets the command...
exports.path = path.join(exports.npm_bin_path, exports.browser_ext);

exports.start = (args, returnPromise) => {
  let command = exports.path;
  if (!fs.existsSync(command)) {
    console.log("Could not find chromedriver in default path: ", command);
    console.log("Falling back to use global chromedriver bin");

    process.exit(1);
  }

  const cp = spawn(command, args);
  cp.stdout.pipe(process.stdout);
  cp.stderr.pipe(process.stderr);

  exports.defaultInstance = cp;
  if (!returnPromise) {
    return cp;
  }

  const port = getPortFromArgs(args);
  const pollInterval = 100;
  const timeout = 10000;

  return tcpPortUsed
    .waitUntilUsed(port, pollInterval, timeout)
    .then(() => cp);
};

exports.stop = () => {
  if (exports.defaultInstance != null) {
    exports.defaultInstance.kill();
  }
};
