const { readFile } = require("./utils/readFile");
const { writeFile } = require("./utils/writeFile");
const { logSentence, logCounter } = require("./utils/logSentence");

const getRandomHandler = async () => {
  try {
    const quotes = await readFile();
    if (quotes.length > 0) {
      const quote = quotes[Math.floor(Math.random() * quotes.length)];
      quote.counter++;
      const { text, author, counter } = quote;
      logSentence('', text, author);
      logCounter(counter);
      await writeFile(quotes);
    } else {
      throw new Error("Brak cytatów do wyświetlenia");
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
