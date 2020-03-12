const fs = require("fs");
const util = require("util");

module.exports = {
  readFile: async ( fileName = 'quotes.json' ) => {
    const readFile = util.promisify(fs.readFile);

    try {
      const data = await readFile(fileName, { encoding: "utf8" });
      const quotes = JSON.parse(data);
      return quotes;
    } catch (err) {
      return [];
    }
  }
};
