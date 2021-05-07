const Book = require('../models/book.model');

module.exports = { 
    async save(req, res){
            const book = new Book(body);
            await book.save();
            res.send({ status: 1, msg: 'save' });

    },
    async get(req, res){
        const books = await Book.find({});
        res.send({ status: 1, data: books })
    },
    async clearCollection(req, res){
        const status = await Book.remove({});
        res.send({ status : status.ok });
    }    
 };