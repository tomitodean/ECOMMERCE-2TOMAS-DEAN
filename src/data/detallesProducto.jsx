// Detalles que se muestran en la página de cada producto (ProductDetail).
// Se eligen según la categoría que tiene el producto en MockAPI.
// Para cambiar un texto o una medida, se cambia acá y se actualiza
// en todos los productos de esa categoría.

const DETALLES_POR_CATEGORIA = {
  "dtf-uv": {
    subtitulo: "Plancha a partir de 1/2 metro - Excelente adherencia",
    detallePrecio: "Cotización según medida",
    tituloMedidas: "Medidas de plancha",
    medidas: ["1/2 mt", "1 mt", "2 mts", "Medida personalizada"],
    aviso: "Importante: Enviar el archivo en jpg o pdf.",
  },
  "dtf-textil": {
    subtitulo: "Plancha a partir de 1/2 metro - Lista para estampar",
    detallePrecio: "Cotización según medida",
    tituloMedidas: "Medidas de plancha",
    medidas: ["1/2 mt", "1 mt", "2 mts", "Medida personalizada"],
    aviso: "Importante: Enviar el archivo en png con fondo transparente.",
  },
  "carteleria": {
    subtitulo: "Carteles a medida para tu local o emprendimiento",
    detallePrecio: "Cotización según medida",
    tituloMedidas: "Medidas del cartel",
    medidas: ["50 x 50 cm", "100 x 50 cm", "100 x 100 cm", "Medida personalizada"],
    aviso: "Importante: Enviar el logo o diseño en jpg o pdf.",
  },
  "gigantografias": {
    subtitulo: "Impresión en gran formato para que tu marca se vea desde lejos",
    detallePrecio: "Cotización el metro cuadrado",
    tituloMedidas: "Medidas de la lona",
    medidas: ["1 x 1 mt", "2 x 1 mts", "3 x 2 mts", "Medida personalizada"],
    aviso: "Importante: Enviar el archivo en jpg o pdf en buena calidad.",
  },
  "impresiones": {
    subtitulo: "Impresión digital de alta calidad",
    detallePrecio: "Cotización según tamaño y cantidad",
    tituloMedidas: "Tamaño de impresión",
    medidas: ["A4", "A3", "Súper A3", "Medida personalizada"],
    aviso: "Importante: Enviar el archivo en pdf.",
  },
}

// Se usa cuando el producto no tiene categoría o tiene una que no está en la lista
const DETALLES_GENERALES = {
  subtitulo: "Trabajo personalizado para tu marca o emprendimiento",
  detallePrecio: "Cotización según medida",
  tituloMedidas: "Medidas",
  medidas: ["Chica", "Mediana", "Grande", "Medida personalizada"],
  aviso: "Importante: Enviar el archivo en jpg o pdf.",
}

export function getDetallesProducto(categoria) {
  return DETALLES_POR_CATEGORIA[categoria] || DETALLES_GENERALES
}
