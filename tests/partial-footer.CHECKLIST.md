# Pistas de review para `feat/partial-footer`

### ¿Qué debería hacer esta feature?

Extraer el pie de página a un partial EJS y mostrar el **año actual** dinámicamente (no hardcoded).

### Cosas a revisar en `src/views/partials/_footer.ejs`

1. **Año hardcoded** — ¿qué pasa en 2026? ¿Cómo se obtiene el año actual en EJS/JavaScript?
2. **Tipos de etiquetas EJS** — cuando imprimes una expresión, ¿va en `<%= %>` o en `<%- %>`?

### Tests

```bash
npx jest tests/partial-footer.test.js
```
