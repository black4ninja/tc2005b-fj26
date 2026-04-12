# Pistas de review para `feat/sort-alphabetical`

### ¿Qué debería hacer esta feature?

`?sort=title` ordena las tareas **alfabéticamente** sin importar mayúsculas/minúsculas.

### Cosas a revisar en `src/routes/todos.js`

1. **Case-sensitive** — en ASCII, las mayúsculas vienen antes que las minúsculas. `'C' < 'a'` es `true`. Eso hace que "Cereza" termine antes que "apple". Pista: `String.prototype.localeCompare` con `{ sensitivity: 'base' }`.
2. **Mutación del array** — `.sort()` muta el array original. Usa `.slice()` o `[...arr]` antes.

### Tests

```bash
npx jest tests/sort-alphabetical.test.js
```
