
const current = async (req, res) => {
  const { name, email } = req.user;

  res.json({ email, name });
};

module.exports = current;
