import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProductRow({ product, handleEdit, handleDelete }) {
    
    return (
        <tr>
            <td>
                <img src={product.imagen} alt={product.nombre} />
            </td>
            <td>{product.nombre}</td>
            <td className="celda-descripcion">
                <div className="texto-descripcion">{product.descripcion}</div>
            </td>
            <td>{product.stock}</td>
            <td>
                {new Date(product.AtCreated).toLocaleDateString("es-AR", { timeZone: "UTC" })}
            </td>
            <td>${Number(product.precio).toLocaleString("es-AR")}</td>
            <td className="acciones">
                <button className="btn-edit" onClick={() => handleEdit(product.id)}>
                    <FontAwesomeIcon icon={["fas", "pen-to-square"]} />
                </button>
                <button className="btn-delete" onClick={() => handleDelete(product.id)}>
                    <FontAwesomeIcon icon={["fas", "trash-can"]} />
                </button>
            </td>
        </tr>
    );
}