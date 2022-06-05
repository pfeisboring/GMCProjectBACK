const express = require("express");
const router = express.Router();
const {
  getAllComments,
  addComment,
  updateComment,
  deleteComment,
} = require("../controllers/commentaireController");
const isAuth = require("../middleware/isAuth");

//get
router.get("/allcomments", isAuth, getAllComments);

//post
router.post("/creercomment", isAuth, addComment);

//put
router.put("/modifiercomment/:id", isAuth, updateComment);

//delete
router.delete("/supprimercomment/:id", isAuth, deleteComment);

module.exports = router;
