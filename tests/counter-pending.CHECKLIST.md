# Pistas de review para `feat/counter-pending`

### ¿Qué debería hacer esta feature?

Mostrar arriba del listado: **"Te faltan N tareas"**, donde N es el número de tareas **pendientes** (NO completadas).

### Cosas a revisar en `src/routes/todos.js`

1. **Qué está contando el `.filter`** — lee el predicate. ¿Cuenta completadas o pendientes?
2. **Nombres de variables** — ¿`t` es claro?

### Tests

```bash
npx jest tests/counter-pending.test.js
```
