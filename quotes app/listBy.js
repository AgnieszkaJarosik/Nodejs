const { readFile } = require("./utils/readFile");
const { logSentence, logCagegory } = require("./utils/logSentence");

const getQuoteByHandler = async ( {category} ) => {
  try {
    const quotes = await readFile();
    const cat = category.toUpperCase();
    const quotesByCat = quotes.filter(quote => quote.category.toUpperCase() === cat);
    if ( quotesByCat.length > 0) {
      logCagegory(category);
      quotesByCat.forEach( quote => logSentence( '', quote.text, quote.author ));
    } else {
      throw new Error("Nie znaleziono cytatów w tej kategorii");
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
