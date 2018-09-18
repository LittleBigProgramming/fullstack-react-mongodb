
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Post = mongoose.model('posts');

module.exports = app => {
 app.get('/api/all_posts', (req, res) => {
   Post.find({}, (err, posts) => {
     let postMap = {};
      posts.map(post => {
        postMap[post._id] = post;
      });
      res.send(postMap); 
   });
 })
}