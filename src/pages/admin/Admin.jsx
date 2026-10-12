import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import "./Admin.css"
function Admin() {
    return (

        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Administrador de Productos</title>
            <link rel="stylesheet" href="/css/admin.css" />
            <link
                rel="icon"
                type="image/x-icon"
                href="./src/assets/images/iconos/LOGO ICON.svg"
            />
            {/* CONTENIDO */}
            <main className="content">
                {/* HEADER */}
                {/* Control para abrir/cerrar el formulario */}
                <div className="header-panel">
                    <div className="header-info">
                        <h1>Pedidos</h1>
                    </div>
                </div>
                
                {/* TABLA */}
                <section className="table-box">
                    <div className="table-responsive">
                        <table>
                            <thead>
                                <tr>
                                    <th>Foto</th>
                                    <th>Descripción del producto</th>
                                    <th>Cliente</th>
                                    <th>Celular</th>
                                    <th>Email</th>
                                    <th>Medida</th>
                                    <th>Cantidad</th>
                                    <th>Fecha</th>
                                    <th>Precio</th>
                                    <th>Estado</th>
                                    <th>Archivo</th>
                                    <th>Pago</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <img src="https://res.cloudinary.com/n0jocp3a/image/upload/v1790210406/DTF_UV.png" alt="dtf uv" />
                                    </td>
                                    <td>DTF UV - Stickers Premium</td>
                                    <td>Tomas Dean</td>
                                    <td>+54 9 3482613315</td>
                                    <td>tomas.dean2002@gmail.com</td>
                                    <td>28cm Ancho x 50cm Largo</td>
                                    <td>1</td>
                                    <td>8/05/26</td>
                                    <td>$28.000</td>
                                    <td>
                                        <select className="status-select" defaultValue="Cancelado">
                                            <option>Aceptado</option>
                                            <option>En proceso</option>
                                            <option>Finalizado</option>
                                            <option>Cancelado</option>
                                        </select>
                                    </td>
                                    <td>
                                        <button className="btn-view">Ver</button>
                                    </td>
                                    <td>Mercado Pago</td>
                                    <td className="acciones">
                                        <button className="btn-edit" aria-label="Editar pedido">
                                            <FontAwesomeIcon icon={faPenToSquare} />
                                        </button>
                                        <button className="btn-delete" aria-label="Borrar pedido">
                                            <FontAwesomeIcon icon={faTrashCan} />
                                        </button>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </>
    );
}
export default Admin