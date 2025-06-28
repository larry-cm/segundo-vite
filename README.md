# React + Vite - Aprendizaje 🚀

este es el proyecto que hice aprendiendo de midudev y tengo que continuar con todas sus técnicas a la par de los cursos para aumentar mis conocimientos.

## Nos vamos a enfocar en los siguientes endpoints 📍

Ahi disponibles varias query's para tratar los stickers o gifs por eso los vamos a enumerar aquí.
claro como  nos parezca

Tenemos solo dos modos activos ahora.

- 🦄 Gifs:
  - Emoji
  - Random
  - Search
  - Trending

- ⭐ Stickers:
  - Random
  - Search
  - Trending
  -sticker packs ( children )
  -sticker packs ( stickers )

### Ambos tienen métodos para obtener por la id

Que de ser posible no utilizaremos porque,
aprendemos mas sobre los **contextos de react** y se pueden guardar allí para luego filtrarse.

#### React tabla de como algunos hooks para los hover o relacionados

| Evento React    | Se dispara cuando...                              | Equivalente DOM |
| --------------- | ------------------------------------------------- | --------------- |
| `onMouseEnter`  | El mouse entra a un elemento sin contar hijos     | `mouseenter`    |
| `onMouseOver`   | El mouse entra a un elemento (incluye hijos)      | `mouseover`     |
| `onMouseMove`   | El mouse se mueve dentro del elemento             | `mousemove`     |
| `onMouseDown` ✅ | El usuario **presiona** el botón del mouse (⬇️)   | `mousedown`     |
| `onMouseUp`     | El usuario **suelta** el botón del mouse (⬆️)     | `mouseup`       |
| `onClick`       | `mousedown` + `mouseup` dentro del mismo elemento | `click`         |
| `onContextMenu` | Botón derecho del mouse                           | `contextmenu`   |
| `onMouseLeave`  | El mouse sale del elemento (no incluye hijos)     | `mouseleave`    |
| `onMouseOut`    | El mouse sale del elemento (incluye hijos)        | `mouseout`      |

##### Tabla de los hooks aprendidos

### Tabla descriptiva de hooks de React

| Hook         | ¿Para qué sirve?                                                                                           | Características clave                                                                                      |
|--------------|-----------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|
| `useState`   | Permite a los componentes recordar información y actualizarla cuando sea necesario.                        | Devuelve el valor actual y una función para cambiarlo; cada vez que cambias el estado, el componente se vuelve a renderizar. |
| `useEffect`  | Sirve para ejecutar código cuando algo cambia, como pedir datos a una API o modificar el DOM.              | Se ejecuta después de renderizar; puedes controlar cuándo se ejecuta usando un array de dependencias.      |
| `useCallback`| Ayuda a que las funciones no se vuelvan a crear en cada render, lo que mejora el rendimiento en algunos casos. | Solo cambia si cambian las dependencias; útil cuando pasas funciones a componentes hijos memorizados.      |
| `useRef`     | Guarda valores que quieres mantener entre renders sin que causen un nuevo renderizado.                     | Ideal para acceder a elementos del DOM o guardar información mutable que no afecta la vista.               |
| `useReducer` | Es como un `useState` avanzado, útil cuando el estado es complejo o tiene muchas partes relacionadas.       | Usa una función reductora para decidir cómo cambiar el estado; muy útil para lógica de actualización más estructurada. |

---
