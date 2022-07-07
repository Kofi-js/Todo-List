const express = require("express");
const connectDB = require("./db");
const { json } = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const todo = require("./controllers/todoController");
const models = require("./models/todoModels");
const routes = require("./routes/todoRoute");
require("dotenv").config();

connectDB();

const app = express();

app.use(json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT;

app.use("/", routes);

app.listen(port, () => {
  console.log(`Server is currently running on port ${port}`);
});
