
import { Link, NavLink } from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons"
import CartMenu from "../../components/cart-menu/CartMenu"
import logo from "../../assets/images/logo/logoLDblanco.svg"
import "./Header.css"


function Header() {
  return (
    <header>
      {/* NAVBAR */}
      <nav className="navbar">
        {/* LOGO */}
        <a href="#" className="logo">
          {/* TU LOGO */}
          <img src={logo} alt="LD Gráfica" />
        </a>
        {/* BUSCADOR */}
        <div className="search-box">
          <input type="text" placeholder="Buscar: DTF UV, vinilo, lona..." />
          <button aria-label="Buscar">
            {/* ICONO BUSCADOR */}
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className="icons">
          <div className="account">
            <Link to="/login" className="icon-circle" aria-label="Usuario">
              {/* ICONO USUARIO */}
              <FontAwesomeIcon icon={faUser} />
            </Link>
            <p>Ingresá</p>
          </div>
          <a href="#" className="icon-circle" aria-label="Favoritos">
            <FontAwesomeIcon icon={faHeart} />
          </a>
          {/* CARRITO: ícono + menú desplegable */}
          <CartMenu />
        </div>
        <label htmlFor="menu-toggle" className="hamburger">
          {" "}
          ☰
        </label>
      </nav>
      {/* CHECKBOX */}
      <input type="checkbox" id="menu-toggle" />
      {/* MENU */}
      <ul className="nav-menu">
        <li>
          <NavLink to="/" className="nav-link">
            Inicio
          </NavLink>
        </li>
        <li className="mobile-dropdown">
          <input type="checkbox" id="productos-toggle" />
          <div className="dropdown-header">
            <NavLink to="/products" className="dropdown-link">
              Productos
            </NavLink>
            <label htmlFor="productos-toggle" className="dropdown-label">
              ▾
            </label>
          </div>
          <ul className="dropdown">
            <li>

              <a href="/pages/productodetail.html">DTF UV</a>
            </li>
            <li>
              <a href="/pages/productodetail.html">DTF Textil</a>
            </li>
            <li>
              <a href="/pages/productodetail.html">Corpóreos</a>
            </li>
            <li>
              <a href="/pages/productodetail.html">Cartelería</a>
            </li>
            <li>
              <a href="/pages/productodetail.html">Gigantografía</a>
            </li>
            <li>
              <a href="/pages/productodetail.html">Impresión Digital</a>
            </li>
            <li>
              <a href="/pages/productodetail.html">Banners</a>
            </li>
            <li>
              <a href="/pages/productodetail.html">Vinilos</a>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/contact" className="nav-link">
            Contacto
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link">
            Sobre LD GRÁFICA
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin" className="nav-link">
            Admin
          </NavLink>
        </li>
      </ul>
    </header>

  )
}

export default Header