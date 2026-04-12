# Pistas de review para `feat/toggle-complete`

### ¿Qué debería hacer esta feature?

Permitir que el usuario marque/desmarque una tarea como completada. Cada clic alterna el estado `done` entre `true` y `false`.

### Cosas a revisar en `src/routes/todos.js`

1. **Método HTTP** — ¿qué verbo HTTP se debería usar para un endpoint que **muta** datos? Recuerda: GET es para LEER. Los navegadores pueden pre-cargar URLs GET (por ejemplo al pasar el mouse encima), lo que causaría toggles accidentales.
2. **Nombre de variable** — ¿`t` es descriptivo?
3. **Caso no encontrado** — si el `id` no existe, ¿qué status code debería responder? (Pista: 404)

### Cómo la vista envía un POST (si necesitas cambiarlo)

Usando `method-override` (ya instalado), puedes hacer un form así:

```html
<form action="/todos/<%= todo.id %>/toggle" method="POST">
  <button type="submit">Alternar</button>
</form>
```

### Tests que deben pasar

```bash
npx jest tests/toggle-complete.test.js
```
