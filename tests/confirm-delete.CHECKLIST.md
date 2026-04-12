# Pistas de review para `feat/confirm-delete`

### ¿Qué debería hacer esta feature?

Antes de borrar una tarea, mostrar un popup **"¿Seguro?"** con el `confirm()` de JavaScript. Si el usuario cancela, el form **NO** debe enviarse.

### Cosas a revisar en `src/views/todos/index.ejs`

1. El `<form>` que borra la tarea — ¿tiene un handler `onsubmit` que llame a `confirm()`?
2. La forma estándar:

   ```html
   <form action="..." method="POST" onsubmit="return confirm('¿Seguro que quieres borrar?')">
     <button type="submit">Borrar</button>
   </form>
   ```

3. Si `confirm()` devuelve `false`, el submit se cancela — por eso se usa `return confirm(...)`.

### Tests

```bash
npx jest tests/confirm-delete.test.js
```
