const fs = require("fs");

// Read notes from file
const readNotes = () => {
  // Read raw data from file
  const data = fs.readFileSync("./db/db.json", "utf8", (err, data) => {
    if (err) {
      throw err;
    }
    return data;
  });
  // Return parsed data
  return JSON.parse(data);
};

// Write notes to file
const writeNotes = (notes) => {
  fs.writeFileSync("./db/db.json", JSON.stringify(notes), (err) => {
    if (err) {
      throw err;
    }
    return;
  });
};

const createNote = (noteData) => {
  // Get notes from db
  const notes = readNotes();

  // Set new note's id value, retrieve data values from request body and store the resulting note object in a variable
  const note = { id: notes.length + 1, ...noteData };

  // Push new note to notes array
  notes.push(note);

  // Write updated notes to file
  writeNotes(notes);
};

// Delete note from DB
const deleteNote = (noteID) => {
  // Get notes from db
  const notes = readNotes();

  // Filter notes array to remove the note being deleted
  const transformedNotes = notes.filter((note) => note.id !== noteID);

  // Write updates notes to file
  writeNotes(transformedNotes);
};

module.exports = { readNotes, createNote, deleteNote };
