# Pistas de review para `feat/create-maxlength`

### ¿Qué debería hacer esta feature?

Permitir títulos de **hasta 100 caracteres** (100 sí, 101 no). Si el usuario manda algo más largo, no se crea la tarea.

### Cosas a revisar en `src/routes/todos.js`

1. **Off-by-one en la validación** — ¿qué pasa con un título de exactamente 100 caracteres? Lee el operador con cuidado (`>` vs `>=`).
2. **Robustez** — ¿qué pasa si `title` viene `undefined`? `undefined.length` revienta.
3. **Constante `MAX`** — ¿tiene nombre claro? ¿dónde debería vivir?

### Tests

```bash
npx jest tests/create-maxlength.test.js
```
