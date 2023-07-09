import { useEffect } from "react";
import {Button,Container} from '@mui/material'
import {ThemeProvider} from '@mui/system'
import theme from './styles/theme'
import AppBar from "./components/appBar";
import Banner from "./components/banner";
import PromoBar from "./components/promobar";

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
            {
                
            }
            

        </Container>
        </ThemeProvider>
    )
}

export default App;
