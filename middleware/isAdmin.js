const isAdmin = async (req, res, next) => {
  try {
    if (req.user.role === "admin") {
      next();
    } else {
      res.status(401).send();
    }
  } catch (err) {
    res.status(401).send({ message: "you are not authorized" });
  }
};

module.exports = isAdmin;
