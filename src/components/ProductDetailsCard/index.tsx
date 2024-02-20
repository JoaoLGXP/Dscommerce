import "./styles.css";
import ProductCategory from "../ProductCategory";
import { ProductDTO } from "../../models/product";

type Props = {
    product: ProductDTO;
}

export default function ProductDetailsCard({ product }: Props) {
    return (
        <div className="dsc-card-details">
            <div className="dsc-product-detail-image">
                <img src={product.imgUrl} alt={product.name} />
            </div>
            <div className="dsc-product-detail-description">
                <h3>R$ {product.price.toFixed(2)}</h3>
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <div className="dsc-product-category">
                    {
                        product.categories.map(item => (
                            <ProductCategory key={item.id} name={item.name} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}