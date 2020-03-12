const { readFile } = require("./utils/readFile");
const { writeFile } = require("./utils/writeFile");
const { Quote } = require("./quote");

const addQuoteHandler = async ( {quote, author, category} ) => {
  try {
    let quotes = await readFile("quotes.json");
    let id = await readFile('id.txt');
    let newId = Number(id + 1);
    writeFile(newId, 'id.txt');

    if (typeof quote === "string" && quote !== "") {
      const newQuote = new Quote(newId, quote, author, category);
      quotes.push(newQuote);
    } else {
      throw new Error("Nie podano cytatu!");
    }
    const message = await writeFile( quotes );
    if (message === "ok") {
      console.log("Dodano do bazy");
    }
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  command: "add <quote> <author> [category]",
  desc: "Dodaj nowy cytat do bazy",
  handler: addQuoteHandler
};
