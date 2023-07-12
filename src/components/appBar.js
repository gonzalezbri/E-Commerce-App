import { useTheme } from "@mui/material/styles";
import { AppbarContainer, AppbarHeader,MyList } from "../styles/appbar";
import React, { useState } from 'react';
import { Toolbar, ListItemButton } from '@mui/material';
import SignInModal from './signIn';



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
                <ListItemButton primary='Sell'>Sell</ListItemButton>
                <ListItemButton onClick={handleOpenModal} primary='SignIn'>
                <SignInModal isOpen={openModal} onClose={() => setOpenModal(false)} /></ListItemButton>
                <ListItemButton primary='Cart'>Cart</ListItemButton>
            </MyList>
            </Toolbar>
        </AppbarContainer>
    )
}