const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const notes = find((n) => {
    n._id === req.params.id;
  });
  res.send(notes);
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server started at port 5000");
});
