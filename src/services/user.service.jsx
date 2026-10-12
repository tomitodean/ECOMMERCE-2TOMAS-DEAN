import axios from "axios"

const URL_BASE = "https://6aab23beea0e22daa6dbcf7d.mockapi.io"

// Trae todos los usuarios -> GET /users
export async function getUsers() {
  const response = await axios.get(`${URL_BASE}/users`)
  return response.data
}

// Crea un usuario nuevo -> POST /users
export async function createUser(data) {
  const response = await axios.post(`${URL_BASE}/users`, data)
  return response.data
}

// Modifica un usuario existente -> PUT /users/:id
export async function updateUser(id, data) {
  const response = await axios.put(`${URL_BASE}/users/${id}`, data)
  return response.data
}

// Elimina un usuario -> DELETE /users/:id
export async function deleteUser(id) {
  const response = await axios.delete(`${URL_BASE}/users/${id}`)
  return response.data
}
