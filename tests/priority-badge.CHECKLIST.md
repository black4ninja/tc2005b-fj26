# Pistas de review para `feat/priority-badge`

### ¿Qué debería hacer esta feature?

Permitir elegir una prioridad al crear una tarea (`low` / `med` / `high`) y mostrarla como badge con un **label en español**:

- `low` → **Baja**
- `med` → **Media**
- `high` → **Alta**

Si no se envía prioridad, usar **Media** por default.

### Cosas a revisar

1. **Etiqueta del badge** — en `index.ejs` se imprime el código crudo (`low`/`med`/`high`) en vez del label. ¿Cómo lo mapeas a español?
2. **Default cuando falta prioridad** — ¿qué pasa si el POST no incluye `priority`?
3. **Validación** — ¿qué pasa si alguien manda `priority=bogus`? ¿Deberías rechazar o default-ear a `med`?
4. **Shorthand** — `priority: priority` se puede simplificar.

### Tests

```bash
npx jest tests/priority-badge.test.js
```
