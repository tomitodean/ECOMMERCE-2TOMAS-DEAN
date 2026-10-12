import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAward, faPenRuler, faStopwatch } from "@fortawesome/free-solid-svg-icons"
import ProductCard from "../../components/product-card/ProductCard"
import imgDtfUv from "../../assets/images/productos/DTF UV.png"
import imgDtfTextil from "../../assets/images/productos/DTF TEXTIL BOLSAS DE FRISELINA.png"
import imgCorporeos from "../../assets/images/productos/CORPOREOS 3D ACRILICO.png"
import videoPrincipal from "../../assets/videos/VIDEO PAGINA PRINCIPAL.mp4"
import videoPrincipal2 from "../../assets/videos/VIDEO PAGINA PRINCIPAL 2.mp4"

// Los 3 productos que se muestran en el inicio.
// etiqueta: "mas-vendido", "descuento" o "destacado"
// descuento: porcentaje que se le resta al precio (solo si tiene descuento)
const productosHome = [
  {
    id: 1,
    nombre: "DTF UV - Stickers Premium",
    descripcion:
      "Excelente adherencia a cualquier superficie, resistente al agua y a la intemperie, con colores vibrantes y duraderos.",
    precio: 14500,
    detallePrecio: "Cotización el metro cuadrado (28x100cm -Archivo PNG)",
    imagen: imgDtfUv,
    etiqueta: "mas-vendido",
  },
  {
    id: 2,
    nombre: "DTF TEXTIL - Estampado",
    descripcion:
      "Bolsas de Friselina con diseño personalizado en distintas medidas y colores.",
    precio: 19000,
    detallePrecio: "Cotización el metro cuadrado (58x100cm - Archivo PNG)",
    imagen: imgDtfTextil,
    etiqueta: "descuento",
    descuento: 10,
  },
  {
    id: 3,
    nombre: "CORPÓREOS - 3D con Acrílico",
    descripcion:
      "Carteles corpóreos con impresión 3D, con acrílico de alta calidad, ideales para destacar tu marca con elegancia y durabilidad.",
    precio: 50000,
    detallePrecio: "Cotización según medida",
    imagen: imgCorporeos,
    etiqueta: "destacado",
  },
]

function Home() {
  return (
    <>
      <div className="video-container">
        {/* autoPlay necesita muted: los navegadores no reproducen solos un video con sonido */}
        <video
          className="video-principal"
          aria-label="Video de LD Gráfica"
          controls
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={videoPrincipal} type="video/mp4" />
        </video>
      </div>
      <section className="home">
        <div className="container-home">
          <div className="content-home">
            <h1 className="text-homeh1">
              En <span>LD GRÁFICA</span> transformamos ideas en impacto visual.
            </h1>
            <p className="text-homep">
              Creamos cartelería, impresión y diseño profesional para marcas que
              quieren verse modernas, destacar y dejar huella. Calidad, presencia y
              resultados que realmente se notan.
            </p>
            <div className="button-container">
              <button className="button-comprarahora">Ver productos</button>
            </div>
          </div>
        </div>
        <div className="video-container2">
          <video
            className="video-principal2"
            aria-label="Video de LD Gráfica"
            controls
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={videoPrincipal2} type="video/mp4" />
          </video>
        </div>
      </section>
      <section className="section-productosdestacados">
        <div className="container-h1productosdestacados">
          <h1 className="h1productosdestacados">Productos destacados</h1>
        </div>
        <div className="container-productosdestacados">
          {/* Estos productos no están en MockAPI, por eso "Más detalles"
              lleva al listado de productos y no a un detalle */}
          {productosHome.map((product) => (
            <ProductCard key={product.id} product={product} linkDetalle="/products" />
          ))}
        </div>
      </section>
      <section className="section-cualidades">
        <div className="container-cualidades">
          <div className="content-cualidades">
            <FontAwesomeIcon icon={faStopwatch} className="icono-cualidades" />
            <h1 className="h1cualidades">PRODUCCIÓN RÁPIDA</h1>
            <p className="pcualidades">
              Realizamos tus pedidos con tiempos ágiles y entregas eficientes para
              que tu proyecto no espere.
            </p>
          </div>
          <div className="content-cualidades">
            <FontAwesomeIcon icon={faPenRuler} className="icono-cualidades" />
            <h1 className="h1cualidades">DISEÑO PERSONALIZADO</h1>
            <p className="pcualidades">
              Creamos soluciones visuales únicas adaptadas a tu marca, negocio o
              emprendimiento.
            </p>
          </div>
          <div className="content-cualidades">
            <FontAwesomeIcon icon={faAward} className="icono-cualidades" />
            <h1 className="h1cualidades">CALIDAD PROFESIONAL</h1>
            <p className="pcualidades">
              Trabajamos con materiales de primera calidad y tecnología de impresión
              para lograr resultados que destacan.
            </p>
          </div>
        </div>
      </section>
      <footer className="footer"></footer>
    </>

  )
}

export default Home