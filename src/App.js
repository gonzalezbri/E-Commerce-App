import { useEffect } from "react";
import {Container} from '@mui/material'
import {ThemeProvider} from '@mui/system'
import theme from './styles/theme'
import AppBar from "./components/appBar";
import Banner from "./components/banner";
import PromoBar from "./components/promobar";
import  Products  from "./components/products/index";

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
            <Products/>
            <PromoBar/>
            

        </Container>
        </ThemeProvider>
    )
}

export default App;
