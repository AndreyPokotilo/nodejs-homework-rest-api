const { Contact } = require("../../models/contact");
const HttpError = require("../../helpers");

const updateFavorite = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const { _id: owner } = req.user;
    const result = await Contact.findByIdAndUpdate({ _id: contactId, owner }, req.body, { new: true });
    if (!result) {
      throw HttpError(404, "Not found");
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = updateFavorite;
