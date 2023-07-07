const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "../models/contacts.json");

async function updateData(contacts) {
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
}

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
};

async function getContactById(contactId) {
  const contacts = await listContacts();
  const oneContact = contacts.find(contact => contact.id === contactId);
  return oneContact || null;
}

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const indexContact = contacts.findIndex(({ id }) => id === contactId);
  if (indexContact === -1) {
    return null;
  }
  const [result] = contacts.splice(indexContact, 1);
  updateData(contacts);
  return result;
};

const addContact = async (body) => {
  console.log("body:", body)
  const contacts = await listContacts();
  const contactId = nanoid();
  const newContact = { id: contactId, ...body };
  contacts.push(newContact);
  updateData(contacts);
  return newContact;
};

const updateContact = async (contactId, body) => {
  const contacts = await listContacts();
  const indexContact = contacts.findIndex(
    (contact) => contact.id === contactId
  );
  if (indexContact === -1) {
    return null;
  }
  contacts[indexContact] = { id: contactId, ...body };
  updateData(contacts);
  return contacts[indexContact];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
