const db = require('../models');
const booksModel = db.books;

const getAllBooks = (req, res, next) => {
	booksModel
		.findAll()
		.then((books) => {
			res.status(200).json(books);
		})
		.catch((err) => {
			next(err);
		});
};

const addBook = (req, res, next) => {
	const { body } = req;
	booksModel
		.create(body)
		.then((book) => {
			res.status(200).json(book);
		})
		.catch((err) => {
			next(err);
		});
};

const getBookById = (req, res, next) => {
	const { id } = req.params;
	console.log(id);
	booksModel
		.findByPk(id)
		.then((book) => {
			res.status(200).json(book);
		})
		.catch((err) => {
			next(err);
		});
};

const updateBook = (req, res, next) => {
	const {
		body,
		params: { id },
	} = req;
	booksModel.update();
};

module.exports = {
	getAllBooks,
	addBook,
	getBookById,
};
