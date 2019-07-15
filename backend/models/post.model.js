const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: String,
  author: String,
  content: String,
  comments: [{ content: String, date: Date }],
  date: { type: Date, default: Date.now },
  votes: Number
}, {
  timestamps: true,
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;