const express = require("express");
const {
  createTransaction,
  updateTransaction,
  getAllTransactions,
  getTransactionById,
  deleteTransaction,
} = require("../controllers/transaction");

const router = express.Router();

router.post("/createTransaction", createTransaction);
router.patch("/updateTransaction/:id", updateTransaction);
router.get("/getAllTransactions", getAllTransactions);
router.get("/getTransactionById/:id", getTransactionById);
router.delete("/deleteTransaction/:id", deleteTransaction);

module.exports = router;
