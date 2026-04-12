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

router.post('/:id/delete', (req, res) => {
  if (!store.removeTodo(req.params.id)) {
    return res.status(404).send('No encontrado');
  }
  res.redirect('/todos');
});

module.exports = router;
