const { getQuotes } = require("./quotes.service.js");

async function getAllquotes(req, res) {
  try {
    const quotes = await getQuotes();
    res.status(200).json({ status: 200, data: quotes });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
}

module.exports = { getAllquotes };
