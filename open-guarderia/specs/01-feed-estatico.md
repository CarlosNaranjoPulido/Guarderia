# SPEC 01 — Feed estático en `/`

> **Status:** Approved
> **Depends on:** ninguna
> **Date:** 2026-11-05
> **Objective:** Re-implementar visualmente `references/pantallas/feed.dc.html` en la ruta `/` de Next.js como Server Components estáticos sin autenticación ni base de datos.

## Scope

**In:**

- Reescribir `app/page.tsx` como composición de la vista del Feed.
- Crear `app/components/Sidebar.tsx`: aside de 248px, logo OpenDayCare / Sala Soles, botón "Nueva publicación", nav con Feed activo, y tarjeta de usuaria Caro Giménez con botón de cerrar sesión.
- Crear `app/components/PostCard.tsx`: tarjeta reutilizable para los 3 tipos del diseño (LOGRO verde, ACTIVIDAD azul con foto, ANUNCIO morado).
- Header: "GUARDERÍA · SALA SOLES", "Buenas, Caro", "12 niños · martes 17 jun".
- Composer "Compartí un momento…" y separador "PUBLICADO HOY".
- 3 posts hardcodeados en orden: Mateo (logro, 14:20, 3 likes/1 comentario), Mateo (actividad, 09:40, 5/2, con placeholder de foto dashed de 200px), Anuncio general (07:50, 8/0).
- Todos los enlaces con `href="#"`: no navegan a pantallas `.dc.html` ni a rutas Next futuras.
- Responsive básico: en `<768px` el sidebar se oculta (`hidden md:flex`) y el contenido ocupa todo el ancho. Sin menú hamburguesa en esta spec.
- Reutilizar fuentes y variables ya presentes en `app/layout.tsx` (`font-fredoka`, `font-nunito`), sin tocar `layout.tsx` ni `globals.css`.

**Out of scope (para futuras specs):**

- Autenticación, sesiones, y protección de rutas.
- Base de datos, API routes, fetch, Server Actions, o cualquier persistencia.
- Likes/comentarios interactivos, editar/crear publicación, detalle de publicación, foto real.
- Rutas `/feed`, `/ninos`, `/avisos`, `/mi-cuenta`, `/crear-publicacion`, `/login`, etc.
- Menú móvil colapsable, toggle de sidebar, y ajustes finos de responsive más allá de ocultar el sidebar.
- Archivo de datos mock (`data.ts`) o modelo de datos compartido.

## Data model

Esta spec no introduce estructuras de datos nuevas. No hay tipos persistidos, ni estado, ni fetch.

Los datos son literales hardcodeados en `app/page.tsx` y se pasan como props a `PostCard`:

```tsx
type PostCardProps = {
  variant: "logro" | "actividad" | "anuncio";
  title: string;        // "Mateo" o "Anuncio general"
  time: string;         // "14:20 · publicado por vos"
  audience: string;     // "Para: familia de Mateo" o "Para: toda la sala"
  text: string;
  likes: number;        // 3, 5, 8
  comments: number;     // 1, 2, 0
  hasPhoto?: boolean;   // solo true en el post de actividad
};
```

Las 3 instancias se escriben explícitamente en `page.tsx`, sin `.map()` sobre un array, para mantener fidelidad pixel a pixel con la plantilla.

## Implementation plan

1. Línea base verde: correr `npx tsc --noEmit && npm run build` con el `page.tsx` actual para confirmar que la base compila antes de tocar nada.
2. Sidebar: crear `app/components/Sidebar.tsx` como Server Component (sin `"use client"`) replicando el `aside` con clases Tailwind arbitrarias del diseño, `hidden md:flex`, y todos los `href="#"`. Verificar con `npm run build`.
3. PostCard: crear `app/components/PostCard.tsx` como Server Component con badge según `variant` (colores `#CFEBD8/#3E9B6C`, `#C7E7F1/#2E89A6`, `#CCD8F4/#4E72C8`), avatar según tipo, pie con likes/comentarios/Editar, y bloque de foto dashed solo si `hasPhoto`. Verificar con `npm run build`.
4. Página: reescribir `app/page.tsx` componiendo `<Sidebar />` + `<main>` con header, composer, separador y las 3 `<PostCard />` explícitos, todo con `href="#"`. Verificar con `npm run build`.
5. Verificación visual: levantar `npm run dev`, tomar captura con Playwright MCP en 1280px (desktop) y 390px (móvil), y comparar contra `feed.dc.html` y `references/screenshots/`.

## Acceptance criteria

- [ ] `npm run build` pasa sin errores de TypeScript ni de Next.
- [ ] `GET /` renderiza sin errores en consola.
- [ ] En desktop (≥768px) el sidebar mide 248px y el header dice exactamente "GUARDERÍA · SALA SOLES", "Buenas, Caro" y "12 niños · martes 17 jun".
- [ ] El composer muestra "Compartí un momento…" y el separador muestra "PUBLICADO HOY".
- [ ] Se ven 3 posts en este orden: logro de Mateo, actividad de Mateo con foto, anuncio general.
- [ ] Los badges dicen LOGRO, ACTIVIDAD y ANUNCIO con los colores de la plantilla.
- [ ] El post de actividad muestra el placeholder dashed de 200px con "Foto · pintando con témperas".
- [ ] Los contadores son 3/1, 5/2 y 8/0; todos los enlaces son `href="#"` (no navegan fuera de `/`).
- [ ] En móvil (<768px) el sidebar no se ve y el contenido ocupa todo el ancho.
- [ ] La captura de Playwright en desktop coincide visualmente con `feed.dc.html` (fondo `#F6ECDF`, tarjetas `#FFFDF9`, bordes `#ECE0D0`).

## Decisions

- **Sí:** solo ruta `/` (reescribir `app/page.tsx`), sin `app/feed/`. Evita duplicar la vista y coincide con la home actual.
- **Sí:** `href="#"` inertes. Las pantallas `.dc.html` no existen en Next y crear rutas rotas hoy sería engañoso.
- **Sí:** datos hardcodeados en JSX. Es la forma más rápida y fiel para una re-implementación puramente visual, sin anticipar un backend que no existe.
- **Sí:** dos componentes separados (`Sidebar`, `PostCard`). El `page.tsx` actual ya tiene 214 líneas y va a crecer; separar reduce el ruido sin crear una arquitectura excesiva.
- **Sí:** responsive básico (`hidden md:flex`). Cubre el caso móvil sin introducir un menú que la plantilla no tiene.
- **No:** tocar `layout.tsx` ni `globals.css`. Fredoka + Nunito ya están cargadas con `next/font` y `font-fredoka/font-nunito` ya resuelven.
- **No:** auth, DB, API ni estado. Explícitamente fuera por pedido ("solo quiero que se vea igual").

## Risks

| Risk | Mitigation |
| ---- | ---------- |
| Clases Tailwind arbitrarias no coinciden con la plantilla en 1 línea | Copiar los valores hex, radios (`12px/14px/16px/18px/20px`) y sombras exactos de `feed.dc.html`. |
| Next 16 rompe convenciones conocidas | Consultar `node_modules/next/dist/docs/` antes de trabajar, como indica `AGENTS.md`. |
| El lint falla por código pre-existente en `references/pantallas/support.js` | Ignorar esos errores; solo verificar que no aparezcan errores nuevos en `app/page.tsx` o `app/components/*`. |

## What is **not** in this spec

- Autenticación, base de datos, API y persistencia.
- Interactividad (likes, comentarios, edición, creación de posts).
- Otras pantallas de `references/pantallas/` (niños, avisos, mi cuenta, login, etc.).
- Ruta `/feed` separada y menú móvil colapsable.

Cada una de esas, si llega, va en su propia spec.
