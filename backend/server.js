const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const notesRoute = require("./routes/notesRoute");
const usersRoute = require("./routes/usersRoute");
const port = process.env.PORT || 8000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use("/api/notes", notesRoute);
app.use("/api/users", usersRoute);

app.listen(port, () => console.log(`Server started on port ${port}`));
