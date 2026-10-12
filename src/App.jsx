
import './App.css'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Header from './layout/header/Header'
import Footer from './layout/footer/Footer'
import Admin from './pages/admin/Admin'
import AdminProductos from './pages/admin/AdminProductos'
import AdminUsers from './pages/admin/AdminUsers'
import ProductDetail from './pages/product-detail/ProductDetail'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import PublicLayout from './layout/public/PublicLayout'
import AdminLayout from './layout/admin/AdminLayout'
import { CartProvider } from './context/CartContext'
import './pages/products/Products.css'

import { Route, Routes } from 'react-router'
import Products from './pages/products/Products'


function App() {
  return (
    // CartProvider comparte el carrito con todas las páginas
    <CartProvider>
      <Routes>
        {/* PÁGINAS DE LA TIENDA: se muestran con el Header */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          {/* La ruta más específica (/products/:id) va antes que la general */}
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/products" element={<Products/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pages/productodetail.html" element={<Header />} />
          <Route path="/pages/productodetail.html" element={<Footer />} />
        </Route>

        {/* PÁGINAS DEL ADMIN: sin Header, con el menú lateral (aside) */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path="productos" element={<AdminProductos />} />
          <Route path="usuarios" element={<AdminUsers />} />
        </Route>
      </Routes>
      <Footer />
    </CartProvider>
  )
}

export default App
