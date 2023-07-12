import { useTheme } from "@emotion/react";
import { Container, Grid } from "@mui/material";
import {products} from "../../data/index"
import  SingleProduct  from './singleProduct'


export default function Products() {
    const theme= useTheme();

    const renderProducts = items.map(item =>(
        <Grid item key={item.item_id} xs={2} sm={4} md={4} disply="flex" flexDirection={"column"} 
        alignItems="center">
            <SingleProduct item={item}/>
        </Grid>
    ));
    return(
        <Container>
            <Grid container spacing={{xs:2, md:3}} justifyContent={"center"} 
            sx={{ margin: '20px 4px 10px 4px'}}
            columns={{xs:4, sm:8, md: 12}}>
                {renderProducts}

            </Grid>
        </Container>
    )
};