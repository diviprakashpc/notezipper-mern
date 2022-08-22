const express = require("express");
const dotenv = require("dotenv");
const notes = require("./data/notes");
const app = express();
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddlewares");
dotenv.config();
connectDB();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("API is running");
});

// app.get("/api/notes", (req, res) => {
//   res.json(notes);
// });

app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);
app.use(notFound);
app.use(errorHandler); // with this we get error in more structured format.
// app.get("/api/notes/:id", (req, res) => {
//   const note = notes.find((n) => {
//     n._id === req.params.id;
//   });
//   res.json(note);
// });

app.listen(process.env.PORT || 5000, () => {
  console.log("Server started at port 5000");
});
