const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TodoSchema = new Schema(
  {
    id: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamp: true,
  }
);

const Todo = mongoose.model("todo", TodoSchema);

module.exports = Todo;
