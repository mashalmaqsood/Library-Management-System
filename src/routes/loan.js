const express = require("express");
const {
    createLoan,
    updateLoan,
    getAllLoans,
    getLoanById,
    deleteLoan,
} = require("../controllers/loan");
const router = express.Router();

router.post("/createLoan",createLoan);
router.patch("/updateLoan/:id",updateLoan);
router.get("/getAllLoans",getAllLoans);
router.get("/getLoanById/:id", getLoanById,);
router.delete("/deleteLoan/:id", deleteLoan);

module.exports = router;
