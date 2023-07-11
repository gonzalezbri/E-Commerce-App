import { Product, ProductImage } from "../../styles/Products";
import ProductMeta from "./productMeta";


export default function SingleProduct({product}) {
    return (
        <Product>
            <ProductImage src={product.image} />
            <ProductMeta product = {product}/>
        </Product>
    )
}