const Author = require('../models/Author');

exports.getAllAuthors = async (req, res) => {
    try {
        const authors = await Author.find();
        res.status(200).json(authors);
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.updateAuthor = async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName } = req.body;

    try {
        const updatedAuthor = await Author.findByIdAndUpdate(
            id,
            { firstName, lastName },
            { new: true, runValidators: true }
        );

        if (!updatedAuthor) {
            return res.status(404).json({ message: 'Author not found' });
        }

        res.status(200).json(updatedAuthor);
    } catch (err) {
        res.status(400).json({ message: 'Bad Request' });
    }
};
