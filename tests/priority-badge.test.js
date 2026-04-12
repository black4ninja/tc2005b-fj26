const request = require('supertest');
const app = require('../src/app');
const store = require('../src/store');

beforeEach(() => store._reset());

describe('priority-badge', () => {
  test('tarea con prioridad "high" muestra badge "Alta"', async () => {
    await request(app)
      .post('/todos')
      .type('form')
      .send({ title: 'Urgente', priority: 'high' });

    const res = await request(app).get('/todos');

    expect(res.text).toMatch(/Alta/);
  });

  test('tarea con prioridad "low" muestra badge "Baja"', async () => {
    await request(app)
      .post('/todos')
      .type('form')
      .send({ title: 'Luego', priority: 'low' });

    const res = await request(app).get('/todos');

    expect(res.text).toMatch(/Baja/);
  });

  test('tarea con prioridad "med" muestra badge "Media"', async () => {
    await request(app)
      .post('/todos')
      .type('form')
      .send({ title: 'Normal', priority: 'med' });

    const res = await request(app).get('/todos');

    expect(res.text).toMatch(/Media/);
  });

  test('tarea sin prioridad usa "Media" por default', async () => {
    await request(app)
      .post('/todos')
      .type('form')
      .send({ title: 'Sin prioridad' });

    const res = await request(app).get('/todos');

    expect(res.text).toMatch(/Media/);
  });
});
