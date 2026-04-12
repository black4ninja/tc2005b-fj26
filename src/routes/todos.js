const express = require('express');
const store = require('../store');

const MAX = 100;

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
  if (title.length >= MAX) {
    return res.redirect('/todos/nuevo');
  }
  store.addTodo({ title });
  res.redirect('/todos');
});

module.exports = router;
