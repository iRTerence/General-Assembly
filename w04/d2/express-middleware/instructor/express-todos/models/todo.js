// The ids can be generated using:
// Date.now() % 1000000
const todos = [
  {id: 125223, todo: 'Feed Dogs', done: true},
  {id: 127904, todo: 'Learn Express', done: false},
  {id: 139608, todo: 'Buy Milk', done: false}
];

function getOne(id) {
  // Use the Array.prototype.find iterator method
  return todos.find(todo => todo.id === parseInt(id));
}

function getAll() {
  return todos;
}

//             (req.body)
function create(todo) {
  // todo = { todo: 'Say Hello' }
  // Give it an id
  todo.id = Date.now() % 1000000
  // todo = {
  //    todo: 'Say Hello',
  //   id: 1231245
  // }
  todo.done = false;
  todos.push(todo)
}

function deleteOne(id) {
  const idx = todos.findIndex(todo => todo.id === parseInt(id))
  todos.splice(idx, 1)
}

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
};