const quotes = require("./api/quotes");

function routes(app) {
  app.use("/api/quotes", quotes);
}

module.exports = routes;
