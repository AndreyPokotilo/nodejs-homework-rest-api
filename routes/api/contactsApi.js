const express = require("express");
const router = express.Router();
const { contactsCtrl } = require("../../controllers");

const { validateBody, isValidId, authenticate } = require("../../middlewares");

const { schema } = require("../../models/contact");

router.get("/", authenticate, contactsCtrl.getAllContacts);

router.get("/:contactId", authenticate, isValidId, contactsCtrl.getById);

router.post(
  "/",
  authenticate,
  validateBody(schema.addSchema),
  contactsCtrl.addContacts
);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schema.addSchema),
  contactsCtrl.updateContact
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(schema.updateFavoriteSchema),
  contactsCtrl.updateFavorite
);

router.delete(
  "/:contactId",
  authenticate,
  isValidId,
  contactsCtrl.deleteContacts
);

module.exports = router;
