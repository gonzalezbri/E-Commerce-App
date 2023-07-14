import { Typography } from "@mui/material";
import { ProductMetaWrapper } from "../../styles/Products";
import { Colors } from '../../styles/theme/index'
import Button from "@mui/material/Button";



export default function ProductMeta ({item}) {

    return (
        <ProductMetaWrapper>
            <Typography color='secondary' variant={'h5'} lineHeight={2}>{item.item_name}</Typography>
            <Typography color='#FFC107' variant={'h6'}>${item.item_price}</Typography>
            <Button variant="outlined">Add to Cart</Button>
        </ProductMetaWrapper>
    )
}