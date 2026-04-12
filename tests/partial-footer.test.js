const request = require('supertest');
const app = require('../src/app');
const store = require('../src/store');

beforeEach(() => store._reset());

describe('partial-footer', () => {
  test('el footer aparece en la vista', async () => {
    const res = await request(app).get('/todos');

    expect(res.status).toBe(200);
    expect(res.text).toContain('<footer');
    expect(res.text).toContain('TC2005B');
  });

  test('el footer muestra el año ACTUAL (no uno hardcoded)', async () => {
    const res = await request(app).get('/todos');
    const currentYear = new Date().getFullYear();

    expect(res.text).toContain(String(currentYear));
  });
});
