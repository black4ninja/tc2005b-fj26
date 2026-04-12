# tc2005b-fj26 — Práctica de Code Reviews

Mini-proyecto **TODO** en Node.js + Express + EJS. Sirve como base para la **práctica de Code Reviews** del curso **TC2005B**.

> **Si eres alumno, lee primero [`PRACTICA.md`](./PRACTICA.md).** Ahí vienen los pasos exactos.

---

## ¿Qué es esto?

Una aplicación chiquita para crear y listar tareas. Cada **feature** extra (editar, borrar, filtrar, etc.) vive en su propia **rama** y tiene un **Pull Request abierto**. Tu trabajo es elegir una rama, **revisar el código**, y **arreglar los problemas** que encuentres hasta que los tests pasen.

## Cómo correr el proyecto (primera vez)

**Requisitos:** tener instalado [Node.js 20 o superior](https://nodejs.org/) y [Git](https://git-scm.com/).

Abre la terminal y ejecuta, **uno por uno**, estos comandos:

```bash
git clone https://github.com/black4ninja/tc2005b-fj26.git
cd tc2005b-fj26
npm install
npm test
npm run dev
```

Después abre tu navegador en **http://localhost:3000** — deberías ver la pantalla de TODOs.

Para detener el servidor: `Ctrl + C` en la terminal.

### Comandos útiles

| Comando | Qué hace |
|---|---|
| `npm install` | Instala las dependencias (solo la primera vez o cuando cambien) |
| `npm run dev` | Arranca el servidor en modo desarrollo (se reinicia solo al guardar archivos) |
| `npm start` | Arranca el servidor en modo normal |
| `npm test` | Corre **todas** las pruebas automáticas |
| `npx jest tests/<nombre>.test.js` | Corre **solo** el archivo de prueba que le digas |

---

## Estructura del proyecto

```
src/
  app.js           Configura Express: middleware, rutas, manejo de errores
  server.js        Levanta el servidor en el puerto 3000
  routes/todos.js  Rutas: listar, crear, (y las que agreguen las features)
  store.js         "Base de datos" en memoria con funciones para manejar TODOs
  views/           Plantillas EJS
  public/          CSS y archivos estáticos
tests/             Pruebas automáticas con Jest + Supertest
```

---

## Flujo de la práctica

1. Eliges una rama/PR del catálogo (ver `PRACTICA.md`).
2. Haces **code review** de ese código usando la sintaxis de [Conventional Comments](https://conventionalcomments.org/) (ver `CONVENTIONS.md`).
3. Arreglas el código hasta que `npm test` pase.
4. Cierras los hilos de tu review citando el commit que los resuelve.
5. El instructor mergea tu PR cuando CI esté verde.

---

## Reglas de oro

- **Nunca** trabajes sobre `main` o `development` directamente. Siempre en tu rama `feat/<slug>`.
- **Siempre** corre `npm test` antes de hacer push.
- Si tu PR tiene CI en rojo, **no se puede mergear** — está bloqueado por protección de rama.
- Los mensajes de commit siguen [Conventional Commits](https://www.conventionalcommits.org/es/v1.0.0/): `fix:`, `refactor:`, `docs:`, etc.
