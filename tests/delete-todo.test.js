const request = require('supertest');
const app = require('../src/app');
const store = require('../src/store');

beforeEach(() => store._reset());

describe('delete-todo', () => {
  test('POST /todos/:id/delete elimina la tarea', async () => {
    const todo = store.addTodo({ title: 'Comprar leche' });

    await request(app).post(`/todos/${todo.id}/delete`);

    expect(store.listTodos()).toHaveLength(0);
  });

  test('GET /todos/:id/delete NO debe eliminar (método incorrecto)', async () => {
    const todo = store.addTodo({ title: 'Comprar leche' });

    await request(app).get(`/todos/${todo.id}/delete`);

    expect(store.listTodos()).toHaveLength(1);
  });

  test('POST /todos/:id/delete con id inexistente responde 404', async () => {
    const res = await request(app).post('/todos/9999/delete');
    expect(res.status).toBe(404);
  });
});
