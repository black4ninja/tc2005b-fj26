# Pistas de review para `feat/clear-completed`

### ¿Qué debería hacer esta feature?

Endpoint que **elimina todas las tareas completadas** de una sola vez. Las pendientes se quedan.

### Cosas a revisar en `src/routes/todos.js`

1. **Método HTTP** — ¿qué verbo usas para una acción que muta? (No GET.)
2. **Filtro** — el código borra **todas** las tareas, no solo las completadas. Revisa el `forEach`.
3. **Nombre `t`** — poco descriptivo.

### Tests

```bash
npx jest tests/clear-completed.test.js
```
