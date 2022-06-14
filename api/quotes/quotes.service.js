const QuotesModel = require("./quotes.model");

async function getQuotes() {
  const quotes = await QuotesModel.find();
  return quotes;
}

module.exports = { getQuotes };
