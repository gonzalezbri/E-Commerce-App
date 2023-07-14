import { useTheme } from "@mui/material/styles";
import { AppbarContainer, AppbarHeader,MyList } from "../styles/appbar";
import React, { useState, Fragment } from 'react';
import { Toolbar, ListItemButton, TextField, Button } from '@mui/material';
import SignInModal from './signIn';
import SellModal from "./sell";



export default function AppBar(){
    const theme = useTheme();
    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => {
        setOpenModal(true);
        };

    

    

    return (
        <AppbarContainer position={"static"}>
            <AppbarHeader>Dark Alley Deals</AppbarHeader>
            <Toolbar>
            <MyList type='row'>
                <ListItemButton primary='Home'>Home</ListItemButton>
                <ListItemButton onClick={handleOpenModal} primary='Sell'>
                    <SellModal isOpen={openModal} onClose={() => setOpenModal(false)}/>
                </ListItemButton>
                <ListItemButton onClick={handleOpenModal} primary='SignIn'>
                    <SignInModal isOpen={openModal} onClose={() => setOpenModal(false)} /></ListItemButton>
                <ListItemButton primary='Cart'>Cart</ListItemButton>
            </MyList>
            </Toolbar>

            
        </AppbarContainer>
    )
}