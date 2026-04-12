# Pistas de review para `feat/filter-pending`

### ¿Qué debería hacer esta feature?

Cuando la URL incluye `?status=pending`, mostrar **solo** las tareas **NO completadas**.

### Cosas a revisar en `src/routes/todos.js`

1. **Lógica del filtro** — lee con calma: ¿está filtrando lo correcto?
2. **Comparaciones con `==`** — el proyecto usa `===`. Además, `t.done == true` se puede simplificar a `t.done`.
3. **Nombre `t`** — poco claro.

### Tests

```bash
npx jest tests/filter-pending.test.js
```
