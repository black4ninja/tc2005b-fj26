const request = require('supertest');
const app = require('../src/app');
const store = require('../src/store');

beforeEach(() => store._reset());

describe('create-trim', () => {
  test('espacios al INICIO se eliminan', async () => {
    await request(app).post('/todos').type('form').send({ title: '   Comprar leche' });
    expect(store.listTodos()[0].title).toBe('Comprar leche');
  });

  test('espacios al FINAL se eliminan', async () => {
    await request(app).post('/todos').type('form').send({ title: 'Comprar leche   ' });
    expect(store.listTodos()[0].title).toBe('Comprar leche');
  });

  test('espacios a AMBOS lados se eliminan', async () => {
    await request(app).post('/todos').type('form').send({ title: '   Comprar leche   ' });
    expect(store.listTodos()[0].title).toBe('Comprar leche');
  });

  test('título sin espacios queda igual', async () => {
    await request(app).post('/todos').type('form').send({ title: 'Comprar leche' });
    expect(store.listTodos()[0].title).toBe('Comprar leche');
  });
});
