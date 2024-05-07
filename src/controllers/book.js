const { Book } = require("../db/models");

const createBook = async (req, res) => {
  const { title, author, ISBN, genre, publishedYear, publisher } = req.body;
  try {
    const bookTitle = await Book.findOne({
      where: { title },
    });
    if (bookTitle) return res.json({ message: "The book already exists." });
    await Book.create({
      title,
      author,
      ISBN,
      genre,
      publishedYear,
      publisher,
    });
    return res.status(200).send({ message: "Book created successfully." });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "Couldn't create the book." });
  }
};

const updateBook = async (req, res) => {
  const { id } = req.params;
  console.log("id", id);
  try {
    await Book.update(req.body, {
      where: { id },
    });
    return res.json({ message: "Book details updated successfully" });
  } catch (err) {
    return res.json({ message: "Couldn't update book details." });
  }
};

const getAllBooks = async (req, res) => {
  try {
    console.log("booksss");
    const books = await Book.findAll();
    return res.json(books);
  } catch (err) {
    console.log("error", err);
    return res.status(500).send({ message: "Couldn't retrieve books." });
  }
};

const getBookById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findOne({
      where: { id },
    });
    if (!book) {
      return res.status(404).send({ message: `Book with id ${id} not found.` });
    }
    return res.json(book);
  } catch (err) {
    res.status(500).send({ message: "Couldn't retrieve the book" });
  }
};

const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findOne({
      where: { id },
    });
    if (!book) {
      return res.status(404).send({ message: `Book with id ${id} not found.` });
    }
    await book.destroy();
    return res.json({ message: "Book deleted successfully" });
  } catch (err) {
    console.log("error", err);
    return res.json({ message: "Couldn't delete the book." });
  }
};

module.exports = {
  createBook,
  updateBook,
  getAllBooks,
  deleteBook,
  getBookById,
};
