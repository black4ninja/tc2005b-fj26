# Pistas de review para `feat/escape-user-input`

### ⚠️ Esta feature enseña un tema de **seguridad: XSS** (Cross-Site Scripting)

El atacante podría mandar un título como `<script>alert(1)</script>`. Si la vista lo imprime **crudo**, ese script se ejecuta en el navegador de quien abra la lista — y ya tiene control de la sesión del usuario.

### La diferencia clave en EJS

| Sintaxis | Qué hace |
|---|---|
| `<%= valor %>` | Imprime **escapado** (seguro para texto del usuario) ✅ |
| `<%- valor %>` | Imprime **crudo** (solo para HTML que TÚ controlas) ⚠️ |

### Cosas a revisar en `src/views/todos/index.ejs`

1. Busca dónde se imprime `todo.title`. ¿Se usa `<%= %>` o `<%- %>`?
2. ¿Hay alguna razón legítima para imprimir el título como HTML crudo? (No.)

### Tests

```bash
npx jest tests/escape-user-input.test.js
```
