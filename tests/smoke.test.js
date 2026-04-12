const request = require('supertest');
const app = require('../src/app');
const store = require('../src/store');

beforeEach(() => store._reset());

describe('smoke', () => {
  test('GET / redirige a /todos', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(302);
    expect(res.headers.location).toBe('/todos');
  });

  test('GET /todos responde 200', async () => {
    const res = await request(app).get('/todos');
    expect(res.status).toBe(200);
  });

  test('POST /todos crea una tarea y la muestra en el listado', async () => {
    await request(app)
      .post('/todos')
      .type('form')
      .send({ title: 'Comprar leche' });

    const res = await request(app).get('/todos');
    expect(res.status).toBe(200);
    expect(res.text).toContain('Comprar leche');
  });

  test('rutas desconocidas devuelven 404', async () => {
    const res = await request(app).get('/no-existe');
    expect(res.status).toBe(404);
  });
});
