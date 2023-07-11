import React, { Fragment, useEffect } from "react";
import {Button,Container} from '@mui/material'
import {ThemeProvider} from '@mui/system'
import theme from './styles/theme'

//Components
import AppBar from "./components/appBar";
import ListItem from "./components/ListItems";



function App (){

    return (
        <div>
        <ThemeProvider theme={theme}>
        <Container 
        maxWidth='xl'
        sx={{
            background: '#212121'
        }}>
            {
                <AppBar/>
            }
            <Button>Test</Button>
            <Button>Test</Button>
            <Button>Test</Button>
            <Button>Test</Button>
            <Button>Test</Button>
            <Button>Test</Button>

        </Container>
        </ThemeProvider>
        <Fragment>
            <ListItem />
        </Fragment>
        </div>
    )
}

export default App;
