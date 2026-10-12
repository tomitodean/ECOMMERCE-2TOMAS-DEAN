import axios from "axios"

const URL_BASE = "https://6aab23beea0e22daa6dbcf7d.mockapi.io"

// Trae todos los productos -> GET /products
export async function getProducts() {
  const response = await axios.get(`${URL_BASE}/products`)
  return response.data
}

// Trae un solo producto por su id -> GET /products/:id
export async function getProductById(id) {
  const response = await axios.get(`${URL_BASE}/products/${id}`)
  return response.data
}
