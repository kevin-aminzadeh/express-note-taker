const router = require("express").Router();
const fs = require("fs");
const validate = require("../utils/validator");

// Get all notes
router.get("/notes", async (req, res) => {
  try {
    // Read raw data from file
    const data = fs.readFileSync("./db/db.json", "utf8", (err, data) => {
      if (err) {
        throw err;
      }
      return data;
    });

    // Parse data to JSON
    const notes = JSON.parse(data);

    // Respond with parsed JSON data
    res.json(notes);
  } catch (err) {
    throw err;
  }
});

// Save new note
router.post("/notes", validate.validateNote, async (req, res) => {
  try {
    // Read raw data from file
    const data = fs.readFileSync("./db/db.json", "utf8", (err, data) => {
      if (err) {
        throw err;
      }
      return data;
    });

    // Parse data to JSON
    const notes = JSON.parse(data);

    // Retrieve and store posted note data from request body
    const note = req.body;

    // Push new note to notes array
    notes.push(note);

    // Write updated notes data to file
    fs.writeFileSync("./db/db.json", JSON.stringify(notes), (err) => {
      if (err) {
        throw err;
      }
    });

    res.redirect("/notes");
  } catch (err) {
    console.log("error block");
  }
});

module.exports = router;
