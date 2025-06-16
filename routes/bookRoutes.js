const express = require('express');
const router = express.Router();
const BookController = require('../controllers/bookControllers');

router.get('/', BookController.getAllBooks);

router.post('/', BookController.createBook);

router.delete('/:id', BookController.deleteBook);

module.exports = router;
