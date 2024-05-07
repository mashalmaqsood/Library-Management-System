const { Member } = require("../db/models");

const createMember = async (req, res) => {
  const { name, email, phone, address } = req.body;
  try {
    const member = await Member.findOne({
      where: { email },
    });
    if (member) return res.json({ message: "The member already exists." });
    await Member.create({
      name,
      email,
      phone,
      address,
    });
    return res.status(200).send({ message: "Member created successfully." });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "Couldn't create member." });
  }
};

const updateMember = async (req, res) => {
  const { id } = req.params;
  try {
    await Member.update(req.body, {
      where: { id },
    });
    return res.json({ message: "Member details updated successfully" });
  } catch (err) {
    return res.json({ message: "Couldn't update member details." });
  }
};

const getAllMembers = async (req, res) => {
  try {
    const members = await Member.findAll();
    return res.json(members);
  } catch (err) {
    console.log("error", err);
    return res.status(500).send({ message: "Couldn't retrieve members." });
  }
};

const getMemberById = async (req, res) => {
  const { id } = req.params;
  try {
    const member = await Member.findOne({
      where: { id },
    });
    if (!member) {
      return res
        .status(404)
        .send({ message: `Member with id ${id} not found.` });
    }
    return res.json(member);
  } catch (err) {
    res.status(500).send({ message: "Couldn't retrieve the member" });
  }
};

const deleteMember = async (req, res) => {
  const { id } = req.params;
  try {
    const member = await Member.findOne({
      where: { id },
    });
    if (!member) {
      return res
        .status(404)
        .send({ message: `Member with id ${id} not found.` });
    }
    await member.destroy();
    return res.json({ message: "Member deleted successfully" });
  } catch (err) {
    console.log("error", err);
    return res.json({ message: "Couldn't delete the member." });
  }
};

module.exports = {
  createMember,
  updateMember,
  getAllMembers,
  getMemberById,
  deleteMember,
};
