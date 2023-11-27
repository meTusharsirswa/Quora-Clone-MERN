const mongoose = require("mongoose");

const createPostSchema = new mongoose.Schema({
  title: String,
  sub_title: String,
  upvote: Number,
  downvote: Number,
});

module.exports = mongoose.model("Posts", createPostSchema);
