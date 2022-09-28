const express = require('express');
const authorsRouter = require('./routes/authors');
const booksRouter = require('./routes/books');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use('/books', booksRouter);
app.use('/authors', authorsRouter);

app.use((err, req, res, next) => {
	console.log(err);
	res.status(500).json({
		error: err.message,
	});
});

app.listen(PORT, () => {
	console.log('Server running on http://localhost:' + PORT);
});
