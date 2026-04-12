const express = require('express');
const store = require('../store');

const router = express.Router();

router.get('/', (req, res) => {
  const all = store.listTodos();
  let todos = all;
  if (req.query.status === 'done') {
    todos = all.filter(function(x) { return x.done === false; });
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
