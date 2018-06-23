const mongoose = require('mongoose');

const Image = new mongoose.Schema({
    imageURL: String,
    comments: String,
    tags: [],
});

module.exports = mongoose.model('images', Image);