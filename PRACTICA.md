# Práctica: Code Reviews en un proyecto real

> **Materia:** TC2005B — **Tema:** Code Reviews con Node.js + Express + EJS

## ¿De qué se trata?

Vas a **revisar código** de una feature del mini-proyecto TODO (este repo) y **arreglar los problemas** que encuentres. Cada feature vive en su propia rama y tiene un Pull Request abierto. Tu tarea tiene **dos partes**:

1. **Comentar el código** del PR usando la sintaxis de [Conventional Comments](https://conventionalcomments.org/) — guía en [`CONVENTIONS.md`](./CONVENTIONS.md).
2. **Arreglar el código** (haciendo commits en esa misma rama) hasta que todas las **pruebas automáticas** pasen.

Cuando terminen todos, el mini-proyecto quedará completo entre todos. 🎉

---

## Antes de empezar: configura tu entorno (1 vez)

1. Instala [**Node.js 20**](https://nodejs.org/) (o superior).
2. Instala [**Git**](https://git-scm.com/).
3. Asegúrate de tener cuenta de GitHub y acceso a este repo (tu profesor te agregó como colaborador).

### Primera vez que clonas el repo

Abre tu terminal y ejecuta **cada comando por separado**:

```bash
git clone https://github.com/black4ninja/tc2005b-fj26.git
cd tc2005b-fj26
npm install
npm test
npm run dev
```

- `npm test` debe pasar en verde (los tests base).
- `npm run dev` levanta el servidor. Abre **http://localhost:3000**.
- Para detener: `Ctrl + C`.

> **Windows:** usa PowerShell o la terminal de VSCode. Los comandos son los mismos.

---

## Paso 1 — Elige tu rama

1. Entra al **Issue pinned** del repo llamado **"Asignación de PRs"**.
2. Busca un slug (nombre de feature) que **no** tenga nombre al lado.
3. Agrega tu nombre con un comentario: `me asigno feat/<slug>`.
4. Espera a que el instructor confirme con una reacción 👍.

### Cambiarte a esa rama en tu compu

```bash
git fetch origin
git checkout feat/<slug>
git pull
npm install
npm test
```

⚠️ **¡Vas a ver tests en ROJO!** Eso es normal — es tu trabajo arreglar los problemas hasta que se pongan en verde.

---

## Paso 2 — Haz el code review (en GitHub)

1. Abre el PR correspondiente a tu rama en GitHub.
2. Ve a la pestaña **"Files changed"**.
3. Revisa cada archivo buscando **problemas**. Apóyate en el **checklist** de [`CONVENTIONS.md`](./CONVENTIONS.md):
   - Nombres raros de variables.
   - Validaciones faltantes.
   - Métodos HTTP incorrectos.
   - `<%- %>` sin escapar en EJS.
   - `==` en vez de `===`.
   - Código duplicado.
   - Etc.
4. Por cada problema, **da clic en la línea** y escribe un comentario usando **Conventional Comments**:

   ```
   issue (blocking): este endpoint borra datos con GET. Los GETs no deberían mutar. Cámbialo a POST con method-override.
   ```

5. **Mínimo 4 comentarios** (ver rúbrica abajo). Pueden ser `issue`, `suggestion`, `nitpick`, `question`, `praise`… variedad cuenta.

### Ejemplos que puedes copiar

```
praise: buena separación de la lógica del router y del store.

issue (blocking): falta validar que `title` no esté vacío antes de llamar a addTodo.

suggestion: el nombre `x` no dice nada; renómbralo a `todo`.

nitpick: el archivo no termina con salto de línea.

question: ¿por qué usas `==` en la línea 14 en vez de `===`?
```

---

## Paso 3 — Arregla el código

De vuelta en tu terminal:

```bash
# Edita los archivos en tu editor favorito (VSCode recomendado).

# Corre todos los tests:
npm test

# O solo los de tu feature:
npx jest tests/<slug>.test.js

# Cuando pasen, haz commit y push:
git add .
git commit -m "fix: valida título requerido"
git push
```

### Mensajes de commit

Usa prefijos tipo [Conventional Commits](https://www.conventionalcommits.org/es/v1.0.0/):

- `fix:` — arreglas un bug
- `refactor:` — mejoras código sin cambiar comportamiento
- `docs:` — cambias documentación
- `test:` — agregas o corriges tests

Ejemplo: `fix: escapar el título en la vista para evitar XSS`.

---

## Paso 4 — Cierra los hilos de review

Cuando arregles algo que comentaste, responde en el mismo hilo del PR:

> Resuelto en commit `a1b2c3d`.

Y marca el hilo como **Resolved** en GitHub.

---

## Paso 5 — Pide merge

Cuando:

- Todos los tests pasan (vas a ver un ✅ verde en el PR).
- Todos los hilos están resueltos.

…pide al instructor que mergee tu PR con un comentario: `@black4ninja listo para merge`.

---

## Rúbrica (100 puntos)

| Criterio | Puntos |
|---|---|
| **Calidad de los comentarios de review** (uso correcto de labels, comentarios accionables, cubres los issues principales) | 40 |
| **Todos los tests de la feature pasan en CI** | 30 |
| **Mensajes de commit** con prefijo Conventional Commits | 15 |
| **Respondes y cierras los hilos** citando el commit | 10 |
| **No rompes los tests de otras features** | 5 |

Mínimo de comentarios de review: **4**. Menos de 4 = 0 en esa categoría.

---

## Preguntas frecuentes

**¿Qué pasa si no sé cómo arreglar algo?**
Pregunta en el mismo PR con `question:`. Tus compañeros y el instructor pueden responder.

**¿Puedo hacer más de una feature?**
Después de terminar la tuya, pregunta al instructor.

**`npm install` falla.**
Asegúrate de tener Node 20+ (`node --version`). Borra `node_modules` y vuelve a intentar.

**El servidor no arranca.**
Revisa que no haya otro proceso en el puerto 3000. Cierra otras terminales o cambia el puerto: `PORT=4000 npm run dev`.

**No puedo hacer push.**
Asegúrate de estar en tu rama (`git branch` debe mostrar `* feat/<slug>`) y que estás como colaborador del repo. Si tu profesor te indicó usar fork, sigue las instrucciones de fork de GitHub.

**Mi PR dice "CI red" / falla la verificación.**
Abre la pestaña "Checks" del PR y lee el error. Casi siempre es un test que falla. Corre `npm test` localmente para reproducirlo.
