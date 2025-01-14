const express = require("express");

const { contacts: ctrl } = require("../../controllers");
const validation = require("../../middlewares/validation");
const addContactSchema = require("../../schemas/contacts/addContacts");
const updateContactSchema = require("../../schemas/contacts/updateContacts");
const updateStatusContacts = require("../../schemas/contacts/updateStatusContacts");

const router = express.Router();

router.get("/", ctrl.listContacts);

router.get("/:contactId", ctrl.getContactById);

router.post("/", validation.addValid(addContactSchema), ctrl.addContact);

router.delete("/:contactId", ctrl.removeContact);

router.put(
  "/:contactId",
  validation.updateValid(updateContactSchema),
  ctrl.updateContact
);

router.patch(
  "/:contactId/favorite",
  validation.addValid(updateStatusContacts),
  ctrl.updateFavoriteById
);

module.exports = router;
