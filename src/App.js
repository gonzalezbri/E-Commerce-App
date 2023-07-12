import { useEffect } from "react";
import {Container, Typography, Box} from '@mui/material'
import {ThemeProvider} from '@mui/system'
import theme from './styles/theme'
import AppBar from "./components/appBar";
import Banner from "./components/banner";
import PromoBar from "./components/promobar";
import Products  from "./components/products/index";
//import ListItems from "./components/products/Item";

function App (){
    useEffect(()=>{
        document.title = 'Dark Alley Deals'
    },[]);

    return (
        <ThemeProvider theme={theme}>
        <Container 
        maxWidth='xl'
        sx={{
            background: '#212121'
        }}>
            <AppBar />
            <Banner />
            <PromoBar/>
            <Box display='flex' justifyContent={'center'} sx={{p:4}}>
                <Typography  color='secondary' variant="h4">Products In Stock</Typography>
            </Box>
            <Products/>
        </Container>
        </ThemeProvider>
    )
}

export default App;
