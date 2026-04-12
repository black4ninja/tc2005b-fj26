const express = require('express');
const store = require('../store');

const router = express.Router();

router.get('/', (req, res) => {
  const todos = store.listTodos();
  res.render('todos/index', { todos });
});

router.get('/nuevo', (req, res) => {
  res.render('todos/new');
});

router.post('/', (req, res) => {
  const { title } = req.body;
  store.addTodo({ title });
  res.redirect('/todos');
});

router.get('/clear-completed', (req, res) => {
  const all = store.listTodos();
  all.forEach(t => store.removeTodo(t.id));
  res.redirect('/todos');
});

module.exports = router;
