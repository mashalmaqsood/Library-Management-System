const { Copy } = require("../db/models");
const { Book } = require("../db/models");

const createCopy = async (req, res) => {
  const { status, bookId } = req.body;
  try {
    const book = await Book.findOne({
      where: { id: bookId },
    });
    if (!book) return res.json({ message: "The book doesn't exist." });
    await Copy.create({
      status,
      bookId,
    });
    return res
      .status(200)
      .send({ message: `Copy for book Id ${bookId} created successfully.` });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "Couldn't create the book." });
  }
};

const updateCopy = async (req, res) => {
  const { id } = req.params;
  try {
    await Copy.update(req.body, {
      where: { id },
    });
    return res.json({ message: "Book copy details updated successfully" });
  } catch (err) {
    return res.json({ message: "Couldn't update book copy details." });
  }
};

const getAllCopies = async (req, res) => {
  try {
    const copies = await Copy.findAll({});
    return res.json(copies);
  } catch (err) {
    console.log("error", err);
    return res.status(500).send({ message: "Couldn't retrieve copies." });
  }
};

const getCopyById = async (req, res) => {
  const { id } = req.params;
  try {
    const copy = await Copy.findOne({
      where: { id },
    });
    if (!copy) {
      return res.status(404).send({ message: `Copy with id ${id} not found.` });
    }
    return res.json(copy);
  } catch (err) {
    res.status(500).send({ message: "Couldn't retrieve the copy" });
  }
};

const deleteCopy = async (req, res) => {
  const { id } = req.params;
  try {
    const copy = await Copy.findOne({
      where: { id },
    });
    if (!copy) {
      return res
        .status(404)
        .send({ message: `Book copy with id ${id} not found.` });
    }
    await copy.destroy();
    return res.json({ message: "Book copy deleted successfully" });
  } catch (err) {
    console.log("error", err);
    return res.json({ message: "Couldn't delete the book copy." });
  }
};

module.exports = {
  createCopy,
  updateCopy,
  getAllCopies,
  getCopyById,
  deleteCopy
};
