const loadCommand = require("./startQuotes");
const addCommand = require("./add");
const removeCommand = require("./remove");
const randomCommand = require("./random");
const listCommand = require("./list");
const listByCommand = require("./listBy");
const fetchCommand = require("./fetch");

require("yargs")
  .command(loadCommand)
  .command(addCommand)
  .command(removeCommand)
  .command(randomCommand)
  .command(listCommand)
  .command(listByCommand)
  .command(fetchCommand)
  .demandCommand(1, "Musisz podać przynajmniej jedno polecenie")
  .help().argv;
