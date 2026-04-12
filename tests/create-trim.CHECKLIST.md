# Pistas de review para `feat/create-trim`

### ¿Qué debería hacer esta feature?

Eliminar espacios en blanco **al inicio y al final** del título antes de guardarlo.

### Cosas a revisar en `src/routes/todos.js`

1. La regex `/^\s+/` — ¿qué parte del string limpia, solo inicio o también final?
2. ¿Existe algún método más simple en JavaScript que haga esto en una línea?
3. La variable `title` se declara con `let` y se reasigna. ¿Es la forma más limpia?

### Tests

```bash
npx jest tests/create-trim.test.js
```
