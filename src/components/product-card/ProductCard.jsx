import { Link } from "react-router"
import { useCart } from "../../context/CartContext"
import "./ProductCard.css"

// Etiquetas que puede llevar una tarjeta (se elige con product.etiqueta)
const ETIQUETAS = {
  "mas-vendido": "Más vendido",
  "descuento": "Con descuento",
  "destacado": "Destacado",
}

// linkDetalle es opcional: si no se pasa, "Más detalles" lleva a /products/:id
function ProductCard({ product, linkDetalle }) {
  const { agregarAlCarrito } = useCart()

  const etiqueta = ETIQUETAS[product.etiqueta]

  // Si el producto tiene descuento (en %), se calcula el precio final
  const precio = Number(product.precio)
  const descuento = Number(product.descuento) || 0
  const precioFinal = Math.round(precio - (precio * descuento) / 100)

  return (
    <div className="card-producto">
      {etiqueta && (
        <span className={`etiqueta-producto etiqueta-${product.etiqueta}`}>
          {etiqueta}
        </span>
      )}
      <div className="card-image">
        <img
          className="img-producto"
          src={product.imagen}
          alt={product.nombre}
        />
      </div>
      <div className="card-content">
        <h3 className="h3card">{product.nombre}</h3>
        <p className="descripcioncard">{product.descripcion}</p>
        <div className="card-footer">
          <div className="container-precio">
            {descuento > 0 && (
              <p className="precio-anterior">
                <span className="precio-tachado">
                  ${precio.toLocaleString("es-AR")}
                </span>
                <span className="porcentaje-descuento">-{descuento}%</span>
              </p>
            )}
            <p className="precio">${precioFinal.toLocaleString("es-AR")}</p>
            {product.detallePrecio && (
              <p className="descripcion-precio">{product.detallePrecio}</p>
            )}
          </div>
          <div className="container-btn">
            <button
              type="button"
              className="btn-agregar"
              onClick={() =>
                agregarAlCarrito({
                  id: product.id,
                  nombre: product.nombre,
                  imagen: product.imagen,
                  precio: precioFinal,
                })
              }
            >
              Agregar
            </button>
            <Link
              to={linkDetalle || `/products/${product.id}`}
              className="btn-detalles"
            >
              Más detalles
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
