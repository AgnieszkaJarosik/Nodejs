const { readFile } = require("./readFile");
const { writeFile } = require("./writeFile");

const loadQuotesHandler = async () => {
  try {
    const quotes = await readFile("./backup.json");
    await writeFile("./quotes.json", quotes);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  command: "load",
  desc: "Utwórz bazę z cytatami",
  handler: loadQuotesHandler
};
