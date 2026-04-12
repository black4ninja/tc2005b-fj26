## Descripción

<!-- Describe brevemente la feature que implementa esta rama. -->

## Tipo de cambio

- [ ] Nueva funcionalidad
- [ ] Corrección de bug
- [ ] Refactorización
- [ ] Documentación
- [ ] Otro (especificar):

---

## Para el alumno que tome esta rama

### Cómo correr los tests de esta feature

```bash
npx jest tests/<slug>.test.js
```

Todos los tests deben pasar antes de pedir merge.

### Tu checklist de review (Conventional Comments)

Ver [`CONVENTIONS.md`](../CONVENTIONS.md) para la guía completa.

- [ ] Nombres de variables/funciones claros (sin `x`, `data`, `thing`).
- [ ] Validaciones de entrada correctas (vacíos, espacios, longitud).
- [ ] Método HTTP correcto (GET no muta; POST/PUT/DELETE sí).
- [ ] Valores del usuario escapados en EJS con `<%= %>` (no `<%- %>`).
- [ ] Comparaciones con `===` y `!==`.
- [ ] Status codes correctos.
- [ ] Sin código duplicado obvio.
- [ ] Todos los tests pasan.

### Issues que detecté en mi review

<!-- Lista breve de los problemas que identificaste, en formato Conventional Comments. -->

- `issue:` …
- `suggestion:` …
- `nitpick:` …
- `praise:` …

### Commits de fix

<!-- El historial de commits con tus fixes. Ejemplo:
- fix: valida título requerido
- refactor: renombra `x` a `todo`
-->
