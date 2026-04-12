# Pistas de review para `feat/edit-todo`

### ¿Qué debería hacer esta feature?

- Mostrar un formulario con el título actual de una tarea.
- Guardar el título nuevo al enviar el formulario.
- Si la tarea no existe, responder 404.
- Si el título queda vacío, no guardar.

### Cosas a revisar en `src/routes/todos.js`

1. **Id inexistente en el GET** — ¿qué pasa si `getTodo` devuelve `undefined`? ¿Se renderiza igual el form?
2. **Validación al guardar** — ¿qué pasa con un título vacío?
3. **Nombres** — `data` para un TODO, ¿es claro?
4. **Propiedad duplicada** — `{ title: title }` se puede acortar.

### Tests

```bash
npx jest tests/edit-todo.test.js
```
