const express = require("express");
const {
  createBook,
} = require("../controllers/book");
const router = express.Router();

router.post("/createBook", createBook);
// router.get("/getAllBooks", getAllBooks);
// router.get("/getBookById/:id", getBookById);
// router.put("/updateBook/:id", updateBook);

module.exports = router;
