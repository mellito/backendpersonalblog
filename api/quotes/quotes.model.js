const mongoose = require("mongoose");

const QuoteSchema = new mongoose.Schema(
  {
    quote: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
const Quote = mongoose.model("quotes", QuoteSchema);
module.exports = Quote;
