# Pistas de review para `feat/created-at`

### ¿Qué debería hacer esta feature?

Mostrar la fecha de creación de cada tarea junto a su título, con el prefijo **"Creado:"**.

### Cosas a revisar en `src/views/todos/index.ejs`

1. **Nombre de propiedad** — revisa `src/store.js`: ¿cómo se llama realmente la propiedad con la fecha? ¿`date` o `createdAt`?
2. **Formato de la fecha** — `<%= todo.createdAt %>` imprime el objeto Date crudo, poco amigable. ¿Hay forma de formatearlo? (Pista: `.toLocaleDateString('es-MX')`)

### Tests

```bash
npx jest tests/created-at.test.js
```
