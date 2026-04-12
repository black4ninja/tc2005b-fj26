# Pistas de review para `feat/sort-newest-first`

### ¿Qué debería hacer esta feature?

Listar las tareas de la **más nueva a la más vieja** según `createdAt`.

### Cosas a revisar en `src/routes/todos.js`

1. **Dirección del orden** — `a.createdAt - b.createdAt` ordena **ascendente** (más vieja primero). ¿Queremos eso?
2. **Mutación del array** — `Array.sort()` **muta** el array original. Si `listTodos()` devuelve una referencia al interno del store, estamos reordenando el store para siempre. Pista: `.slice()` o `[...arr]` antes de ordenar.

### Tests

```bash
npx jest tests/sort-newest-first.test.js
```
