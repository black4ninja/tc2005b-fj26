# Guía rápida: Conventional Comments

Esta guía resume [conventionalcomments.org](https://conventionalcomments.org/) en una página. La vas a usar para **todos** los comentarios de code review durante la práctica.

## Formato

```
<label> [(<decoration>)]: <mensaje corto y accionable>
```

Ejemplo:

```
suggestion (non-blocking): podríamos extraer este bloque a una función `parseStatus()` para reutilizarla en el filtro.
```

---

## Labels (los 8 que puedes usar)

| Label | Cuándo usarlo | Ejemplo |
|---|---|---|
| `praise:` | Reconocer algo bien hecho. Úsalo, motiva. | `praise: me encanta que uses .trim() aquí, evita el bug clásico de espacios.` |
| `nitpick:` | Detalle menor de estilo, **no** bloquea el merge. | `nitpick: en el proyecto usamos comillas simples en JS.` |
| `suggestion:` | Propones un cambio concreto. | `suggestion: reemplaza el \`forEach\` por \`map\` para devolver el array transformado.` |
| `issue:` | Hay un bug o problema real que hay que arreglar. | `issue (blocking): este endpoint muta datos con GET; debe ser POST.` |
| `question:` | No entiendes algo y necesitas aclaración. | `question: ¿por qué filtramos antes de ordenar en lugar de después?` |
| `thought:` | Idea que no requiere acción inmediata. | `thought: en el futuro esto podría venir de una BD en vez de un array en memoria.` |
| `chore:` | Tarea menor no relacionada al cambio (actualizar docs, renombrar). | `chore: actualiza el README para mencionar este nuevo endpoint.` |
| `note:` | Información que el autor debe saber pero no tiene que actuar. | `note: esta función ya existe en \`src/store.js\`.` |

## Decorations (opcionales, van entre paréntesis)

| Decoration | Significado |
|---|---|
| `(non-blocking)` | No detiene el merge. Lo puedes resolver después. |
| `(blocking)` | **Sí** detiene el merge. Tiene que arreglarse antes. |
| `(if-minor)` | Solo arréglalo si es rápido. |

Si no pones decoration, se asume `(non-blocking)` excepto para `issue:`, que normalmente bloquea.

---

## Ejemplos: bien vs. mal

### ❌ Mal

> "está mal"
>
> "no me gusta esto"
>
> "cámbialo"

**Por qué es malo:** no dice qué está mal, ni qué hacer, ni por qué. El autor no sabe qué hacer.

### ✅ Bien

> `issue (blocking): el método HTTP de este endpoint es GET, pero borra un TODO. Los navegadores pueden pre-cargar GETs (p.ej. al pasar el mouse sobre un link), lo que causaría borrados accidentales. Cámbialo a POST + method-override.`

**Por qué es bueno:** label claro, dice qué, por qué, y qué hacer.

---

## Checklist antes de aprobar un PR

Marca cada punto cuando lo verifiques:

- [ ] Los **nombres** de variables/funciones describen qué hacen (no hay `x`, `data`, `thing`).
- [ ] Las **validaciones** de entrada funcionan (input vacío, espacios, longitud máxima).
- [ ] Los **métodos HTTP** son correctos (GET no muta; POST/PUT/DELETE sí).
- [ ] Los valores que vienen del usuario se **escapan** en EJS con `<%= %>` (NO `<%- %>`).
- [ ] Los **tests** de la feature pasan localmente (`npm test`).
- [ ] No hay **código duplicado** obvio.
- [ ] Los **comparadores** usan `===` y `!==` (no `==`).
- [ ] Los **status codes** HTTP tienen sentido (200 OK, 201 Created, 400 Bad Request, 404 Not Found).

Si algo no pasa, **deja un comentario** con el label correspondiente antes de pedir cambios.

---

## Mensajes de commit — Conventional Commits

Cuando arregles algo, usa prefijos claros:

```
fix: valida que el título no esté vacío
refactor: extrae parseStatus a src/utils.js
docs: actualiza PRACTICA.md con instrucciones de Windows
test: agrega caso para título con solo espacios
```

Más info: [conventionalcommits.org/es](https://www.conventionalcommits.org/es/v1.0.0/).
