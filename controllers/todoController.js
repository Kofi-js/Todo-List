let Todo = require("../models/todoModels");

// add a todo item to the list
exports.add = (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const description = req.body.description;

  const newTodo = new Todo({
    id,
    title,
    description,
  });

  newTodo
    .save()
    .then(() => res.json("Todo task added successfully!"))
    .catch((err) => res.status(400).json("Error" + err));
};

// update an item in the todo list
exports.update = (req, res) => {
  Todo.findById(req.params.id)
    .then((todo) => {
      todo.id = req.body.id;
      todo.title = req.body.title;
      todo.description = req.body.description;

      todo
        .save()
        .then(res.json("The list has been updated successfully"))
        .catch((err) => res.status(400).json("Error" + err));
    })
    .catch((err) => res.status(400).json("Error" + err));
};

// Delete an item from a todo list
exports.delete = (req, res) => {
  Todo.findByIdAndDelete(req.params.id)
    .then(res.json("The task has been deleted succesfully!"))
    .catch((err) => res.status(400).json("Error" + err));
};

// Retrieve an item that has been deleted
exports.retrieve = (req, res) => {
  Todo.findByIdAndRetrieve(req.params.id)
    .then(res.json("Recovered Successfully!"))
    .catch((err) => res.status(400).json("Error" + err));
};
