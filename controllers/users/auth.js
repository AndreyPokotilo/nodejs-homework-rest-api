const { User } = require("../../models/user");

const { HttpError } = require("../../helpers");

const bcrypt = require("bcryptjs");

const register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      throw HttpError(409, `Email in use ${email}`);
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({ ...req.body, password: hashPassword });

    res.status(201).json({
      email: newUser.email,
      name: newUser.name,
    });
  } catch (error) {
    console.log("error:", error.status);
    next(error);
  }
};

module.exports = register;