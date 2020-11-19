const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");

// Project's NPM binary directory...
exports.npm_bin_path = path.join(process.env.GA_PROJECT_PATH, "node_modules/.bin");

// add the geckodriver path to process PATH
process.env.PATH += path.delimiter + path.join(exports.npm_bin_path, "geckodriver");

// support win32 vs other platforms
exports.browser_ext = process.platform === "win32" ? "geckodriver.exe" : "geckodriver";

// support win32 vs other platforms
exports.path = path.join(exports.npm_bin_path, exports.browser_ext);

exports.start = args => {
  let command = exports.path;
  if (!fs.existsSync(command)) {
    console.log("Could not find geckodriver in default path: ", command);
    console.log("Falling back to use global geckodriver bin");

    process.exit(1);
  }

  const cp = spawn(command, args);
  cp.stdout.pipe(process.stdout);
  cp.stderr.pipe(process.stderr);

  exports.defaultInstance = cp;

  return exports.defaultInstance;
}

exports.stop = () => {
  if (exports.defaultInstance !== null) {
    exports.defaultInstance.kill();
  }
}
