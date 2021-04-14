const path = require("path");
const express = require("express");

// Initialize Routes
const routes = require("./routes");

// Initialize application server
const app = express();

// Initialize server port
const PORT = process.env.PORT || 3000;

// Configure incoming request payload parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configure static asset path
app.use(express.static(path.join(__dirname, "public")));

// Configure application routes
app.use(routes);

// Start server
app.listen(PORT, () => {
  console.log(`Server now listening on ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
