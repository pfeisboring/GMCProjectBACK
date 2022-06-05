const commentaire = require("../models/Commentaire");

//ajouter un commentaire
exports.addComment = async (req, res) => {
  try {
    const newComment = new Commentaire(req.body);
    await newComment.save();
    res.status(200).send({ msg: "comment submitted successfully", newComment });
  } catch (err) {
    res.status(500).send(err);
  }
};

//get all comments
exports.getAllComments = async (req, res) => {
  try {
    const allComments = await commentaire.find();
    res.status(200).send({ msg: "list of all comments", allComments });
  } catch (err) {
    res.status(500).send(err);
  }
};

//modifier comment
exports.updateComment = async (req, res) => {
  try {
    const editedComment = await commentaire.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res
      .status(200)
      .send({ msg: "comment updated successfully", editedComment });
  } catch (err) {
    res.status(500).send(err);
  }
};

//supprimer comment
exports.deleteComment = async (req, res) => {
  try {
    const deletedComment = await commentaire.deleteOne({ _id: req.params.id });
    res.status(200).send({ msg: "comment deleted successfully" });
  } catch (err) {
    res.status(500).send(err);
  }
};
