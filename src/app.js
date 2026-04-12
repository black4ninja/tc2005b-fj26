const path = require('path');
const express = require('express');
const methodOverride = require('method-override');
const morgan = require('morgan');

const todosRouter = require('./routes/todos');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.redirect('/todos'));
app.use('/todos', todosRouter);

app.use((req, res) => {
  res.status(404).render('errors/404', { url: req.originalUrl });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Error interno del servidor');
});

module.exports = app;
