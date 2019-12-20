const argv = require("yargs").argv;
const { readFile } = require("./readFile");
const { writeFile } = require("./writeFile");

const removeHandler = async () => {
  try {
    const { _: [, id] } = argv;
    const quotes = await readFile("quotes.json");
    if (quotes) {
      let index = quotes.map(quote => quote.id).indexOf(id);
      if (index === -1) {
        throw new Error("Nie znaleziono cytatu do usunięcia");
      }
      quotes.splice(index, 1);
      const message = await writeFile("./quotes.json", quotes);
      if (message === "ok") {
        console.log("Cytat został usunięty");
      }
    } else {
      console.log('Brak cytatów w bazie');
    }
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  command: "remove <id>",
  desc: "Usuń z bazy cytat o podanym <id>",
  handler: removeHandler
};
