import { Typography } from "@mui/material";
import { ProductMetaWrapper } from "../../styles/Products";



export default function ProductMeta ({item}) {

    return (
        <ProductMetaWrapper>
            <Typography variant={'h6'} lineHeight={2}>{item.item_name}</Typography>
            <Typography variant={'caption'}>${item.item_price}</Typography>
            <Typography variant={'caption'}>${item.item_description}</Typography>
        </ProductMetaWrapper>
    )
}