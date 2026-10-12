import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import ProductContainer from '../../components/product-container/ProductContainer'

function Products() {
    return (
        <>
            <div className="ordenar-container">
                <div className="ordenar-dropdown">
                    <div className="ordenar-box">
                        <span className="ordenar-label">Ordenar:</span>
                        <span className="ordenar-valor">Destacados</span>
                        {/* Flecha que gira al desplegar el menú */}
                        <FontAwesomeIcon icon={faChevronDown} className="ordenar-icon" />
                    </div>
                    <ul className="ordenar-menu">
                        <li>
                            <a href="#">Destacados</a>
                        </li>
                        <li>
                            <a href="#">Más vendidos</a>
                        </li>
                        <li>
                            <a href="#">Más recientes</a>
                        </li>
                        <li>
                            <a href="#">Menor precio</a>
                        </li>
                        <li>
                            <a href="#">Mayor precio</a>
                        </li>
                    </ul>
                </div>
            </div>

            <ProductContainer />
        </>

    )
}

export default Products