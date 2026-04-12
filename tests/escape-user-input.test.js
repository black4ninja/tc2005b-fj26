const request = require('supertest');
const app = require('../src/app');
const store = require('../src/store');

beforeEach(() => store._reset());

describe('escape-user-input', () => {
  test('un título con <script> NO aparece como HTML crudo (XSS)', async () => {
    store.addTodo({ title: '<script>alert(1)</script>' });

    const res = await request(app).get('/todos');

    expect(res.status).toBe(200);
    expect(res.text).not.toContain('<script>alert(1)</script>');
    expect(res.text).toContain('&lt;script&gt;');
  });

  test('un título con comillas dobles se escapa', async () => {
    store.addTodo({ title: 'Di "hola"' });

    const res = await request(app).get('/todos');

    expect(res.text).toContain('&#34;hola&#34;');
  });

  test('un título normal aparece tal cual (sin escapado extra visible)', async () => {
    store.addTodo({ title: 'Comprar leche' });

    const res = await request(app).get('/todos');

    expect(res.text).toContain('Comprar leche');
  });
});
