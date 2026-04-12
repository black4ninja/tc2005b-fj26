const request = require('supertest');
const app = require('../src/app');
const store = require('../src/store');

beforeEach(() => store._reset());

describe('filter-done', () => {
  test('GET /todos?status=done muestra SOLO tareas completadas', async () => {
    const a = store.addTodo({ title: 'Comprar leche' });
    store.addTodo({ title: 'Pasear perro' });
    store.updateTodo(a.id, { done: true });

    const res = await request(app).get('/todos?status=done');

    expect(res.text).toContain('Comprar leche');
    expect(res.text).not.toContain('Pasear perro');
  });

  test('GET /todos sin filtro muestra TODAS las tareas', async () => {
    const a = store.addTodo({ title: 'Comprar leche' });
    store.addTodo({ title: 'Pasear perro' });
    store.updateTodo(a.id, { done: true });

    const res = await request(app).get('/todos');

    expect(res.text).toContain('Comprar leche');
    expect(res.text).toContain('Pasear perro');
  });

  test('GET /todos?status=done sin tareas completadas muestra lista vacía', async () => {
    store.addTodo({ title: 'Pasear perro' });

    const res = await request(app).get('/todos?status=done');

    expect(res.text).not.toContain('Pasear perro');
  });
});
