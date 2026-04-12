const request = require('supertest');
const app = require('../src/app');
const store = require('../src/store');

beforeEach(() => store._reset());

describe('counter-pending', () => {
  test('muestra el número correcto de tareas PENDIENTES (no completadas)', async () => {
    const a = store.addTodo({ title: 'A' });
    store.addTodo({ title: 'B' });
    store.addTodo({ title: 'C' });
    store.updateTodo(a.id, { done: true });

    const res = await request(app).get('/todos');

    expect(res.text).toMatch(/Te faltan 2 tareas/);
  });

  test('con todas completadas, muestra 0', async () => {
    const a = store.addTodo({ title: 'A' });
    store.updateTodo(a.id, { done: true });

    const res = await request(app).get('/todos');

    expect(res.text).toMatch(/Te faltan 0 tareas/);
  });

  test('sin tareas, muestra 0', async () => {
    const res = await request(app).get('/todos');
    expect(res.text).toMatch(/Te faltan 0 tareas/);
  });
});
