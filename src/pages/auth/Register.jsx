import { Link, useNavigate } from "react-router"
import Swal from "sweetalert2"
import UserForm from "../../components/user-form/UserForm"
import { createUser } from "../../services/user.service"
import "./Auth.css"

function Register() {
  const navigate = useNavigate()

  // Recibe los datos ya validados desde UserForm.
  // Devuelve true si se guardó bien y false si hubo un error.
  async function registrarUsuario(data) {
    try {
      // POST /users
      await createUser(data)

      await Swal.fire({
        icon: "success",
        title: "¡Cuenta creada!",
        text: "Te registraste correctamente. Ya podés iniciar sesión.",
      })

      navigate("/login")
      return true

    } catch (error) {
      console.error("Error al registrar el usuario:", error)

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo crear la cuenta. Por favor, inténtalo nuevamente.",
      })
      return false
    }
  }

  return (
    <section className="auth-page">
      <div className="auth-card">
        <h1 className="auth-titulo">Crear cuenta</h1>
        <p className="auth-subtitulo">
          Registrate para hacer tus pedidos más rápido.
        </p>

        <UserForm onSubmit={registrarUsuario} textoBoton="Registrarme" />

        <p className="auth-link">
          ¿Ya tenés cuenta? <Link to="/login">Iniciá sesión</Link>
        </p>
      </div>
    </section>
  )
}

export default Register
