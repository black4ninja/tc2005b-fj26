# Pistas de review para `feat/delete-todo`

### ¿Qué debería hacer esta feature?

Permitir eliminar una tarea. La acción debe usar un método HTTP **seguro** para mutaciones.

### Cosas a revisar en `src/routes/todos.js`

1. **Método HTTP** — borrar datos con GET es peligroso (preloads del navegador, bots de indexación). ¿Qué verbo corresponde?
2. **Id inexistente** — ¿qué status code regresa si la tarea no existe? Debería ser 404.
3. **Nombres y retornos** — revisa si falta algún `return` temprano.

### Tests

```bash
npx jest tests/delete-todo.test.js
```
