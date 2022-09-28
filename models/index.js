const { Sequelize, DataTypes } = require('sequelize');
const { DB_DIALECT, DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } = require('../config/dbConfig');
const authorsModel = require('./authors');
const bookModel = require('./books');

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
	host: DB_HOST,
	dialect: DB_DIALECT,
});

sequelize
	.authenticate()
	.then(() => {
		console.log('Connection established successfully');
	})
	.catch((err) => {
		console.log('Unable to connect to the database:', err);
	});

const db = {
	sequelize,
	Sequelize,
	books: bookModel(sequelize, DataTypes),
	authors: authorsModel(sequelize, DataTypes),
};

//Add models

db.sequelize
	.sync({
		force: false,
	})
	.then(() => {
		console.log('Table sync successful');
	})
	.catch((err) => {
		console.log(err);
	});

module.exports = db;
