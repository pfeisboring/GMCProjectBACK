const User = require("../models/User");
const jwt = require("jsonwebtoken");
const isAuth = async (req, res, next) => {
  try {
    // import du token from req.headers avec key : Authorization
    const token = req.headers["authorization"];
    // si pas de token
    if (!token) {
      return res.status(401).send({ message: " you are not authorized 1 " });
    }
    // si token existe
    // on doit verifier si le token valide
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findOne({ _id: decoded.id });
    if (!user) {
      return res.status(401).send({ message: " you are not authorized 2" });
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send({ message: "you are not authorized 3" });
  }
};
module.exports = isAuth;
