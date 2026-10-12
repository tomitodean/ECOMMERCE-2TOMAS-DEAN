import { createContext, useContext, useEffect, useState } from "react"

// Carrito de compras compartido por toda la tienda.
// Cualquier componente puede usarlo con: const { ... } = useCart()

const CartContext = createContext(null)

// Nombre con el que se guarda el carrito en el navegador,
// para que no se pierda al recargar la página
const CLAVE_GUARDADO = "ld-grafica-carrito"

function leerCarritoGuardado() {
  try {
    const guardado = localStorage.getItem(CLAVE_GUARDADO)
    const lista = guardado ? JSON.parse(guardado) : []
    return Array.isArray(lista) ? lista : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  // Lista de productos del carrito
  const [items, setItems] = useState(leerCarritoGuardado)

  // Indica si el menú desplegable del carrito está abierto
  const [carritoAbierto, setCarritoAbierto] = useState(false)

  // Cada vez que cambia el carrito, se guarda en el navegador
  useEffect(() => {
    try {
      localStorage.setItem(CLAVE_GUARDADO, JSON.stringify(items))
    } catch {
      // Si el navegador no deja guardar, el carrito funciona igual
    }
  }, [items])

  // Agrega un producto. Si ya estaba (mismo producto y misma medida), suma una unidad.
  // Recibe: { id, nombre, imagen, precio, medida }
  function agregarAlCarrito(producto) {
    const medida = producto.medida || ""
    const clave = `${producto.id}-${producto.nombre}-${medida}`

    setItems((prevItems) => {
      const yaEsta = prevItems.some((item) => item.clave === clave)

      if (yaEsta) {
        return prevItems.map((item) =>
          item.clave === clave ? { ...item, cantidad: item.cantidad + 1 } : item
        )
      }

      return [
        ...prevItems,
        {
          clave,
          id: producto.id,
          nombre: producto.nombre,
          imagen: producto.imagen,
          precio: Number(producto.precio) || 0,
          medida,
          cantidad: 1,
        },
      ]
    })

    // Se abre el desplegable para que se vea lo que se agregó
    setCarritoAbierto(true)
  }

  // Suma o resta unidades (cambio = 1 o -1). Si llega a 0, el producto se quita.
  function cambiarCantidad(clave, cambio) {
    setItems((prevItems) =>
      prevItems
        .map((item) =>
          item.clave === clave ? { ...item, cantidad: item.cantidad + cambio } : item
        )
        .filter((item) => item.cantidad > 0)
    )
  }

  function quitarDelCarrito(clave) {
    setItems((prevItems) => prevItems.filter((item) => item.clave !== clave))
  }

  function vaciarCarrito() {
    setItems([])
  }

  // Totales: se recalculan solos cada vez que cambia "items"
  const totalItems = items.reduce((suma, item) => suma + item.cantidad, 0)
  const totalPrecio = items.reduce((suma, item) => suma + item.precio * item.cantidad, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        totalItems,
        totalPrecio,
        carritoAbierto,
        setCarritoAbierto,
        agregarAlCarrito,
        cambiarCantidad,
        quitarDelCarrito,
        vaciarCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
