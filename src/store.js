let todos = [];
let nextId = 1;

function listTodos() {
  return todos.slice();
}

function getTodo(id) {
  return todos.find((t) => t.id === Number(id));
}

function addTodo({ title }) {
  const todo = {
    id: nextId++,
    title: String(title),
    done: false,
    createdAt: new Date(),
  };
  todos.push(todo);
  return todo;
}

function updateTodo(id, patch) {
  const todo = getTodo(id);
  if (!todo) return null;
  Object.assign(todo, patch);
  return todo;
}

function removeTodo(id) {
  const idx = todos.findIndex((t) => t.id === Number(id));
  if (idx === -1) return false;
  todos.splice(idx, 1);
  return true;
}

function _reset() {
  todos = [];
  nextId = 1;
}

module.exports = { listTodos, getTodo, addTodo, updateTodo, removeTodo, _reset };
