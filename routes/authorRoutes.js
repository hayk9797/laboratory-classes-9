const express = require('express');
const router = express.Router();
const AuthorController = require('../controllers/AuthorController');

router.get('/', AuthorController.getAllAuthors);

router.put('/:id', AuthorController.updateAuthor);

module.exports = router;
