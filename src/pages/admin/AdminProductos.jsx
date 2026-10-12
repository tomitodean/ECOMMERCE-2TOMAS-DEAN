import { useForm } from "react-hook-form";
import "./AdminProductos.css"
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductRow from "../../components/product-row/ProductRow";

library.add(fas, far, fab);

const URL_BASE = "https://6aab23beea0e22daa6dbcf7d.mockapi.io";

function AdminProductos() {
    // React Hook Form maneja su propio estado, por eso se le pide
    // al compilador de React que no optimice este componente.
    // Sin esto, después de agregar o cancelar, el formulario de edición
    // aparecía vacío y no dejaba editar.
    "use no memo"

    const [products, setProducts] = useState([]);

    // Id del producto que se está editando (null = se está cargando uno nuevo)
    const [editingProductId, setEditingProductId] = useState(null);

    // Indica si el formulario está desplegado
    const [formAbierto, setFormAbierto] = useState(false);

    async function obtenerProductos() {
        try {
            const response = await axios.get(`${URL_BASE}/products`);
            setProducts(response.data);
        } catch (error) {
            console.error("Error al obtener los productos:", error);
        }
    }

    useEffect(() => {
        obtenerProductos();
    }, []);

    const { register, handleSubmit, setValue, reset } = useForm();

    // Cierra el formulario, lo vacía y sale del modo edición
    function cerrarFormulario() {
        setFormAbierto(false);
        setEditingProductId(null);
        reset();
    }

    async function envioformulario(data) {
        try {
            if (editingProductId) {
                // Editar producto existente
                const response = await axios.put(`${URL_BASE}/products/${editingProductId}`, data);
                console.log(response.data);

                // Reemplaza en la tabla el producto viejo por el actualizado
                setProducts((prevProducts) =>
                    prevProducts.map((product) =>
                        product.id === editingProductId ? response.data : product
                    )
                );

                Swal.fire({
                    icon: "success",
                    title: "Éxito",
                    text: "Producto actualizado correctamente.",
                });
            } else {
                // Agregar nuevo producto
                const response = await axios.post(`${URL_BASE}/products`, data);
                console.log(response.data);

                // Agrega el producto nuevo a la tabla
                setProducts((prevProducts) => [...prevProducts, response.data]);

                Swal.fire({
                    icon: "success",
                    title: "Éxito",
                    text: "Producto agregado correctamente.",
                });
            }

            cerrarFormulario();

        } catch (error) {
            console.error("Error al enviar el formulario:", error);

            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Error al guardar el producto. Por favor, inténtalo nuevamente.",
            });
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
        });

        if (!result.isConfirmed) return;

        try {
            await axios.delete(`${URL_BASE}/products/${id}`);
            setProducts((prevProducts) =>
                prevProducts.filter((product) => product.id !== id)
            );

            Swal.fire({
                icon: "success",
                title: "Eliminado",
                text: "Producto eliminado correctamente.",
            });
        } catch (error) {
            console.error("Error al eliminar el producto:", error);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "No se pudo eliminar el producto.",
            });
        }
    }

    function handleEdit(id) {
        const productToEdit = products.find((product) => product.id === id);
        if (productToEdit) {
            setValue("nombre", productToEdit.nombre);
            setValue("imagen", productToEdit.imagen);
            setValue("descripcion", productToEdit.descripcion);
            setValue("precio", productToEdit.precio);
            setValue("categoria", productToEdit.categoria);
            setValue("stock", productToEdit.stock);
            // Si el producto no tiene una fecha válida, el campo queda vacío (antes se rompía)
            const fecha = new Date(productToEdit.AtCreated);
            setValue("AtCreated", isNaN(fecha) ? "" : fecha.toISOString().split("T")[0]);
            console.log("Editar producto:", productToEdit);
            setEditingProductId(id);

            // Despliega el formulario con los datos cargados
            setFormAbierto(true);

        } else {
            console.error("Producto no encontrado para editar.");
        }
    }

    // Números de las tarjetas: se recalculan solos cada vez que cambia "products"
    const STOCK_BAJO = 5;

    const totalProductos = products.length;
    const productosActivos = products.filter((product) => product.stock > 0).length;
    const totalCategorias = new Set(products.map((product) => product.categoria)).size;
    const stockBajo = products.filter((product) => product.stock <= STOCK_BAJO).length;

    return (
        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Administrador de Productos</title>
            <link rel="stylesheet" href="/css/admin.css" />
            <link
                rel="icon"
                type="image/x-icon"
                href="/assets/images/iconos/LOGO ICON.svg"
            />
            {/* CONTENIDO */}
            <main className="content">
                {/* HEADER */}
                {/* Control para abrir/cerrar el formulario */}
                <input
                    type="checkbox"
                    id="toggle-product-form"
                    className="form-toggle"
                    checked={formAbierto}
                    onChange={(e) => {
                        if (e.target.checked) {
                            setFormAbierto(true);
                        } else {
                            cerrarFormulario();
                        }
                    }}
                />
                <div className="header-panel">
                    <div className="header-info">
                        <h1>Administrador de productos</h1>
                    </div>
                    <label htmlFor="toggle-product-form" className="btn-add">
                        <span className="text-open">+ Agregar producto</span>
                        <span className="text-close">− Cerrar formulario</span>
                    </label>
                </div>
                {/* FORMULARIO DESPLEGABLE */}
                <form className="product-form" onSubmit={handleSubmit(envioformulario)}>
                    <div className="product-form-header">
                        <div>
                            <h2>{editingProductId ? "Editar producto" : "Agregar producto"}</h2>
                            <p>Completá la información del producto.</p>
                        </div>
                        <label htmlFor="toggle-product-form" className="btn-close-form">
                            ×
                        </label>
                    </div>
                    <div className="form-grid">
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre</label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                {...register("nombre",)}
                                placeholder="Ejemplo: Cartel luminoso"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="imagen">URL de la imagen</label>
                            <input

                                {...register("imagen",)}
                                type="url"
                                id="imagen"
                                name="imagen"
                                placeholder="https://ejemplo.com/imagen.jpg"
                                required
                            />
                        </div>
                        <div className="form-group form-group-full">
                            <label htmlFor="descripcion">Descripción</label>
                            <textarea
                                id="descripcion"

                                {...register("descripcion",)}
                                rows={4}
                                placeholder="Ingresá una descripción"
                                required
                                defaultValue={""}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="precio">Precio</label>
                            <input
                                type="number"
                                id="precio"
                                name="precio"
                                placeholder="$ 0"
                                min={0}
                                step="0.01"
                                {...register("precio", { valueAsNumber: true })}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="categoria">Categoría</label>
                            <select id="categoria" name="categoria" defaultValue="" {...register("categoria",)} required>
                                <option value="" disabled>
                                    Seleccioná una categoría
                                </option>
                                <option value="carteleria">Cartelería</option>
                                <option value="dtf-uv">DTF UV</option>
                                <option value="dtf-textil">DTF textil</option>
                                <option value="gigantografias">Gigantografías</option>
                                <option value="impresiones">Impresiones</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="stock">Stock</label>
                            <input
                                type="number"
                                id="stock"

                                {...register("stock", { valueAsNumber: true })}
                                placeholder="Cantidad disponible"
                                min={0}
                                step={1}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="fecha-ingreso">Fecha de ingreso</label>
                            <input
                                type="date"
                                id="fecha-ingreso"
                                name="fecha-ingreso"
                                {...register("AtCreated", { valueAsDate: true })}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-actions">
                        <label htmlFor="toggle-product-form" className="btn-cancel">
                            Cancelar
                        </label>
                        <button type="submit" className="btn-confirm">
                            {editingProductId ? "Guardar cambios" : "Agregar"}
                        </button>
                    </div>
                </form>



                {/* CARDS */}
                <section className="cards">
                    <div className="card">
                        <span className="titulocard">Total productos</span>
                        <h2>{totalProductos}</h2>
                    </div>
                    <div className="card">
                        <span className="titulocard">Productos activos</span>
                        <h2>{productosActivos}</h2>
                    </div>
                    <div className="card">
                        <span className="titulocard">Categorías</span>
                        <h2>{totalCategorias}</h2>
                    </div>
                    <div className="card">
                        <span className="titulocard">Stock bajo</span>
                        <h2>{stockBajo}</h2>
                    </div>
                </section>



                {/* TABLA */}
                <section className="table-box">
                    <div className="table-responsive">
                        <table>
                            <thead>
                                <tr>
                                    <th>Foto</th>
                                    <th>Nombre</th>
                                    <th>Descripción</th>
                                    <th>Stock</th>
                                    <th>Fecha</th>
                                    <th>Precio</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product) => {
                                    return <ProductRow key={product.id} 
                                                       product={product} 
                                                       handleEdit={handleEdit}
                                                       handleDelete={handleDelete} />;
                                })}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </>

    );
}

export default AdminProductos;
