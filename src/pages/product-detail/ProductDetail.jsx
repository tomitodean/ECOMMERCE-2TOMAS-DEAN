import { useEffect, useState } from "react"
import { Link, useParams } from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faArrowUpFromBracket,
  faChevronLeft,
  faCircleExclamation,
  faHeart as faHeartLleno,
} from "@fortawesome/free-solid-svg-icons"
import { faHeart as faHeartVacio } from "@fortawesome/free-regular-svg-icons"
import { getProductById } from "../../services/product.service"
import { useCart } from "../../context/CartContext"
import { getDetallesProducto } from "../../data/detallesProducto.jsx"
import "./ProductDetail.css"

function ProductDetail() {
  // El id sale de la URL. Ejemplo: en /products/3 el id es "3"
  const { id } = useParams()

  const [product, setProduct] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(false)

  // Lo que elige la persona en la página
  const [medidaElegida, setMedidaElegida] = useState(null)
  const [esFavorito, setEsFavorito] = useState(false)
  const [nombreArchivo, setNombreArchivo] = useState("")

  // Aviso que aparece si se quiere agregar al carrito sin elegir una medida
  const [faltaMedida, setFaltaMedida] = useState(false)

  const { agregarAlCarrito } = useCart()

  useEffect(() => {
    async function obtenerProducto() {
      setCargando(true)
      setError(false)

      // Al cambiar de producto se borra lo que se había elegido en el anterior
      setMedidaElegida(null)
      setEsFavorito(false)
      setNombreArchivo("")
      setFaltaMedida(false)

      try {
        // GET /products/:id
        const data = await getProductById(id)
        setProduct(data)
      } catch (err) {
        console.error("Error al obtener el producto:", err)
        setError(true)
      } finally {
        setCargando(false)
      }
    }

    obtenerProducto()
  }, [id])

  // Guarda el nombre del archivo que se eligió para mostrarlo en pantalla
  function elegirArchivo(e) {
    const archivo = e.target.files[0]
    setNombreArchivo(archivo ? archivo.name : "")
  }

  function elegirMedida(medida) {
    setMedidaElegida(medida)
    setFaltaMedida(false)
  }

  // Agrega el producto al carrito con la medida elegida
  function agregarProducto() {
    if (!medidaElegida) {
      setFaltaMedida(true)
      return
    }

    agregarAlCarrito({
      id: product.id,
      nombre: product.nombre,
      imagen: product.imagen,
      precio: product.precio,
      medida: medidaElegida,
    })
  }

  if (cargando) {
    return (
      <section className="detalle-producto">
        <p className="detalle-mensaje">Cargando producto...</p>
      </section>
    )
  }

  if (error || !product) {
    return (
      <section className="detalle-producto">
        <div className="detalle-mensaje">
          <h1>No encontramos el producto</h1>
          <p>Puede que ya no esté disponible o que el enlace esté mal escrito.</p>
          <Link to="/products" className="detalle-btn">
            Volver a productos
          </Link>
        </div>
      </section>
    )
  }

  // Textos y medidas que corresponden a la categoría del producto
  const detalles = getDetallesProducto(product.categoria)

  return (
    <section className="detalle-producto">
      <Link to="/products" className="detalle-atras">
        <FontAwesomeIcon icon={faChevronLeft} />
        Atrás
      </Link>

      <div className="detalle-container">
        {/* IMAGEN */}
        <div className="detalle-imagen">
          <img src={product.imagen} alt={product.nombre} />
        </div>

        {/* NOMBRE, PRECIO, MEDIDAS Y BOTONES (a la derecha) */}
        <div className="detalle-info">
          <h1 className="detalle-nombre">{product.nombre}</h1>
          <p className="detalle-bajada">{detalles.subtitulo}</p>

          <p className="detalle-precio">
            ${Number(product.precio).toLocaleString("es-AR")}
          </p>
          <p className="detalle-precio-nota">{detalles.detallePrecio}</p>

          <h2 className="detalle-titulo-medidas">{detalles.tituloMedidas}</h2>
          <div className="detalle-medidas">
            {detalles.medidas.map((medida) => (
              <button
                key={medida}
                type="button"
                className={
                  medida === medidaElegida
                    ? "detalle-btn detalle-btn-elegido"
                    : "detalle-btn"
                }
                aria-pressed={medida === medidaElegida}
                onClick={() => elegirMedida(medida)}
              >
                {medida}
              </button>
            ))}
          </div>
          {faltaMedida && (
            <p className="detalle-falta-medida" role="alert">
              Elegí una medida antes de agregar al carrito.
            </p>
          )}

          <div className="detalle-aviso">
            <FontAwesomeIcon icon={faCircleExclamation} className="detalle-aviso-icono" />
            <p>{detalles.aviso}</p>
          </div>

          <div className="detalle-fila-carrito">
            <button
              type="button"
              className="detalle-btn detalle-btn-carrito"
              onClick={agregarProducto}
            >
              Agregar al carrito
            </button>
            <button
              type="button"
              className={
                esFavorito
                  ? "detalle-btn-favorito detalle-btn-favorito-activo"
                  : "detalle-btn-favorito"
              }
              aria-pressed={esFavorito}
              aria-label={esFavorito ? "Quitar de favoritos" : "Agregar a favoritos"}
              onClick={() => setEsFavorito(!esFavorito)}
            >
              <FontAwesomeIcon icon={esFavorito ? faHeartLleno : faHeartVacio} />
            </button>
          </div>

          {/* El input de archivo está oculto: se abre al tocar el botón */}
          <input
            type="file"
            id="archivo-producto"
            className="detalle-input-archivo"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={elegirArchivo}
          />
          <label htmlFor="archivo-producto" className="detalle-btn detalle-btn-archivo">
            <FontAwesomeIcon icon={faArrowUpFromBracket} />
            Subir tu archivo
          </label>
          {nombreArchivo && (
            <p className="detalle-archivo-elegido">
              Archivo elegido: <strong>{nombreArchivo}</strong>
            </p>
          )}
        </div>

        {/* DESCRIPCIÓN (debajo de la imagen) */}
        <div className="detalle-extra">
          <h2 className="detalle-subtitulo-seccion">Descripción</h2>
          <p className="detalle-descripcion">{product.descripcion}</p>
        </div>
      </div>
    </section>
  )
}

export default ProductDetail
