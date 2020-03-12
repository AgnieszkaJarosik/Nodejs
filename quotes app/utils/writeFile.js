const fs = require("fs");
const util = require("util");

module.exports = {
  writeFile: async ( data, fileName = 'quotes.json' ) => {
    const writeFile = util.promisify(fs.writeFile);
    try {
      const dataJson = JSON.stringify(data);
      await writeFile(fileName, dataJson);
      return 'ok';
    } catch (err) {
      console.log(err.message);
    }
  }
};
