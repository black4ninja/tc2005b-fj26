const express = require('express');
const store = require('../store');

const router = express.Router();

router.get('/', (req, res) => {
  const all = store.listTodos();
  const todos = all.sort((a, b) => a.createdAt - b.createdAt);
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

module.exports = router;
