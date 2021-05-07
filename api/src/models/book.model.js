const { Schema, model } = require('mongoose');

const BookSchema = new Schema({
    name: String,
    editorial: String,
    pages: Number
});

module.exports = model('book', BookSchema);