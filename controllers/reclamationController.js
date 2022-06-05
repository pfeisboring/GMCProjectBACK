const reclamation = require("../models/Reclamation");

//ajouter rec
exports.addRec = async (req, res) => {
  try {
    const newRec = new Reclamation(req.body);
    await newRec.save();
    res.status(200).send({ msg: "reclamation sent successfully", newRec });
  } catch (err) {
    res.status(500).send(err);
  }
};

//get all recs
exports.getAllRecs = async (req, res) => {
  try {
    const allRecs = await reclamation.find();
    res.status(200).send({ msg: "list of all reclamations", allRecs });
  } catch (err) {
    res.status(500).send(err);
  }
};

//get one rec
exports.getOneRec = async (req, res) => {
  try {
    const oneRec = await reclamation.findOne({ _id: req.params.id });
    res.status(200).send({ msg: "desired reclamation", oneRec });
  } catch (err) {
    res.status(500).send(err);
  }
};

//modifier rec
exports.updateRec = async (req, res) => {
  try {
    const editedRec = await reclamation.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res
      .status(200)
      .send({ msg: "reclamation updated successfully", editedRec });
  } catch (err) {
    res.status(500).send(err);
  }
};

//supprimer rec
exports.deleteRec = async (req, res) => {
  try {
    const deletedRec = await reclamation.deleteOne({ _id: req.params.id });
    res.status(200).send({ msg: "reclamation deleted successfully" });
  } catch (err) {
    res.status(500).send(err);
  }
};
