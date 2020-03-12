const { readFile } = require("./utils/readFile");
const { logSentence, logCagegory } = require("./utils/logSentence");

const getQuoteHandler = async () => {
  try {
    const quotes = await readFile();
    if(quotes.length > 0){
      const quotesByCategory = quotes.reduce((acc, curr) => {
        if (Array.isArray(acc[curr.category])) {
          acc[curr.category].push(curr);
        } else {
          acc[curr.category] = [curr];
        }
        return acc;
      }, {});
      Object.keys(quotesByCategory).map( category => {
        logCagegory(category);
        quotesByCategory[category].map( quote => {
          const { id, text, author } = quote;
          logSentence(id, text, author);
        });
      });
    } else {
      throw new Error('Brak cytatów w bazie');
    }
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  command: "list",
  desc: "Wyświetl wszystkie cytaty",
  handler: getQuoteHandler
};
