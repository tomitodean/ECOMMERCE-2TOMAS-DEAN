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
                                        <img src="./src/assets/images/productos/DTF UV.png" alt="dtf uv" />
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
                                        <select className="status-select">
                                            <option>Aceptado</option>
                                            <option>En proceso</option>
                                            <option>Finalizado</option>
                                            <option selected="">Cancelado</option>
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
                                <tr>
                                    <td>
                                        <img
                                            src="./src/assets/images/productos/DTF TEXTIL BOLSAS DE FRISELINA.png"
                                            alt="bolsas de friselina"
                                        />
                                    </td>
                                    <td>DTF Textil</td>
                                    <td>Tomas Dean</td>
                                    <td>+54 9 3482613315</td>
                                    <td>tomas.dean2002@gmail.com</td>
                                    <td>58cm Ancho x 50cm Largo</td>
                                    <td>1</td>
                                    <td>8/05/26</td>
                                    <td>$58.000</td>
                                    <td>
                                        <select className="status-select">
                                            <option selected="">Aceptado</option>
                                            <option>En proceso</option>
                                            <option>Finalizado</option>
                                            <option>Cancelado</option>
                                        </select>
                                    </td>
                                    <td>
                                        <button className="btn-view">Ver</button>
                                    </td>
                                    <td>Tarjeta</td>
                                    <td className="acciones">
                                        <button className="btn-edit" aria-label="Editar pedido">
                                            <FontAwesomeIcon icon={faPenToSquare} />
                                        </button>
                                        <button className="btn-delete" aria-label="Borrar pedido">
                                            <FontAwesomeIcon icon={faTrashCan} />
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img
                                            src="./src/assets/images/productos/CORPOREOS 3D ACRILICO.png"
                                            alt="corporeos 3d"
                                        />
                                    </td>
                                    <td>CORPÓREOS - 3D con Acrílico</td>
                                    <td>Tomas Dean</td>
                                    <td>+54 9 3482613315</td>
                                    <td>tomas.dean2002@gmail.com</td>
                                    <td>58cm Ancho x 50cm Largo</td>
                                    <td>1</td>
                                    <td>8/05/26</td>
                                    <td>$28.000</td>
                                    <td>
                                        <select className="status-select">
                                            <option>Aceptado</option>
                                            <option selected="">En proceso</option>
                                            <option>Finalizado</option>
                                            <option>Cancelado</option>
                                        </select>
                                    </td>
                                    <td>
                                        <button className="btn-view">Ver</button>
                                    </td>
                                    <td>Transferencia</td>
                                    <td className="acciones">
                                        <button className="btn-edit" aria-label="Editar pedido">
                                            <FontAwesomeIcon icon={faPenToSquare} />
                                        </button>
                                        <button className="btn-delete" aria-label="Borrar pedido">
                                            <FontAwesomeIcon icon={faTrashCan} />
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img
                                            src="./src/assets/images/productos/CARTELES SALIENTESS.png"
                                            alt="cartel saliente"
                                        />
                                    </td>
                                    <td>CARTELERÍA - Cartel saliente</td>
                                    <td>Tomas Dean</td>
                                    <td>+54 9 3482613315</td>
                                    <td>tomas.dean2002@gmail.com</td>
                                    <td>40cm Ancho x 50cm Largo</td>
                                    <td>1</td>
                                    <td>8/05/26</td>
                                    <td>$28.000</td>
                                    <td>
                                        <select className="status-select">
                                            <option>Aceptado</option>
                                            <option selected="">En proceso</option>
                                            <option>Finalizado</option>
                                            <option>Cancelado</option>
                                        </select>
                                    </td>
                                    <td>
                                        <button className="btn-view">Ver</button>
                                    </td>
                                    <td>Transferencia</td>
                                    <td className="acciones">
                                        <button className="btn-edit" aria-label="Editar pedido">
                                            <FontAwesomeIcon icon={faPenToSquare} />
                                        </button>
                                        <button className="btn-delete" aria-label="Borrar pedido">
                                            <FontAwesomeIcon icon={faTrashCan} />
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img
                                            src="./src/assets/images/productos/IMPRESION DIGITALL.png"
                                            alt="impresion digital"
                                        />
                                    </td>
                                    <td>CARTELES DE NEÓN</td>
                                    <td>Tomas Dean</td>
                                    <td>+54 9 3482613315</td>
                                    <td>tomas.dean2002@gmail.com</td>
                                    <td>45cm Ancho x 60cm Largo</td>
                                    <td>1</td>
                                    <td>8/05/26</td>
                                    <td>$28.000</td>
                                    <td>
                                        <select className="status-select">
                                            <option>Aceptado</option>
                                            <option selected="">En proceso</option>
                                            <option>Finalizado</option>
                                            <option>Cancelado</option>
                                        </select>
                                    </td>
                                    <td>
                                        <button className="btn-view">Ver</button>
                                    </td>
                                    <td>Transferencia</td>
                                    <td className="acciones">
                                        <button className="btn-edit" aria-label="Editar pedido">
                                            <FontAwesomeIcon icon={faPenToSquare} />
                                        </button>
                                        <button className="btn-delete" aria-label="Borrar pedido">
                                            <FontAwesomeIcon icon={faTrashCan} />
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img
                                            src="./src/assets/images/productos/GIGANTOGRAFIAS.png"
                                            alt="gigantografia"
                                        />
                                    </td>
                                    <td>GIGANTOGRAFÍA - PLOTEOS</td>
                                    <td>Tomas Dean</td>
                                    <td>+54 9 3482613315</td>
                                    <td>tomas.dean2002@gmail.com</td>
                                    <td>40cm Ancho x 50cm Largo</td>
                                    <td>1</td>
                                    <td>8/05/26</td>
                                    <td>$28.000</td>
                                    <td>
                                        <select className="status-select">
                                            <option>Aceptado</option>
                                            <option selected="">En proceso</option>
                                            <option>Finalizado</option>
                                            <option>Cancelado</option>
                                        </select>
                                    </td>
                                    <td>
                                        <button className="btn-view">Ver</button>
                                    </td>
                                    <td>Transferencia</td>
                                    <td className="acciones">
                                        <button className="btn-edit" aria-label="Editar pedido">
                                            <FontAwesomeIcon icon={faPenToSquare} />
                                        </button>
                                        <button className="btn-delete" aria-label="Borrar pedido">
                                            <FontAwesomeIcon icon={faTrashCan} />
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img
                                            src="./src/assets/images/productos/BANNER ROLL UP.png"
                                            alt="banner roll up"
                                        />
                                    </td>
                                    <td>BANNER ROLL UP</td>
                                    <td>Tomas Dean</td>
                                    <td>+54 9 3482613315</td>
                                    <td>tomas.dean2002@gmail.com</td>
                                    <td>40cm Ancho x 50cm Largo</td>
                                    <td>1</td>
                                    <td>8/05/26</td>
                                    <td>$28.000</td>
                                    <td>
                                        <select className="status-select">
                                            <option>Aceptado</option>
                                            <option selected="">En proceso</option>
                                            <option>Finalizado</option>
                                            <option>Cancelado</option>
                                        </select>
                                    </td>
                                    <td>
                                        <button className="btn-view">Ver</button>
                                    </td>
                                    <td>Transferencia</td>
                                    <td className="acciones">
                                        <button className="btn-edit" aria-label="Editar pedido">
                                            <FontAwesomeIcon icon={faPenToSquare} />
                                        </button>
                                        <button className="btn-delete" aria-label="Borrar pedido">
                                            <FontAwesomeIcon icon={faTrashCan} />
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img
                                            src="./src/assets/images/productos/CARTEL DE NEON.png"
                                            alt="cartel de neon"
                                        />
                                    </td>
                                    <td>CARTELES DE NEÓN</td>
                                    <td>Tomas Dean</td>
                                    <td>+54 9 3482613315</td>
                                    <td>tomas.dean2002@gmail.com</td>
                                    <td>45cm Ancho x 60cm Largo</td>
                                    <td>1</td>
                                    <td>8/05/26</td>
                                    <td>$28.000</td>
                                    <td>
                                        <select className="status-select">
                                            <option>Aceptado</option>
                                            <option selected="">En proceso</option>
                                            <option>Finalizado</option>
                                            <option>Cancelado</option>
                                        </select>
                                    </td>
                                    <td>
                                        <button className="btn-view">Ver</button>
                                    </td>
                                    <td>Transferencia</td>
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