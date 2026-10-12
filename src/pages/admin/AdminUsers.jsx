import { useEffect, useState } from "react"
import Swal from "sweetalert2"
import "./AdminProductos.css"
import "./AdminUsers.css"
import UserForm from "../../components/user-form/UserForm"
import UserRow from "../../components/user-row/UserRow"
import { getUsers, createUser, updateUser, deleteUser } from "../../services/user.service"

function AdminUsers() {

    const [users, setUsers] = useState([])

    // Mientras se piden los usuarios a MockAPI
    const [cargando, setCargando] = useState(true)

    // Usuario que se está editando (null = se está cargando uno nuevo)
    const [selectedUser, setSelectedUser] = useState(null)

    // Indica si el formulario está desplegado
    const [formAbierto, setFormAbierto] = useState(false)

    async function obtenerUsuarios() {
        try {
            const data = await getUsers()
            setUsers(data)
        } catch (error) {
            console.error("Error al obtener los usuarios:", error)
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "No se pudieron cargar los usuarios.",
            })
        } finally {
            setCargando(false)
        }
    }

    useEffect(() => {
        obtenerUsuarios()
    }, [])

    // Cierra el formulario y sale del modo edición
    function cerrarFormulario() {
        setFormAbierto(false)
        setSelectedUser(null)
    }

    // Recibe los datos ya validados desde UserForm.
    // Devuelve true si se guardó bien y false si hubo un error.
    async function guardarUsuario(data) {
        try {
            if (selectedUser) {
                // Editar usuario existente -> PUT /users/:id
                const usuarioActualizado = await updateUser(selectedUser.id, {
                    ...selectedUser,
                    ...data,
                })

                // Reemplaza en la tabla el usuario viejo por el actualizado
                setUsers((prevUsers) =>
                    prevUsers.map((user) =>
                        user.id === selectedUser.id ? usuarioActualizado : user
                    )
                )

                Swal.fire({
                    icon: "success",
                    title: "Éxito",
                    text: "Usuario actualizado correctamente.",
                })
            } else {
                // Agregar usuario nuevo -> POST /users
                const usuarioNuevo = await createUser(data)

                // Agrega el usuario nuevo a la tabla
                setUsers((prevUsers) => [...prevUsers, usuarioNuevo])

                Swal.fire({
                    icon: "success",
                    title: "Éxito",
                    text: "Usuario agregado correctamente.",
                })
            }

            cerrarFormulario()
            return true

        } catch (error) {
            console.error("Error al guardar el usuario:", error)

            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Error al guardar el usuario. Por favor, inténtalo nuevamente.",
            })
            return false
        }
    }

    async function handleDelete(id) {
        const result = await Swal.fire({
            title: "¿Estás seguro?",
            text: "¡No podrás revertir esto!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar",
        })

        if (!result.isConfirmed) return

        try {
            await deleteUser(id)
            setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id))

            // Si justo se estaba editando ese usuario, se cierra el formulario
            if (selectedUser && selectedUser.id === id) {
                cerrarFormulario()
            }

            Swal.fire({
                icon: "success",
                title: "Eliminado",
                text: "Usuario eliminado correctamente.",
            })
        } catch (error) {
            console.error("Error al eliminar el usuario:", error)
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "No se pudo eliminar el usuario.",
            })
        }
    }

    function handleEdit(id) {
        const userToEdit = users.find((user) => user.id === id)

        if (userToEdit) {
            setSelectedUser(userToEdit)

            // Despliega el formulario con los datos cargados
            setFormAbierto(true)
        } else {
            console.error("Usuario no encontrado para editar.")
        }
    }

    // Números de las tarjetas: se recalculan solos cada vez que cambia "users"
    const totalUsuarios = users.length
    const totalProvincias = new Set(
        users.map((user) => user.Provincia).filter(Boolean)
    ).size

    return (
        <main className="content">
            {/* Control para abrir/cerrar el formulario */}
            <input
                type="checkbox"
                id="toggle-user-form"
                className="form-toggle"
                checked={formAbierto}
                onChange={(e) => {
                    if (e.target.checked) {
                        setFormAbierto(true)
                    } else {
                        cerrarFormulario()
                    }
                }}
            />
            <div className="header-panel">
                <div className="header-info">
                    <h1>Administrador de usuarios</h1>
                </div>
                <label htmlFor="toggle-user-form" className="btn-add">
                    <span className="text-open">+ Agregar usuario</span>
                    <span className="text-close">− Cerrar formulario</span>
                </label>
            </div>
            {/* FORMULARIO DESPLEGABLE (el mismo que usa Register) */}
            <div className="product-form">
                <div className="product-form-header">
                    <div>
                        <h2>{selectedUser ? "Editar usuario" : "Agregar usuario"}</h2>
                        <p>Completá la información del usuario.</p>
                    </div>
                    <label htmlFor="toggle-user-form" className="btn-close-form">
                        ×
                    </label>
                </div>
                {/* La "key" hace que el formulario se vacíe o se cargue
                    de nuevo cada vez que se abre, se cierra o cambia el usuario */}
                <UserForm
                    key={`${selectedUser ? selectedUser.id : "nuevo"}-${formAbierto}`}
                    usuario={selectedUser}
                    onSubmit={guardarUsuario}
                    onCancel={cerrarFormulario}
                    textoBoton={selectedUser ? "Guardar cambios" : "Agregar"}
                />
            </div>

            {/* CARDS */}
            <section className="cards">
                <div className="card">
                    <span className="titulocard">Total usuarios</span>
                    <h2>{totalUsuarios}</h2>
                </div>
                <div className="card">
                    <span className="titulocard">Provincias</span>
                    <h2>{totalProvincias}</h2>
                </div>
            </section>

            {/* TABLA */}
            <section className="table-box">
                <div className="table-responsive">
                    <table className="tabla-usuarios">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Fecha de nacimiento</th>
                                <th>Provincia</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cargando && (
                                <tr>
                                    <td colSpan={5}>Cargando usuarios...</td>
                                </tr>
                            )}
                            {!cargando && users.length === 0 && (
                                <tr>
                                    <td colSpan={5}>Todavía no hay usuarios registrados.</td>
                                </tr>
                            )}
                            {users.map((user) => (
                                <UserRow
                                    key={user.id}
                                    user={user}
                                    handleEdit={handleEdit}
                                    handleDelete={handleDelete}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    )
}

export default AdminUsers
