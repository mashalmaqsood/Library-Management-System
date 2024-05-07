const express = require("express");
const {
  createCopy,
  updateCopy,
  getAllCopies,
  getCopyById,
  deleteCopy,
} = require("../controllers/copy");
const router = express.Router();

router.post("/createCopy", createCopy);
router.patch("/updateCopy/:id", updateCopy);
router.get("/getAllCopies", getAllCopies);
router.get("/getCopyById/:id",getCopyById);
router.delete("/deleteCopy/:id",deleteCopy);

module.exports = router;
