import { Link } from "react-router"
import { useForm } from "react-hook-form"
import "../../components/user-form/UserForm.css"
import "./Auth.css"

// Formato válido de email: algo@algo.algo (sin espacios)
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function Login() {
  // React Hook Form maneja su propio estado, por eso se le pide
  // al compilador de React que no optimice este componente.
  "use no memo"

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  // En esta entrega no se autentica contra una API:
  // los datos del formulario se muestran en la consola.
  function iniciarSesion(data) {
    console.log("Datos de login:", data)
  }

  return (
    <section className="auth-page">
      <div className="auth-card auth-card-chica">
        <h1 className="auth-titulo">Iniciar sesión</h1>
        <p className="auth-subtitulo">Ingresá con tu email y tu contraseña.</p>

        <form className="user-form" onSubmit={handleSubmit(iniciarSesion)} noValidate>
          <div className="user-form-grid">
            <div className="user-form-group user-form-group-full">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                placeholder="ejemplo@email.com"
                {...register("email", {
                  required: "El email es obligatorio",
                  pattern: {
                    value: EMAIL_REGEX,
                    message: "Ingresá un email válido (ejemplo@email.com)",
                  },
                })}
              />
              {errors.email && <p className="user-form-error">{errors.email.message}</p>}
            </div>

            <div className="user-form-group user-form-group-full">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                placeholder="Ingresá tu contraseña"
                {...register("password", {
                  required: "La contraseña es obligatoria",
                })}
              />
              {errors.password && <p className="user-form-error">{errors.password.message}</p>}
            </div>
          </div>

          <div className="user-form-actions">
            <button type="submit" className="user-form-btn auth-btn-ancho">
              Ingresar
            </button>
          </div>
        </form>

        <p className="auth-link">
          ¿No tenés cuenta? <Link to="/register">Registrate</Link>
        </p>
      </div>
    </section>
  )
}

export default Login
