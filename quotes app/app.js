const addCommand = require("./add");
const removeCommand = require("./remove");
const randomCommand = require("./random");
const listCommand = require("./list");
const listByCommand = require("./listBy");
const fetchCommand = require("./fetch");

require("yargs")
  .command(addCommand)
  .command(removeCommand)
  .command(randomCommand)
  .command(listCommand)
  .command(listByCommand)
  .command(fetchCommand)
  .demandCommand(1, "Podaj jedno z dostępnych poleceń aby uruchomić aplikację")
  .help().argv;
