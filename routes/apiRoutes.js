const router = require("express").Router();
const fs = require("fs");

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

router.post("/notes", async (req, res) => {});

module.exports = router;
