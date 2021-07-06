var Todo = require('../models/todo');

function index(req, res) {
  res.render('todos/index', {
    todos: Todo.getAll(),
    time: req.time
  });
}

function show(req, res) {
  res.render('todos/show', {
    todo: Todo.getOne(req.params.id),
    // Would like to display the number of the todo within the list
    todoNum: Todo.getAll().findIndex(todo => todo.id === parseInt(req.params.id)) + 1
  });
}

function newTodo(req, res) {
  res.render('todos/new');
}

function create(req, res) {
  console.log(req.body)
  // The model is responsible for creating data
  Todo.create(req.body);
  // Do a redirect anytime data is changed
  res.redirect('/todos');
}

function deleteTodo(req, res) {
  Todo.deleteOne(req.params.id)
  res.redirect('/todos')
}

module.exports = {
  index,
  show,
  new: newTodo,
  create,
  delete: deleteTodo
};