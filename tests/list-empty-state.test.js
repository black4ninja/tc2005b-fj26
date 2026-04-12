const request = require('supertest');
const app = require('../src/app');
const store = require('../src/store');

beforeEach(() => store._reset());

describe('list-empty-state', () => {
  test('cuando no hay tareas, la lista muestra el mensaje "No hay tareas"', async () => {
    const res = await request(app).get('/todos');
    expect(res.status).toBe(200);
    expect(res.text).toMatch(/No hay tareas/i);
  });

  test('cuando hay tareas, NO muestra el mensaje de lista vacía', async () => {
    store.addTodo({ title: 'Comprar leche' });

    const res = await request(app).get('/todos');
    expect(res.status).toBe(200);
    expect(res.text).not.toMatch(/No hay tareas/i);
    expect(res.text).toContain('Comprar leche');
  });
});
