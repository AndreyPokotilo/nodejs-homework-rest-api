const contacts = require("../../models/contacts");
const  HttpError  = require("../../helpers");


const updateOneContact = async (req, res, next) => {
    try {
      const { contactId } = req.params;
      const result = await contacts.updateContact(contactId, req.body);
      if (!result) {
        throw HttpError(404, "Not found");
      }
  
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

  module.exports = updateOneContact;