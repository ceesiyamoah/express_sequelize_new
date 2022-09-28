const express = require('express');
const { getAllBooks, addBook, getBookById, updateBookById, deleteBookById } = require('../controller/bookController');

const booksRouter = express.Router();

booksRouter.get('/', getAllBooks);
booksRouter.post('/', addBook);
booksRouter.get('/:id', getBookById);
booksRouter.put('/:id', updateBookById);
booksRouter.delete('/:id', deleteBookById);

module.exports = booksRouter;
