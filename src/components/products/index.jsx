import React from 'react'
import { useTheme } from "@emotion/react";
import { Container, Grid, Dialog, DialogTitle, DialogContent, Typography } from "@mui/material";
import  SingleProduct  from './singleProduct'
import {useState, useEffect, Fragment} from 'react'
import Button from "@mui/material/Button";
import { ProductImage } from '../../styles/Products';

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

    //Item preview code
        const [selectedItem, setSelectedItem] = useState(null);
        const [isDialogOpen, setIsDialogOpen] = useState(false);

        const handleClick = (item) => {
            setSelectedItem(item);
            setIsDialogOpen(true);
        };

        const handleClose = () => {
            setIsDialogOpen(false);
        };

    const renderProducts = items.map(item =>(
        <Grid item key={item.item_id} xs={2} sm={4} md={4} disply="flex" flexDirection={"column"} 
        alignItems="center" onClick={() => handleClick(item)}>
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

            <Dialog color="secondary" open={isDialogOpen} onClose={handleClose}>
                {selectedItem && (
                    <Fragment>
                        <DialogTitle>{selectedItem.item_name}</DialogTitle>
                        <DialogContent>
                            <ProductImage src={selectedItem.item_picture} alt={selectedItem.item_name} />
                            <Typography variant='body1'>{selectedItem.item_description}</Typography>
                            <hr></hr>
                            <Button variant="outlined">Buy Now !</Button>
                        </DialogContent>
                    </Fragment>
                )}
            </Dialog>
        </Container>
    )
};