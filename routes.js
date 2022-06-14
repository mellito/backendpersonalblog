const quotes = require("./api/quotes");
const projects = require("./api/projects");

function routes(app) {
  app.use("/api/quotes", quotes);
  app.use("/api/projects", projects);
}

module.exports = routes;
