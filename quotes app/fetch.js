const axios = require("axios");
const { logSentence } = require("./logSentence");

const getQuote = async () => {
  const url = `http://ec2-18-217-240-10.us-east-2.compute.amazonaws.com/node/quotes.php`;
  const quote = await axios.get(url);
  return quote.data;
};

const fetchHandler = async () => {
  try {
    const fetchQuote = await getQuote();
    const { quote, author } = fetchQuote;
    logSentence(quote, author);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  command: "fetch",
  desc: "Wyświetl cytat z zewnętrznego api",
  handler: fetchHandler
};
