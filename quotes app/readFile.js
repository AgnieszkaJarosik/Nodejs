const fs = require("fs");
const util = require("util");

module.exports = {
  readFile: async fileName => {
    const readFile = util.promisify(fs.readFile);

    try {
      const data = await readFile(fileName, { encoding: "utf8" });
      if (!data) {
        throw new Error("Empty file");
      }
      const quotes = JSON.parse(data);
      return quotes;
    } catch (err) {
      if (err.message === "Empty file") {
        return null;
      } else {
        throw err;
      }
    }
  }
};
