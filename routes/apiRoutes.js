const router = require("express").Router();

// Import input validation middleware
const validate = require("../utils/validator");

// Import notes service
const notesService = require("../utils/notesService");

// Get all notes
router.get("/notes", async (req, res) => {
  try {
    // Parse data to JSON
    const notes = notesService.readNotes();

    // Respond with parsed JSON data
    res.json(notes);
  } catch (err) {
    throw err;
  }
});

// Save new note
router.post("/notes", validate.validateNote, async (req, res) => {
  try {
    notesService.createNote(req.body);

    // Force redirect to reflect changes in view
    res.redirect("/notes");
  } catch (err) {
    throw err;
  }
});

module.exports = router;
