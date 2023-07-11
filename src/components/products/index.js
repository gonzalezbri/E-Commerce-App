import { useTheme } from "@emotion/react";
import { Container, Grid } from "@mui/material";
import {products} from "../../data/index"
import  SingleProduct  from './singleProduct'


export default function Products() {
    const theme= useTheme();

    const renderProducts = products.map(product =>(
        <Grid item key={product.id} disply="flex" flexDirection={"column"} 
        alignItems="center">
            <SingleProduct product={product}/>
        </Grid>
    ));
    return(
        <Container>
            <Grid container justifyContent={"center"} 
            sx={{ margin: '20px 4px 10px 4px'}}>
                {renderProducts}

            </Grid>
        </Container>
    )
};