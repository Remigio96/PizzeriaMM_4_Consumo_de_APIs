# 🍕 Pizzería Mamma Mia — Hito 3 (Renderización dinámica de componentes)

## 🍕 Stack

* Vite + React
* React Router v6
* React-Bootstrap + Bootstrap
* Context API (Auth + Cart)
* Persistencia en localStorage (auth y carrito)

---

## 🍕 Objetivo del Hito

Implementar renderización dinámica de componentes usando un array de pizzas y simular un carrito de compras:

* ✔️ Home renderiza 6 tarjetas desde `src/data/pizzas.js`
* ✔️ `CardPizza` recibe props y lista ingredientes con `<li>`
* ✔️ `Cart` muestra ítems, permite sumar/restar cantidades y calcula el total
* ✔️ (Extra) `Navbar` muestra el total en vivo del carrito
* ✔️ (Extra) Mantiene Login/Register/Profile del hito anterior con rutas

---

## 🍕 Rutas

| Ruta        | Página       | Protección | Descripción                                                              |
| ----------- | ------------ | ---------- | ------------------------------------------------------------------------ |
| `/`         | Home         | Pública    | Header + 6 cards renderizadas desde pizzas.js                            |
| `/cart`     | Cart         | Pública    | Carrito con imagen, nombre, precio, + / −, eliminación implícita y total |
| `/register` | RegisterPage | Pública    | Registro con validaciones controladas                                    |
| `/login`    | LoginPage    | Pública    | Login con feedback y redirección                                         |
| `/profile`  | Profile      | Protegida  | Solo autenticados (vía ProtectedRoute)                                   |

**ProtectedRoute** redirige a `/login` y conserva `state.from` para volver a la ruta original tras autenticarse.

---

## 🗂️ Estructura

```
├── public/
│   └── favicon.ico
└── src/
    ├── assets/
    │   └── header.jpg
    ├── components/
    │   ├── CardPizza.jsx
    │   ├── Cart.jsx
    │   ├── Footer.jsx
    │   ├── Header.jsx
    │   ├── Home.jsx
    │   ├── LoginPage.jsx
    │   ├── Navbar.jsx
    │   ├── Profile.jsx
    │   └── RegisterPage.jsx
    ├── context/
    │   ├── AuthContext.jsx
    │   └── CartContext.jsx   ← carrito global + total dinámico
    ├── data/
    │   └── pizzas.js         ← 6 pizzas (id, name, price, ingredients, img)
    ├── routes/
    │   └── ProtectedRoute.jsx
    ├── App.jsx
    └── main.jsx
```

---

## 🍕 Componentes clave

### Home.jsx

* Importa pizzas desde `src/data/pizzas.js`.
* Renderiza 6 `<CardPizza />` con `.map()` y `key={pz.id}`.

### CardPizza.jsx

* Recibe `id, name, price, ingredients, img` por props.
* Lista ingredientes:

```jsx
<ul>{ingredients.map(ing => <li key={ing}>{ing}</li>)}</ul>
```

* Botón Añadir: `onClick={() => add({ id, name, price, img })}` (usa `CartContext`).

### Cart.jsx

* Consume `{ cart, inc, dec, total }` de `CartContext`.
* Muestra imagen, nombre, precio y controles `+ / −`.
* Si la cantidad llega a 0, el ítem se elimina.
* Calcula y muestra Total (`CLP` con `toLocaleString('es-CL')`).

### Navbar.jsx

* Enlace a `/cart` y total del carrito en vivo:

```jsx
const { total } = useCart();
🛒 Total: ${formatCLP(total)}
```

### AuthContext.jsx

* Maneja login / logout y persiste el estado en `localStorage`.
* `Profile` muestra el email del usuario autenticado.

---

## 🍕 Live Preview 🍕



