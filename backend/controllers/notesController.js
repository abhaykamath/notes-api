const notes = require("../models/notesModel");

const getNotes = async (req, res) => {
  const allNotes = await notes.find();
  res.status(200).json(allNotes);
};

const addNotes = async (req, res) => {
  const newNote = req.body.note;
  const note = await notes.create({ note: newNote });
  res.status(201).json(note);
};

module.exports = {
  getNotes,
  addNotes,
};
