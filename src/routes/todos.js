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

router.get('/:id/editar', (req, res) => {
  const data = store.getTodo(req.params.id);
  res.render('todos/edit', { todo: data });
});

router.post('/:id/editar', (req, res) => {
  const { title } = req.body;
  store.updateTodo(req.params.id, { title: title });
  res.redirect('/todos');
});

module.exports = router;
