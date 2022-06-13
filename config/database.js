const moongose = require("mongoose");

const URI = process.env.MONGO_DB_URI;

async function connectDB() {
  try {
    moongose.connect(URI);
    console.log("DB is connected");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

module.exports = connectDB;
