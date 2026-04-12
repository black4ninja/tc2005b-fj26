const request = require('supertest');
const app = require('../src/app');
const store = require('../src/store');

beforeEach(() => store._reset());

describe('create-maxlength', () => {
  test('título de exactamente 100 caracteres SÍ se acepta', async () => {
    const title = 'a'.repeat(100);
    await request(app).post('/todos').type('form').send({ title });
    expect(store.listTodos()).toHaveLength(1);
  });

  test('título de 101 caracteres NO se acepta', async () => {
    const title = 'a'.repeat(101);
    await request(app).post('/todos').type('form').send({ title });
    expect(store.listTodos()).toHaveLength(0);
  });

  test('título corto (5 caracteres) SÍ se acepta', async () => {
    await request(app).post('/todos').type('form').send({ title: 'Hola' });
    expect(store.listTodos()).toHaveLength(1);
  });

  test('no revienta cuando falta el campo title', async () => {
    const res = await request(app).post('/todos').type('form').send({});
    expect(res.status).toBeLessThan(500);
  });
});
