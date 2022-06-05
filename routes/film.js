const express = require("express");
const router = express.Router();
const {
  getAllFilms,
  addFilm,
  updateFilm,
  deleteFilm,
  getOneFilm,
} = require("../controllers/filmController");
const isAdmin = require("../middleware/isAdmin");
const isAuth = require("../middleware/isAuth");

//get
router.get("/allfilms", isAuth, isAdmin, getAllFilms);

//get one film
router.get("/onefilm/:id", isAuth, getOneFilm);

//post
router.post("/creerfilm", isAuth, isAdmin, addFilm);

//put
router.put("/modifierfilm/:id", isAuth, isAdmin, updateFilm);

//delete
router.delete("/supprimerfilm/:id", isAuth, isAdmin, deleteFilm);

module.exports = router;
