# Pistas de review para `feat/list-empty-state`

> Úsalo si te atoras. Lo ideal es que **primero** intentes identificar los problemas tú solo.

### ¿Qué debería hacer esta feature?

Cuando la lista de TODOs está vacía, mostrar un mensaje amigable **"No hay tareas"**. Cuando hay tareas, ese mensaje no debe aparecer.

### Cosas a revisar en `src/views/todos/index.ejs`

1. **Condición del mensaje vacío** — ¿se muestra cuándo corresponde? Relee la condición con calma.
2. **Texto del mensaje** — ¿está escrito como pide la feature (con mayúscula inicial)?
3. **Nombre de variable en el loop** — ¿`x` es un nombre descriptivo para un TODO?
4. **Comparaciones** — revisa si se usa `==` o `===`. En este proyecto queremos `===`.

### Tests que deben pasar

```bash
npx jest tests/list-empty-state.test.js
```
