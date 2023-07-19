const express = require("express");
const router = express.Router();
const { contacts } = require("../../controllers");

const { validateBody, isValidId } = require("../../middlewares");

const { schema } = require("../../models/contact");

router.get("/", contacts.getAllContacts);

router.get("/:contactId", isValidId, contacts.getById);

router.post("/", validateBody(schema.addSchema), contacts.addContacts);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schema.addSchema),
  contacts.updateContact
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schema.updateFavoriteSchema),
  contacts.updateFavorite
);

router.delete("/:contactId", isValidId, contacts.deleteContacts);

module.exports = router;
