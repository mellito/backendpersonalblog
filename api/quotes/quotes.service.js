const QuotesModel = require("./quotes.model");

async function getQuotes() {
  const quotes = await QuotesModel.find();
  console.log(quotes);
  return quotes;
}

module.exports = { getQuotes };
