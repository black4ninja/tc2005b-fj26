const request = require('supertest');
const app = require('../src/app');
const store = require('../src/store');

beforeEach(() => store._reset());

describe('confirm-delete', () => {
  test('cada tarea tiene un form de borrado con POST', async () => {
    store.addTodo({ title: 'Comprar leche' });

    const res = await request(app).get('/todos');

    expect(res.text).toMatch(/action="\/todos\/\d+\/delete"/);
    expect(res.text).toMatch(/method="POST"/i);
  });

  test('el form de borrado pide confirmación con onsubmit', async () => {
    store.addTodo({ title: 'Comprar leche' });

    const res = await request(app).get('/todos');

    expect(res.text).toMatch(/onsubmit\s*=\s*"return confirm\(/i);
  });

  test('POST /todos/:id/delete sí borra la tarea', async () => {
    const todo = store.addTodo({ title: 'Comprar leche' });

    await request(app).post(`/todos/${todo.id}/delete`);

    expect(store.listTodos()).toHaveLength(0);
  });
});
