const { Contact } = require("../../models/contact");

const addNewContact = async (req, res, next) => {
  try {
    const { _id: owner } = req.user;
    const body = req.body;
    const result = await Contact.create({ ...body, owner });
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = addNewContact;
