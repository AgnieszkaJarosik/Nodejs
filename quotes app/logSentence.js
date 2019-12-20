const chalk = require('chalk');

module.exports = {
  logSentence: (text, author) => {
    console.log(chalk`
{yellowBright.italic "${text}"} {green - ${author}}`);  
  },

  logCagegory: (category) => {
    console.log(chalk.grey(`
${category}:`))
  },

  logCounter: (counter) => {
    console.log(chalk.gray(`
losowano ${counter} ${counter>1 ? "razy" : "raz"}`));
  }
};