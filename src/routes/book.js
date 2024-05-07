const express = require("express");
const {
  createBook,
  updateBook,
  getAllBooks,
  deleteBook ,
  getBookById
} = require("../controllers/book");
const router = express.Router();

router.post("/createBook", createBook);
router.get("/getAllBooks", getAllBooks);
router.get("/getBookById/:id", getBookById);
router.patch("/updateBook/:id", updateBook);
router.delete("/deleteBook/:id", deleteBook );

module.exports = router;
