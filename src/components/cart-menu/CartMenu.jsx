import { useEffect, useRef } from "react"
import { Link, useLocation } from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping, faTrashCan, faXmark } from "@fortawesome/free-solid-svg-icons"
import { useCart } from "../../context/CartContext"
import "./CartMenu.css"

// Ícono del carrito del encabezado + menú desplegable con los productos agregados
function CartMenu() {
  const {
    items,
    totalItems,
    totalPrecio,
    carritoAbierto,
    setCarritoAbierto,
    cambiarCantidad,
    quitarDelCarrito,
    vaciarCarrito,
  } = useCart()

  const contenedorRef = useRef(null)
  const { pathname } = useLocation()

  // Al cambiar de página, el desplegable se cierra
  useEffect(() => {
    setCarritoAbierto(false)
  }, [pathname, setCarritoAbierto])

  // Mientras está abierto, se cierra al hacer clic afuera o al apretar Escape
  useEffect(() => {
    if (!carritoAbierto) return

    function cerrarConClicAfuera(e) {
      if (contenedorRef.current && !contenedorRef.current.contains(e.target)) {
        setCarritoAbierto(false)
      }
    }

    function cerrarConEscape(e) {
      if (e.key === "Escape") {
        setCarritoAbierto(false)
      }
    }

    document.addEventListener("mousedown", cerrarConClicAfuera)
    document.addEventListener("keydown", cerrarConEscape)

    return () => {
      document.removeEventListener("mousedown", cerrarConClicAfuera)
      document.removeEventListener("keydown", cerrarConEscape)
    }
  }, [carritoAbierto, setCarritoAbierto])

  return (
    <div className="cart-menu" ref={contenedorRef}>
      <button
        type="button"
        className="icon-circle cart"
        aria-label={`Carrito: ${totalItems} ${totalItems === 1 ? "producto" : "productos"}`}
        aria-expanded={carritoAbierto}
        aria-controls="cart-dropdown"
        onClick={() => setCarritoAbierto(!carritoAbierto)}
      >
        <FontAwesomeIcon icon={faCartShopping} />
        {totalItems > 0 && <span className="cart-number">{totalItems}</span>}
      </button>

      {carritoAbierto && (
        <div className="cart-dropdown" id="cart-dropdown" role="dialog" aria-label="Carrito de compras">
          <div className="cart-dropdown-header">
            <h2>Tu carrito</h2>
            <button
              type="button"
              className="cart-cerrar"
              aria-label="Cerrar carrito"
              onClick={() => setCarritoAbierto(false)}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="cart-vacio">
              <p>Tu carrito está vacío.</p>
              <Link to="/products" className="cart-btn" onClick={() => setCarritoAbierto(false)}>
                Ver productos
              </Link>
            </div>
          ) : (
            <>
              <ul className="cart-lista">
                {items.map((item) => (
                  <li key={item.clave} className="cart-item">
                    <img className="cart-item-img" src={item.imagen} alt="" />

                    <div className="cart-item-info">
                      <p className="cart-item-nombre">{item.nombre}</p>
                      {item.medida && <p className="cart-item-medida">{item.medida}</p>}

                      <div className="cart-item-cantidad">
                        <button
                          type="button"
                          aria-label={`Quitar una unidad de ${item.nombre}`}
                          onClick={() => cambiarCantidad(item.clave, -1)}
                        >
                          −
                        </button>
                        <span>{item.cantidad}</span>
                        <button
                          type="button"
                          aria-label={`Sumar una unidad de ${item.nombre}`}
                          onClick={() => cambiarCantidad(item.clave, 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="cart-item-derecha">
                      <p className="cart-item-precio">
                        ${(item.precio * item.cantidad).toLocaleString("es-AR")}
                      </p>
                      <button
                        type="button"
                        className="cart-item-quitar"
                        aria-label={`Eliminar ${item.nombre} del carrito`}
                        onClick={() => quitarDelCarrito(item.clave)}
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="cart-total">
                <span>Total</span>
                <strong>${totalPrecio.toLocaleString("es-AR")}</strong>
              </div>

              <button type="button" className="cart-btn cart-btn-vaciar" onClick={vaciarCarrito}>
                Vaciar carrito
              </button>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default CartMenu
