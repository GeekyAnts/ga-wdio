const { writeFile, mkdir, constants, access } = require("fs");

let designer = {};

designer.createFolder = async (_folder) => {
	return new Promise((resolve, reject) => {
		access(_folder, constants.F_OK, (err) => {
			if (!err) {
				return resolve(true);
			}

			mkdir(_folder, { recursive: true }, (err) => {
				if (err) {
					return reject(err);
				}
				return resolve(true);
			});
		});
	});
};

designer.createFileWithContent = async (_filePath, _fileName, _content) => {
	return new Promise((resolve, reject) => {
		writeFile(`${_filePath}/${_fileName}`, _content, 'utf8', (err) => {
			if (err) {
				return reject(err);
			}
			return resolve(true);
		})
	});
};

module.exports = designer;
