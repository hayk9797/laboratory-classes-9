const Book = require('../models/Book');

exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find().populate('author');
        res.status(200).json(books);
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.createBook = async (req, res) => {
    const { title, year, author } = req.body;

    try {
        const newBook = new Book({ title, year, author });
        await newBook.save();
        res.status(201).json(newBook);
    } catch (err) {
        res.status(400).json({ message: 'Bad request' });
    }
};

exports.deleteBook = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedBook = await Book.findByIdAndDelete(id);
        if (!deletedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(204).send();
    } catch (err) {
        res.status(400).json({ message: 'Invalid ID' });
    }
};
