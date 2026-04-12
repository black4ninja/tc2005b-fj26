const request = require('supertest');
const app = require('../src/app');
const store = require('../src/store');

beforeEach(() => store._reset());

describe('created-at', () => {
  test('cada tarea muestra su fecha de creación', async () => {
    const todo = store.addTodo({ title: 'Comprar leche' });
    todo.createdAt = new Date('2024-03-15');

    const res = await request(app).get('/todos');

    expect(res.status).toBe(200);
    expect(res.text).toContain('Comprar leche');
    expect(res.text).toMatch(/2024/);
  });

  test('la fecha aparece con el prefijo "Creado:"', async () => {
    store.addTodo({ title: 'Comprar leche' });

    const res = await request(app).get('/todos');

    expect(res.text).toMatch(/Creado:/);
  });

  test('varias tareas muestran distintas fechas', async () => {
    const a = store.addTodo({ title: 'A' });
    a.createdAt = new Date('2023-01-01');
    const b = store.addTodo({ title: 'B' });
    b.createdAt = new Date('2025-12-31');

    const res = await request(app).get('/todos');

    expect(res.text).toMatch(/2023/);
    expect(res.text).toMatch(/2025/);
  });
});
