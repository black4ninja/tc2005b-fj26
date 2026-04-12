# Pistas de review para `feat/partial-header`

### ¿Qué debería hacer esta feature?

Extraer el encabezado de la página (título + navegación) a un **partial EJS** reutilizable en `src/views/partials/_header.ejs`, e incluirlo desde `src/views/todos/index.ejs`.

### Cosas a revisar en `src/views/partials/_header.ejs`

1. **Clase CSS** — el test espera que el `<header>` tenga `class="app-header"` para que se pueda estilizar después. ¿Está ahí?
2. **Estructura semántica** — `<header>` + `<nav>` ayuda a accesibilidad.

### Tests

```bash
npx jest tests/partial-header.test.js
```
