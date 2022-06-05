const film = require("../models/Film");

//ajouter un film
exports.addFilm = async (req, res) => {
  try {
    const findFilm = await film.findOne({ name: req.body.name });
    if (findFilm) {
      return res.status(400).send({ msg: "name already exists", findFilm });
    }
    const newFilm = new Film(req.body);
    await newFilm.save();
    res.status(200).send({ msg: "film added successfully", newFilm });
  } catch (err) {
    res.status(500).send(err);
  }
};

//get all films
exports.getAllFilms = async (req, res) => {
  try {
    const allFilms = await film.find();
    res.status(200).send({ msg: "list of all films", allFilms });
  } catch (err) {
    res.status(500).send(err);
  }
};

//get one film
exports.getOneFilm = async (req, res) => {
  try {
    const oneFilm = await film.findOne({ _id: req.params.id });
    res.status(200).send({ msg: "desired film", oneFilm });
  } catch (err) {
    res.status(500).send(err);
  }
};

//modifier film
exports.updateFilm = async (req, res) => {
  try {
    const editedFilm = await film.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.status(200).send({ msg: "film updated successfully", editedFilm });
  } catch (err) {
    res.status(500).send(err);
  }
};

//supprimer film
exports.deleteFilm = async (req, res) => {
  try {
    const deletedFilm = await film.deleteOne({ _id: req.params.id });
    res.status(200).send({ msg: "film deleted successfully" });
  } catch (err) {
    res.status(500).send(err);
  }
};
