import { Product, ProductImage } from "../../styles/Products";
import ProductMeta from "./productMeta";


export default function SingleProduct({item}) {
    return (
        <Product>
            <ProductImage src={item.item_picture} />
            <ProductMeta item = {item}/>
        </Product>
    )
}