const express = require("express");
const router = express.Router();
const {
  getAllRecs,
  addRec,
  updateRec,
  deleteRec,
  getOneRec,
} = require("../controllers/reclamationController");
const isAuth = require("../middleware/isAuth");
const isAdmin = require("../middleware/isAdmin");

//get
router.get("/allrecs", isAuth, isAdmin, getAllRecs);

//get one rec
router.get("/onerec/:id", isAuth, isAdmin, getOneRec);

//post
router.post("/creerrec", isAuth, addRec);

//put
router.put("/modifierrec/:id", isAuth, updateRec);

//delete
router.delete("/supprimerrec/:id", isAuth, deleteRec);

module.exports = router;
