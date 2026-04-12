const request = require('supertest');
const app = require('../src/app');
const store = require('../src/store');

beforeEach(() => store._reset());

describe('partial-header', () => {
  test('el header aparece en la vista de listado', async () => {
    const res = await request(app).get('/todos');

    expect(res.status).toBe(200);
    expect(res.text).toContain('<header');
    expect(res.text).toContain('Mis TODOs');
  });

  test('el header tiene la clase CSS "app-header"', async () => {
    const res = await request(app).get('/todos');

    expect(res.text).toMatch(/<header[^>]*class="[^"]*app-header[^"]*"/);
  });

  test('el header incluye el link a "Inicio" y a "Nueva tarea"', async () => {
    const res = await request(app).get('/todos');

    expect(res.text).toContain('href="/todos"');
    expect(res.text).toContain('href="/todos/nuevo"');
  });
});
