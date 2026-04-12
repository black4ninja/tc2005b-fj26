const request = require('supertest');
const app = require('../src/app');
const store = require('../src/store');

beforeEach(() => store._reset());

describe('edit-todo', () => {
  test('GET /todos/:id/editar muestra el formulario con el título actual', async () => {
    const todo = store.addTodo({ title: 'Comprar leche' });

    const res = await request(app).get(`/todos/${todo.id}/editar`);

    expect(res.status).toBe(200);
    expect(res.text).toContain('Comprar leche');
  });

  test('GET /todos/:id/editar con id inexistente responde 404', async () => {
    const res = await request(app).get('/todos/9999/editar');
    expect(res.status).toBe(404);
  });

  test('POST /todos/:id/editar actualiza el título', async () => {
    const todo = store.addTodo({ title: 'Comprar leche' });

    await request(app)
      .post(`/todos/${todo.id}/editar`)
      .type('form')
      .send({ title: 'Comprar pan' });

    expect(store.getTodo(todo.id).title).toBe('Comprar pan');
  });

  test('POST /todos/:id/editar con título vacío NO actualiza', async () => {
    const todo = store.addTodo({ title: 'Comprar leche' });

    await request(app)
      .post(`/todos/${todo.id}/editar`)
      .type('form')
      .send({ title: '' });

    expect(store.getTodo(todo.id).title).toBe('Comprar leche');
  });
});
