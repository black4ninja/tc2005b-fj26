# Pistas de review para `feat/search-title`

### ¿Qué debería hacer esta feature?

Buscar tareas por título con `?q=palabra`. Debe ser:

- **No sensible a mayúsculas/minúsculas**: buscar `LECHE` debe encontrar "Comprar leche".
- **Tolerante a espacios**: `?q=  leche  ` debe comportarse como `?q=leche`.

### Cosas a revisar en `src/routes/todos.js`

1. `includes` es sensible a mayúsculas. ¿Cómo lo haces case-insensitive? (Pista: `.toLowerCase()`).
2. ¿Qué pasa con los espacios alrededor del query? Hay una función de string que ya conoces.
3. `q` como nombre de variable es aceptable si ya viene de `req.query.q`, pero `t` dentro del filter no lo es.

### Tests

```bash
npx jest tests/search-title.test.js
```
