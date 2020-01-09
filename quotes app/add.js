const { readFile } = require("./readFile");
const { writeFile } = require("./writeFile");
const { Quote } = require("./quote");

const addQuoteHandler = async ( {quote, author, category} ) => {
  try {
    let quotes = await readFile("quotes.json");
    let id = null;

    if (quotes) {
      id = quotes[quotes.length - 1].id + 1;
    } else {
      quotes = [];
      id = 1;
    }

    if (typeof quote === "string" && quote !== "") {
      const newQuote = new Quote(id, quote, author, category);
      quotes.push(newQuote);
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
