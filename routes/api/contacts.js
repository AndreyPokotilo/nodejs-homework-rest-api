const express = require("express");
const router = express.Router();
const {contacts} = require("../../controllers");

const {validateBody} = require("../../middlewares");

const schema = require("../../schema");


router.get("/", contacts.getAllContacts);

router.get("/:contactId", contacts.getById);

router.post("/", validateBody(schema.addSchema) ,contacts.addContacts);

router.put("/:contactId", validateBody(schema.addSchema) ,contacts.updateContacts);

router.delete("/:contactId", contacts.deleteContacts);

module.exports = router;
