import { useTheme } from "@mui/material/styles";
import { AppbarContainer, AppbarHeader,MyList, Div } from "../styles/appbar";
import React, { useState } from 'react';
import { Toolbar, ListItemButton } from '@mui/material';
import SignInModal from './signIn';



export default function AppBar(){
    const theme = useTheme();
    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => {
        setOpenModal(true);
        };
    
    const RefreshPage = () => {
        window.location.reload(); // Refresh the page
        };

    return (
        <Div>
        <AppbarContainer position={"static"}>
            <ListItemButton onClick={RefreshPage}>
      <AppbarHeader>Dark Alley Deals </AppbarHeader>
      </ListItemButton>
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
        </Div>
      
    )
}