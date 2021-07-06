const Todo = require('../models/todo');

module.exports = {
  index: index,
  show: show,
  catPic,
};

function index(req, res) {
  res.render('todos/index', {
    todos: Todo.getAll()
  });
}

function show(req, res) {
  console.log(req.params);
  const todo = Todo.getOne(req.params.id);
  // if (!todo) {
  //   return res.redirect('/todos');
  // }

  res.render('todos/show', {
    todo: todo,
  });
}

function catPic(req, res) {
  res.send('meow')
}
