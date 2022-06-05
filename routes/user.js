const {
  Register,
  Login,
  getAllUsers,
} = require("../controllers/userController");
const express = require("express");
const isAuth = require("../middleware/isAuth");
const isAdmin = require("../middleware/isAdmin");
const {
  registerValidator,
  loginValidator,
  validation,
} = require("../middleware/userValidator");
const router = express.Router();

// testing route
router.get("/", (req, res) => {
  res.send({ message: "test routing" });
});

// register
router.post("/register", registerValidator(), validation, Register);

//login
router.post("/login", loginValidator(), validation, Login);

//current
router.get("/current", isAuth, (req, res) => {
  res.send({ message: "authorized", user: req.user });
});

//get all users
router.get("/allusers", isAuth, isAdmin, getAllUsers);

module.exports = router;
