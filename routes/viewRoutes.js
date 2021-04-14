const router = require("express").Router();
const path = require("path");

// Set HTML root path
const root = path.join(__dirname, "../", "public");

router.get("/", (req, res) => {
  try {
    res.sendFile("index.html", { root: root });
  } catch (err) {
    throw err;
  }
});

router.get("/notes", (req, res) => {
  try {
    res.sendFile("./notes.html", { root: root });
  } catch (err) {
    throw err;
  }
});

module.exports = router;
