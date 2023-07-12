import { useTheme } from "@emotion/react";
import { Container, Grid } from "@mui/material";
import  SingleProduct  from './singleProduct'
import {useState, useEffect} from 'react'

export default function Products() {
    const theme= useTheme();
    const [items, setItems] = useState([])

    const getItems = async () => {
        try {
            const response = await fetch("http://localhost:5000")
            const jsonData = await response.json();

            setItems(jsonData);
        } catch (err) {
            console.error(err.message);

        }
    }

    useEffect(() => {
        getItems();
        }, []);

    console.log(items)

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