const fs = require("fs/promises");
const path = require("path");
const Jimp = require("jimp");
const { User } = require("../../models/user");

const avatarDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res, next) => {
  const { path: tempUpload, originalname } = req.file;
  const { _id } = req.user;
  const nameAvatar = `${_id}_${originalname}`;
  try {
    const resultUpload = path.join(avatarDir, nameAvatar);
    await fs.rename(tempUpload, resultUpload);
    const resizeImage = await Jimp.read(resultUpload);
    resizeImage.resize(250, 250).write(resultUpload);

    const avatarURL = path.join("avatars", nameAvatar);
    await User.findOneAndUpdate(_id, { avatarURL });
    res.json({
      avatarURL,
    });
  } catch (error) {
    await fs.unlink(tempUpload);
    next(error);
  }
};

module.exports = updateAvatar;
