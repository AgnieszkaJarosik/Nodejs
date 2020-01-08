const argv = require("yargs").argv;
const { readFile } = require("./readFile");
const { logSentence, logCagegory } = require("./logSentence");

const getQuoteByHandler = async () => {
  try {
    const quotes = await readFile("quotes.json");
    const { _: [, category] } = argv;
    const cat = category.toUpperCase();
    if (Array.isArray(quotes)) {
      const quotesByCat = quotes.filter(quote => {
        if (quote.category.toUpperCase() === cat) {
          return true;
        }
      });
      if (Array.isArray(quotesByCat)) {
        logCagegory(category);
        quotesByCat.forEach( quote => logSentence( quote.text, quote.author ));
      } else {
        throw new Error("Nie znaleziono cytatów w tej kategorii");
      }
    } else {
      console.log("Brak cytatów do wyświetlenia");
    }
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  command: "listBy <category>",
  desc: "Wyświetl cytaty z danej kategorii",
  handler: getQuoteByHandler
};
