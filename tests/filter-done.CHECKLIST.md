# Pistas de review para `feat/filter-done`

### ¿Qué debería hacer esta feature?

`?status=done` debe mostrar **solo las tareas completadas**.

### Cosas a revisar en `src/routes/todos.js`

1. **Lógica del filtro** — ¿está filtrando por completadas o por NO completadas? Lee el predicate con calma.
2. Callback tradicional (`function(x) { return ... }`) — en el proyecto usamos **arrow functions**.
3. **Nombre `x`** — poco descriptivo.

### Tests

```bash
npx jest tests/filter-done.test.js
```
