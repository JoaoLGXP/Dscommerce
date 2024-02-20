import "./styles.css";
import { ProductDTO } from "../../models/product";
import { Link } from "react-router-dom";

type Props = {
    product: ProductDTO
}

export default function CatalogCard({ product }: Props) {
    return (
        <Link to={`/product-details/${product.id}`}>
            <div className="dsc-catalog-card">
                <div className="dsc-catalog-card-image">
                    <img src={product.imgUrl} alt={product.name} />
                </div>
                <div className="dsc-catalog-card-price">
                    <h3>R$ {product.price.toFixed(2)}</h3>
                </div>
                <div className="dsc-catalog-card-name-product">
                    <h3>{product.name}</h3>
                </div>
            </div>
        </Link>

    );
}