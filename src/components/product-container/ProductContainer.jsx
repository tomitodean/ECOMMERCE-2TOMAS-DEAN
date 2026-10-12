import { useEffect, useState } from "react"
import ProductCard from "../product-card/ProductCard"
import { getProducts } from "../../services/product.service"

function ProductContainer() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        obtenerProductos()
    }, [])

    async function obtenerProductos() {
        try {
            const data = await getProducts()
            setProducts(data)
        } catch (error) {
            console.error("Error al obtener los productos:", error)
        }
    }

    return (
        <div className="container-productosgeneral">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductContainer