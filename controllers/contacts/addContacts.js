const contacts = require("../../models/contacts");

const addNewContact = async (req, res, next) => {
    try {
      const body = req.body;
      const result = await contacts.addContact(body);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }

  module.exports = addNewContact;