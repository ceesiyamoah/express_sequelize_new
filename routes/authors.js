const express = require('express');
const { getAllAuthors, addAuthor } = require('../controller/authorController');

const authorsRouter = express.Router();

authorsRouter.get('/', getAllAuthors);
authorsRouter.post('/', addAuthor);

module.exports = authorsRouter;
