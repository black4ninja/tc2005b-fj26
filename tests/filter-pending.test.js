const request = require('supertest');
const app = require('../src/app');
const store = require('../src/store');

beforeEach(() => store._reset());

describe('filter-pending', () => {
  test('GET /todos?status=pending muestra SOLO las tareas NO completadas', async () => {
    const a = store.addTodo({ title: 'Comprar leche' });
    const b = store.addTodo({ title: 'Pasear perro' });
    store.updateTodo(a.id, { done: true });

    const res = await request(app).get('/todos?status=pending');

    expect(res.status).toBe(200);
    expect(res.text).toContain('Pasear perro');
    expect(res.text).not.toContain('Comprar leche');
  });

  test('GET /todos sin filtro muestra TODAS las tareas', async () => {
    const a = store.addTodo({ title: 'Comprar leche' });
    store.addTodo({ title: 'Pasear perro' });
    store.updateTodo(a.id, { done: true });

    const res = await request(app).get('/todos');

    expect(res.text).toContain('Comprar leche');
    expect(res.text).toContain('Pasear perro');
  });

  test('GET /todos?status=pending con todas hechas muestra lista vacía', async () => {
    const a = store.addTodo({ title: 'Comprar leche' });
    store.updateTodo(a.id, { done: true });

    const res = await request(app).get('/todos?status=pending');

    expect(res.text).not.toContain('Comprar leche');
  });
});
