const request = require('supertest');
const app = require('../src/app');
const store = require('../src/store');

beforeEach(() => store._reset());

describe('search-title', () => {
  test('búsqueda exacta encuentra la tarea', async () => {
    store.addTodo({ title: 'Comprar leche' });
    store.addTodo({ title: 'Pasear perro' });

    const res = await request(app).get('/todos?q=leche');

    expect(res.text).toContain('Comprar leche');
    expect(res.text).not.toContain('Pasear perro');
  });

  test('la búsqueda ignora mayúsculas y minúsculas', async () => {
    store.addTodo({ title: 'Comprar leche' });

    const res = await request(app).get('/todos?q=LECHE');

    expect(res.text).toContain('Comprar leche');
  });

  test('los espacios alrededor de la búsqueda no afectan', async () => {
    store.addTodo({ title: 'Comprar leche' });

    const res = await request(app).get('/todos?q=%20%20leche%20%20');

    expect(res.text).toContain('Comprar leche');
  });

  test('sin resultados muestra lista vacía', async () => {
    store.addTodo({ title: 'Comprar leche' });

    const res = await request(app).get('/todos?q=xyzzz');

    expect(res.text).not.toContain('Comprar leche');
  });
});
