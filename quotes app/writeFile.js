const fs = require("fs");
const util = require("util");

module.exports = {
  writeFile: async (fileName, data) => {
    const writeFile = util.promisify(fs.writeFile);
    try {
      if (!data) { throw new Error('Empty file') }
      const dataJson = JSON.stringify(data);
      await writeFile(fileName, dataJson);
      return 'ok';
    } catch (err) {
      if (err.message === 'Empty file') {
        console.log('Plik do zapisu jest pusty');
      } else {
        throw err;
      }
    }
  }
};
