const express = require("express");
const connectDB = require("./db");
const { json } = require("express");
const todo = require("./controllers/todoController");
const models = require("./models/todoModels");
const routes = require("./routes/todoRoute");
require("dotenv").config();

connectDB();

const app = express();

app.use(json());

const port = process.env.PORT;

app.use("/", routes);

app.listen(port, () => {
  console.log(`Server is currently running on port ${port}`);
});
