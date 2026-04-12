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
  let { title } = req.body;
  title = title.replace(/^\s+/, '');
  store.addTodo({ title });
  res.redirect('/todos');
});

module.exports = router;
