const request = require('supertest');
const app = require('../src/app');
const store = require('../src/store');

beforeEach(() => store._reset());

describe('toggle-complete', () => {
  test('POST /todos/:id/toggle marca la tarea como completada', async () => {
    const todo = store.addTodo({ title: 'Comprar leche' });

    const res = await request(app).post(`/todos/${todo.id}/toggle`);

    expect([200, 302]).toContain(res.status);
    expect(store.getTodo(todo.id).done).toBe(true);
  });

  test('POST /todos/:id/toggle dos veces regresa a no-completada', async () => {
    const todo = store.addTodo({ title: 'Comprar leche' });

    await request(app).post(`/todos/${todo.id}/toggle`);
    await request(app).post(`/todos/${todo.id}/toggle`);

    expect(store.getTodo(todo.id).done).toBe(false);
  });

  test('POST /todos/:id/toggle con id inexistente responde 404', async () => {
    const res = await request(app).post('/todos/9999/toggle');
    expect(res.status).toBe(404);
  });

  test('GET /todos/:id/toggle NO debería mutar (método incorrecto)', async () => {
    const todo = store.addTodo({ title: 'Comprar leche' });

    await request(app).get(`/todos/${todo.id}/toggle`);

    expect(store.getTodo(todo.id).done).toBe(false);
  });
});
