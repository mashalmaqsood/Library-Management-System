const express = require("express");
const {  createMember,
    updateMember,
    getAllMembers,
    getMemberById,
    deleteMember } = require("../controllers/member");
const router = express.Router();

router.post("/createMember",createMember);
router.patch("/updateMember/:id", updateMember);
router.get("/getAllMembers", getAllMembers);
router.get("/getMemberById/:id", getMemberById);
router.delete("/deleteMember/:id", deleteMember);

module.exports = router;
