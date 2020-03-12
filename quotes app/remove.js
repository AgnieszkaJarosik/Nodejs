const { readFile } = require("./utils/readFile");
const { writeFile } = require("./utils/writeFile");

const removeHandler = async ( {id} ) => {
  try {
    const quotes = await readFile();
    let index = quotes.map(quote => quote.id).indexOf(id);
    if (index === -1) {
      throw new Error("Nie znaleziono cytatu do usunięcia");
    }
    quotes.splice(index, 1);
    const message = await writeFile(quotes);
    if (message === "ok") {
      console.log("Cytat został usunięty");
    }
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  command: "remove <id>",
  desc: "Usuń z bazy cytat o podanym id",
  handler: removeHandler
};
