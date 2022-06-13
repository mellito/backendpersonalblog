const app = require("./app");

const port = process.env.PORT || 65535;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;
