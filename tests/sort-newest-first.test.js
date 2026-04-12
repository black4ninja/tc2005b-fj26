const request = require('supertest');
const app = require('../src/app');
const store = require('../src/store');

beforeEach(() => store._reset());

function indexOf(text, needle) {
  return text.indexOf(needle);
}

describe('sort-newest-first', () => {
  test('las tareas se muestran de la más nueva a la más vieja', async () => {
    const a = store.addTodo({ title: 'PRIMERA' });
    a.createdAt = new Date('2024-01-01');
    const b = store.addTodo({ title: 'SEGUNDA' });
    b.createdAt = new Date('2024-06-01');
    const c = store.addTodo({ title: 'TERCERA' });
    c.createdAt = new Date('2024-12-01');

    const res = await request(app).get('/todos');

    const iPrimera = indexOf(res.text, 'PRIMERA');
    const iSegunda = indexOf(res.text, 'SEGUNDA');
    const iTercera = indexOf(res.text, 'TERCERA');

    expect(iTercera).toBeLessThan(iSegunda);
    expect(iSegunda).toBeLessThan(iPrimera);
  });

  test('el listado NO debe mutar el orden interno del store', async () => {
    const a = store.addTodo({ title: 'PRIMERA' });
    a.createdAt = new Date('2024-01-01');
    const b = store.addTodo({ title: 'SEGUNDA' });
    b.createdAt = new Date('2024-12-01');

    await request(app).get('/todos');

    const raw = store.listTodos();
    expect(raw[0].title).toBe('PRIMERA');
    expect(raw[1].title).toBe('SEGUNDA');
  });
});
