const db = require('../models');

const Authors = db.authors;

const getAllAuthors = async (req, res, next) => {
	try {
		const authors = await Authors.findAll();
		res.status(200).json(authors);
	} catch (error) {
		next(error);
	}
};

const addAuthor = async (req, res, next) => {
	const { body } = req;
	try {
		const newAuthor = await Authors.create(body);
		res.status(200).json(newAuthor);
	} catch (error) {
		next(error);
	}
};

module.exports = {
	getAllAuthors,
	addAuthor,
};
