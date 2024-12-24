const mongoose = require('mongoose');

// Define schema for books
const BookSchema = new mongoose.Schema({
    booktitle: { type: String, required: true },
    PubYear: Number,
    author: String,
    Topic: String,
    formate: String
});

// Export the mongoose model
module.exports = mongoose.model('Books', BookSchema, 'BookCollection2');
