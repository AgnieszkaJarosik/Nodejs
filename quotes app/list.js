const { readFile } = require("./readFile");
const { logSentence, logCagegory } = require("./logSentence");

const getQuoteHandler = async () => {
  try {
    const quotes = await readFile("quotes.json");
    if(Array.isArray(quotes)){
      const quotesByCategory = quotes.reduce((acc, curr) => {
        if (Array.isArray(acc[curr.category])) {
          acc[curr.category].push(curr);
        } else {
          acc[curr.category] = [curr];
        }
        return acc;
      }, {});
      Object.keys(quotesByCategory).map( category => {
        category === '' ? logCagegory('Inne') : logCagegory(category);
        quotesByCategory[category].map( quote => {
          const { text, author } = quote;
          logSentence(text, author);
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
