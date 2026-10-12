import { Link, Outlet } from "react-router"
import logo from "../../assets/images/logo/logoLDblanco.svg"
import "../../pages/admin/Admin.css"

// Marco de todas las páginas del admin: el menú lateral (aside) a la izquierda
// y, a la derecha, la página que corresponda según la ruta.
// Acá no va el Header de la tienda.
function AdminLayout() {
  return (
    <div className="admin-container">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="logo">
          <img src={logo} alt="LD Gráfica" />
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <Link to="/admin">Pedidos</Link>
            </li>
            <li>
              <Link to="/admin/productos">Productos</Link>
            </li>
            <li>
              <Link to="/admin/usuarios">Usuarios</Link>
            </li>
            <li>
              <a href="#">Categorías</a>
            </li>
            <li>
              <Link to="/">Pagina principal</Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* CONTENIDO: acá se dibuja Pedidos, Productos o Usuarios */}
      <Outlet />
    </div>
  )
}

export default AdminLayout
