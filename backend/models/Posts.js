const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: String,
    date: String,
    time: String,
    read: String,
    content: String,
    // image: Buffer,
    tags: [String]
});

const PostModel = mongoose.model('posts', postSchema);

module.exports = PostModel;