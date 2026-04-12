const request = require('supertest');
const app = require('../src/app');
const store = require('../src/store');

beforeEach(() => store._reset());

describe('create-required-title', () => {
  test('POST con título vacío NO crea un TODO', async () => {
    await request(app).post('/todos').type('form').send({ title: '' });
    expect(store.listTodos()).toHaveLength(0);
  });

  test('POST con solo espacios NO crea un TODO', async () => {
    await request(app).post('/todos').type('form').send({ title: '     ' });
    expect(store.listTodos()).toHaveLength(0);
  });

  test('POST con título válido crea el TODO', async () => {
    await request(app).post('/todos').type('form').send({ title: 'Comprar leche' });
    const todos = store.listTodos();
    expect(todos).toHaveLength(1);
    expect(todos[0].title).toBe('Comprar leche');
  });

  test('POST sin campo title NO crea un TODO', async () => {
    await request(app).post('/todos').type('form').send({});
    expect(store.listTodos()).toHaveLength(0);
  });
});
