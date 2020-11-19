let helpers = {};

helpers.interpolate = (str, data) => {
  str = typeof (str) == 'string' && str.length > 0 ? str : '';
  data = typeof (data) == 'object' && data !== null ? data : {};

  // For each key in the data object, insert its value into the string at the corresponding placeholder
  for (var key in data) {
    if (data.hasOwnProperty(key) && typeof (data[key] == 'string')) {
      var replace = data[key];
      var find = `[${key}]`;
      str = str.replace(find, replace);
    }
  }

  return str;
};

module.exports = helpers;
