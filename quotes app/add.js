const argv = require("yargs").argv;
const { readFile } = require("./readFile");
const { writeFile } = require("./writeFile");
const { Quote } = require("./quote");

const addQuoteHandler = async () => {
  try {
    let quotes = await readFile("quotes.json");
    const { _: [, text, author, cat] } = argv;
    let id = null;

    if (quotes) {
      id = quotes[quotes.length - 1].id + 1;
    } else {
      quotes = [];
      id = 1;
    }

    if (typeof text === "string" && text !== "") {
      const quote = new Quote(id, text, author, cat);
      quotes.push(quote);
    } else {
      throw new Error("Nie podano cytatu!");
    }
    const message = await writeFile("./quotes.json", quotes);
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
