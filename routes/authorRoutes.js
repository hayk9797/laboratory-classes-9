const express = require('express');
const router = express.Router();
const AuthorController = require('../controllers/authorControllers');

router.get('/', AuthorController.getAllAuthors);

router.put('/:id', AuthorController.updateAuthor);

module.exports = router;
