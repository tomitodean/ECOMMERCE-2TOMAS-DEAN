# LD Gráfica — E-commerce

Tienda online de **LD Gráfica**, una gráfica que ofrece cartelería, DTF UV, DTF textil, gigantografías e impresiones digitales.

Este repositorio es la **segunda entrega del Proyecto Integrador**: el sitio hecho en HTML y CSS en la primera entrega se pasó a React, con navegación entre páginas y datos guardados en MockAPI.

## Descripción

El sitio permite ver los productos de la gráfica, entrar al detalle de cada uno, registrarse e iniciar sesión. También tiene un panel de administración para cargar, editar y eliminar productos y usuarios.

### Páginas

| Página | Ruta | Qué hace |
|--------|------|----------|
| Inicio | `/` | Video de presentación, productos destacados y beneficios |
| Productos | `/products` | Lista todos los productos de MockAPI |
| Detalle de producto | `/products/:id` | Muestra la información de un producto, sus medidas y sus características |
| Registro | `/register` | Formulario con validaciones que crea un usuario en MockAPI |
| Login | `/login` | Formulario de email y contraseña (en esta entrega muestra los datos por consola) |
| Contacto | `/contact` | Datos de contacto, formulario y mapa |
| Sobre LD Gráfica | `/about` | Información de la empresa |
| Admin de pedidos | `/admin` | Tabla de pedidos |
| Admin de productos | `/admin/productos` | Alta, edición y baja de productos |
| Admin de usuarios | `/admin/usuarios` | Alta, edición y baja de usuarios |

## Tecnologías utilizadas

- **React 19** con **Vite** — interfaz y entorno de desarrollo
- **React Router** — navegación entre páginas
- **MockAPI** — base de datos simulada (recursos `products` y `users`)
- **Axios** — peticiones a la API
- **React Hook Form** — formularios y validaciones
- **SweetAlert2** — mensajes de éxito, error y confirmación
- **Font Awesome** — íconos
- **CSS propio** — estilos, sin Bootstrap

## Cómo clonar e instalar

Hace falta tener instalado [Node.js](https://nodejs.org/).

```bash
git clone https://github.com/tu-usuario/ecommerce-frontend
cd ecommerce-frontend
npm install
npm run dev
```

Después de `npm run dev`, abrir en el navegador la dirección que aparece en la terminal (normalmente `http://localhost:5173`).

## Estructura de carpetas

```
src/
├── assets/         imágenes y videos
├── components/     piezas que se reutilizan (tarjeta de producto, carrito desplegable, formulario de usuario, filas de tablas)
├── context/        carrito de compras compartido por toda la tienda
├── data/           textos y medidas del detalle de producto según la categoría
├── layout/         encabezado, pie de página y los marcos de la tienda (con encabezado) y del admin (con menú lateral)
├── pages/          una carpeta por página (home, products, product-detail, auth, admin, contact, about)
├── services/       llamadas a MockAPI (product.service y user.service)
├── App.jsx         rutas de la aplicación
└── main.jsx        punto de entrada
```

## Autor

Tomas Dean
