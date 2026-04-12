# Pistas de review para `feat/create-required-title`

### ¿Qué debería hacer esta feature?

Al crear una tarea, **validar que el título no esté vacío**. Un título con solo espacios (`"   "`) también debe rechazarse.

### Cosas a revisar en `src/routes/todos.js`

1. **La validación de `title`** — ¿qué pasa si el usuario manda solo espacios? ¿Son "verdaderos" para JavaScript?
2. ¿Qué tipo de comentario de Conventional Comments sería mejor: `issue (blocking)`, `suggestion`, o `nitpick`?
3. Cuando la validación falla, ¿el usuario recibe alguna pista de qué salió mal? (Es aceptable solo redirigir, pero piensa si es buena UX.)

### Tests que deben pasar

```bash
npx jest tests/create-required-title.test.js
```
