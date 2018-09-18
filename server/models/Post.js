const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
 author: String,
 text: String,
 published: Date,
});

mongoose.model('posts', postSchema);

module.exports = postSchema;

