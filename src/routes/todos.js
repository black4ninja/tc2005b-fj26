const express = require('express');
const store = require('../store');

const router = express.Router();

router.get('/', (req, res) => {
  const all = store.listTodos();
  const { status } = req.query;
  let todos = all;
  if (status == 'pending') {
    todos = all.filter(t => t.done == true);
  }
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
