# 🍕 Pizzería Mamma Mia — Hito 4 (Consumo de APIs con React)

## 🍕 Stack

* Vite + React
* React Router v6
* React-Bootstrap + Bootstrap
* Context API (Auth + Cart)
* Persistencia en localStorage (auth y carrito)
* Backend Express (API de pizzas en `http://localhost:5000/api`)

---

## 🍕 Objetivo del Hito

Implementar el **consumo de una API externa** para mostrar la información de pizzas:

* ✔️ **Home.jsx**: consumir `GET http://localhost:5000/api/pizzas` y renderizar tarjetas dinámicamente.
* ✔️ **Pizza.jsx**: consumir `GET http://localhost:5000/api/pizzas/p001` y renderizar detalle de una pizza fija.
* ✔️ Uso de `useEffect` + `fetch` en ambos componentes.
* ✔️ Mostrar en cada pizza: nombre, precio, ingredientes, imagen y descripción.

---

## 🍕 Vistas

| Vista | Endpoint consumido     | Descripción                                                                  |
| ----- | ---------------------- | ---------------------------------------------------------------------------- |
| Home  | `GET /api/pizzas`      | Lista todas las pizzas en tarjetas dinámicas.                                |
| Pizza | `GET /api/pizzas/p001` | Muestra detalle de una pizza (nombre, precio, descripción, ingredientes...). |

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
    │   ├── Home.jsx          ← consume /api/pizzas
    │   ├── LoginPage.jsx
    │   ├── Navbar.jsx
    │   ├── Pizza.jsx         ← consume /api/pizzas/p001
    │   ├── Profile.jsx
    │   └── RegisterPage.jsx
    ├── context/
    │   ├── AuthContext.jsx
    │   └── CartContext.jsx
    ├── data/
    │   └── pizzas.js         ← mantenido para referencia / pruebas
    ├── routes/
    │   └── ProtectedRoute.jsx
    ├── App.jsx               ← renderiza Home o Pizza según se quiera ver
    └── main.jsx
```

---

## 🍕 Componentes clave

### Home.jsx

* `useEffect` para cargar pizzas con fetch.
* Renderiza lista de `<CardPizza />` dinámicamente.

### Pizza.jsx

* `useEffect` para cargar pizza fija `p001`.
* Renderiza tarjeta con nombre, precio, descripción e ingredientes.

### CardPizza.jsx

* Recibe props `id, name, price, ingredients, img`.
* Lista ingredientes con `.map()`.

---

## 🚀 Instrucciones de ejecución

### Backend

```bash
cd simple-api-backend-nodejs-express-fs-json-jwt-main
npm install
npm start
```

API disponible en: `http://localhost:5000/api/pizzas`

### Frontend

```bash
cd hito-4-mamma-mia
npm install
npm run dev
```

App disponible en: `http://localhost:XXXX`

---

## 🍕 Live Preview 🍕

*(Cuando se despliegue en GitHub Pages, quedará disponible con base `/PizzeriaMM_4_Consumo_de_APIs/`)*
