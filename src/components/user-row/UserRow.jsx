import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons"

export default function UserRow({ user, handleEdit, handleDelete }) {
    return (
        <tr>
            <td>{user.NombreApellido}</td>
            <td>{user.Email}</td>
            <td>
                {user.FechaNacimiento
                    ? new Date(user.FechaNacimiento).toLocaleDateString("es-AR", { timeZone: "UTC" })
                    : "-"}
            </td>
            <td>{user.Provincia || "-"}</td>
            <td className="acciones">
                <button
                    className="btn-edit"
                    onClick={() => handleEdit(user.id)}
                    aria-label={`Editar a ${user.NombreApellido}`}
                >
                    <FontAwesomeIcon icon={faPenToSquare} />
                </button>
                <button
                    className="btn-delete"
                    onClick={() => handleDelete(user.id)}
                    aria-label={`Eliminar a ${user.NombreApellido}`}
                >
                    <FontAwesomeIcon icon={faTrashCan} />
                </button>
            </td>
        </tr>
    )
}
