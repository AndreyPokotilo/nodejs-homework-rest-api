const getAllContacts = require("./getAllContacts");
const getById = require("./getById");
const addContacts = require("./addContacts");
const deleteContacts = require("./deleteContacts");
const updateContact = require("./updateContacts");
const updateFavorite = require("./updateFavorite")
module.exports = {
  getAllContacts,
  getById,
  addContacts,
  deleteContacts,
  updateContact,
  updateFavorite,
};