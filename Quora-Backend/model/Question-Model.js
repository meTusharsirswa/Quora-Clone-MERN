const mongoose = require("mongoose");

const QuestionSchema = mongoose.Schema(
  {
    title: String,
  }
);

module.exports = mongoose.model("Quesation", QuestionSchema);
