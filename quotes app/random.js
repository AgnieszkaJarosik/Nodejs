const { readFile } = require("./readFile");
const { writeFile } = require("./writeFile");
const { logSentence, logCounter } = require("./logSentence");

const getRandomHandler = async () => {
  try {
    const quotes = await readFile("quotes.json");
    if (quotes) {
      const quote = quotes[Math.floor(Math.random() * quotes.length)];
      quote.counter++;
      const { text, author, counter } = quote;
      logSentence(text, author);
      logCounter(counter);
      await writeFile("./quotes.json", quotes);
    } else {
      console.log("Brak cytatów do wyświetlenia");
    }
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  command: "random",
  desc: "Wyświetl losowy cytat z bazy",
  handler: getRandomHandler
};
