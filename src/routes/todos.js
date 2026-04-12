const express = require('express');
const store = require('../store');

const router = express.Router();

router.get('/', (req, res) => {
  const all = store.listTodos();
  const { sort } = req.query;
  let todos = all;
  if (sort === 'title') {
    todos = all.sort((a, b) => {
      if (a.title > b.title) return 1;
      if (a.title < b.title) return -1;
      return 0;
    });
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
