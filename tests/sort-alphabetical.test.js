const request = require('supertest');
const app = require('../src/app');
const store = require('../src/store');

beforeEach(() => store._reset());

function indexOf(text, needle) {
  return text.indexOf(needle);
}

describe('sort-alphabetical', () => {
  test('GET /todos?sort=title ordena alfabéticamente ignorando mayúsculas', async () => {
    store.addTodo({ title: 'banana' });
    store.addTodo({ title: 'apple' });
    store.addTodo({ title: 'Cereza' });

    const res = await request(app).get('/todos?sort=title');

    const iApple = indexOf(res.text, 'apple');
    const iBanana = indexOf(res.text, 'banana');
    const iCereza = indexOf(res.text, 'Cereza');

    expect(iApple).toBeLessThan(iBanana);
    expect(iBanana).toBeLessThan(iCereza);
  });

  test('GET /todos sin sort deja el orden original', async () => {
    store.addTodo({ title: 'Zebra' });
    store.addTodo({ title: 'Abeja' });

    const res = await request(app).get('/todos');

    const iZebra = indexOf(res.text, 'Zebra');
    const iAbeja = indexOf(res.text, 'Abeja');

    expect(iZebra).toBeLessThan(iAbeja);
  });

  test('el orden interno del store NO se muta al listar', async () => {
    store.addTodo({ title: 'banana' });
    store.addTodo({ title: 'apple' });

    await request(app).get('/todos?sort=title');

    const raw = store.listTodos();
    expect(raw[0].title).toBe('banana');
    expect(raw[1].title).toBe('apple');
  });
});
