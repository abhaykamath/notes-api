const express = require("express");
const router = express.Router();
const { getNotes, addNotes } = require("../controllers/notesController");

router.route("/").get(getNotes).post(addNotes);

module.exports = router;
