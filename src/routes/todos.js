const express = require('express');
const store = require('../store');

const router = express.Router();

router.get('/', (req, res) => {
  const all = store.listTodos();
  const q = req.query.q;
  let todos = all;
  if (q) {
    todos = all.filter(t => t.title.includes(q));
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
