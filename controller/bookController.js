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

const updateBookById = (req, res, next) => {
	const {
		body,
		params: { id },
	} = req;
	booksModel
		.update(body, {
			where: { id },
		})
		.then((bookId) => {
			console.log(bookId);
			return booksModel.findByPk(bookId[0]);
		})
		.then((book) => {
			res.status(200).json(book);
		})
		.catch((err) => {
			next(err);
		});
};

const deleteBookById = (req, res, next) => {
	const { id } = req.params;
	booksModel
		.destroy({
			where: {
				id,
			},
		})
		.then(() => {
			res.status(200).json({ message: 'Book deleted successfully' });
		})
		.catch((err) => {
			next(err);
		});
};

module.exports = {
	getAllBooks,
	addBook,
	getBookById,
	updateBookById,
	deleteBookById,
};
