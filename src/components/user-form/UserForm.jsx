import { useForm } from "react-hook-form"
import "./UserForm.css"

// Formulario de usuario. Se usa en dos lugares:
//  - Register (crear una cuenta nueva)
//  - AdminUsers (crear o editar un usuario desde el panel)
//
// Los nombres de los campos son los mismos que tiene el recurso "users"
// en MockAPI: NombreApellido, Email, Provincia, FechaNacimiento y password.

const PROVINCIAS = [
  "Buenos Aires",
  "Ciudad Autónoma de Buenos Aires",
  "Catamarca",
  "Chaco",
  "Chubut",
  "Córdoba",
  "Corrientes",
  "Entre Ríos",
  "Formosa",
  "Jujuy",
  "La Pampa",
  "La Rioja",
  "Mendoza",
  "Misiones",
  "Neuquén",
  "Río Negro",
  "Salta",
  "San Juan",
  "San Luis",
  "Santa Cruz",
  "Santa Fe",
  "Santiago del Estero",
  "Tierra del Fuego",
  "Tucumán",
]

// Formato válido de email: algo@algo.algo (sin espacios)
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function UserForm({ usuario = null, onSubmit, onCancel, textoBoton = "Registrarme" }) {
  // React Hook Form maneja su propio estado, por eso se le pide
  // al compilador de React que no optimice este componente.
  "use no memo"

  // Si llega un usuario, el formulario está en modo edición
  const modoEdicion = usuario !== null

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      NombreApellido: usuario?.NombreApellido || "",
      Email: usuario?.Email || "",
      // La fecha se guarda como "2000-12-31" (lo que necesita el input date)
      FechaNacimiento: usuario?.FechaNacimiento ? String(usuario.FechaNacimiento).slice(0, 10) : "",
      Provincia: usuario?.Provincia || "",
      password: "",
      RepetirPassword: "",
    },
  })

  async function enviar(data) {
    // "RepetirPassword" solo sirve para validar, no se guarda
    const { RepetirPassword, ...datos } = data

    // Al editar, si no se escribió una contraseña nueva se mantiene la anterior
    if (modoEdicion && !datos.password) {
      delete datos.password
    }

    const salioBien = await onSubmit(datos)

    if (salioBien) {
      reset()
    }
  }

  return (
    <form className="user-form" onSubmit={handleSubmit(enviar)} noValidate>
      <div className="user-form-grid">
        <div className="user-form-group user-form-group-full">
          <label htmlFor="name">Nombre y apellido</label>
          <input
            type="text"
            id="name"
            placeholder="Ingresá tu nombre y apellido"
            {...register("NombreApellido", {
              required: "El nombre y apellido es obligatorio",
              validate: (value) => value.trim() !== "" || "El nombre y apellido es obligatorio",
            })}
          />
          {errors.NombreApellido && <p className="user-form-error">{errors.NombreApellido.message}</p>}
        </div>

        <div className="user-form-group user-form-group-full">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            placeholder="ejemplo@email.com"
            {...register("Email", {
              required: "El email es obligatorio",
              pattern: {
                value: EMAIL_REGEX,
                message: "Ingresá un email válido (ejemplo@email.com)",
              },
            })}
          />
          {errors.Email && <p className="user-form-error">{errors.Email.message}</p>}
        </div>

        <div className="user-form-group">
          <label htmlFor="password">
            {modoEdicion ? "Nueva contraseña" : "Contraseña"}
          </label>
          <input
            type="password"
            id="password"
            placeholder={modoEdicion ? "Dejala vacía para no cambiarla" : "Mínimo 6 caracteres"}
            {...register("password", {
              required: modoEdicion ? false : "La contraseña es obligatoria",
              minLength: {
                value: 6,
                message: "La contraseña debe tener al menos 6 caracteres",
              },
            })}
          />
          {errors.password && <p className="user-form-error">{errors.password.message}</p>}
        </div>

        <div className="user-form-group">
          <label htmlFor="repeatPassword">Repetir contraseña</label>
          <input
            type="password"
            id="repeatPassword"
            placeholder="Repetí la contraseña"
            {...register("RepetirPassword", {
              validate: (value, formValues) => {
                if (!modoEdicion && !value) {
                  return "Repetí la contraseña"
                }
                return value === formValues.password || "Las contraseñas no coinciden"
              },
            })}
          />
          {errors.RepetirPassword && (
            <p className="user-form-error">{errors.RepetirPassword.message}</p>
          )}
        </div>

        <div className="user-form-group">
          <label htmlFor="birthDate">Fecha de nacimiento</label>
          <input
            type="date"
            id="birthDate"
            {...register("FechaNacimiento", {
              required: "La fecha de nacimiento es obligatoria",
            })}
          />
          {errors.FechaNacimiento && <p className="user-form-error">{errors.FechaNacimiento.message}</p>}
        </div>

        <div className="user-form-group">
          <label htmlFor="province">Provincia</label>
          <select
            id="province"
            {...register("Provincia", {
              required: "Seleccioná una provincia",
            })}
          >
            <option value="">Seleccioná una provincia</option>
            {PROVINCIAS.map((provincia) => (
              <option key={provincia} value={provincia}>
                {provincia}
              </option>
            ))}
          </select>
          {errors.Provincia && <p className="user-form-error">{errors.Provincia.message}</p>}
        </div>
      </div>

      <div className="user-form-actions">
        {onCancel && (
          <button type="button" className="user-form-btn-cancel" onClick={onCancel}>
            Cancelar
          </button>
        )}
        <button type="submit" className="user-form-btn" disabled={isSubmitting}>
          {isSubmitting ? "Guardando..." : textoBoton}
        </button>
      </div>
    </form>
  )
}

export default UserForm
