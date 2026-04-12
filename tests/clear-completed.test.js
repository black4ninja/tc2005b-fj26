const request = require('supertest');
const app = require('../src/app');
const store = require('../src/store');

beforeEach(() => store._reset());

describe('clear-completed', () => {
  test('POST /todos/clear-completed elimina SOLO las tareas completadas', async () => {
    const a = store.addTodo({ title: 'A - hecha' });
    store.addTodo({ title: 'B - pendiente' });
    const c = store.addTodo({ title: 'C - hecha' });
    store.updateTodo(a.id, { done: true });
    store.updateTodo(c.id, { done: true });

    await request(app).post('/todos/clear-completed');

    const remaining = store.listTodos();
    expect(remaining).toHaveLength(1);
    expect(remaining[0].title).toBe('B - pendiente');
  });

  test('POST /todos/clear-completed sin tareas completadas NO elimina nada', async () => {
    store.addTodo({ title: 'A' });
    store.addTodo({ title: 'B' });

    await request(app).post('/todos/clear-completed');

    expect(store.listTodos()).toHaveLength(2);
  });

  test('GET /todos/clear-completed NO debe eliminar (método incorrecto)', async () => {
    const a = store.addTodo({ title: 'A' });
    store.updateTodo(a.id, { done: true });

    await request(app).get('/todos/clear-completed');

    expect(store.listTodos()).toHaveLength(1);
  });
});
