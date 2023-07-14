import { useTheme } from "@mui/material/styles";
import { AppbarContainer, AppbarHeader,MyList } from "../styles/appbar";
import React, { useState } from 'react';
import { Toolbar, ListItemButton } from '@mui/material';
import SignInModal from './signIn';
import { Link } from 'react-router-dom';



export default function AppBar(){
    const theme = useTheme();
    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => {
        setOpenModal(true);
        };

        return (
            <AppbarContainer position={"static"} sx={{background:'#212121'}}>
                <AppbarHeader>Dark Alley Deals</AppbarHeader>
                <Toolbar>
                <MyList type='row'>
                    <ListItemButton component={Link} to="/" primary='Home'>
                    Home
                    </ListItemButton>
                    <ListItemButton component={Link} to="/sell" primary='Sell'>
                    Sell
                    </ListItemButton>
                    <ListItemButton onClick={handleOpenModal} primary='SignIn'>
                    <SignInModal isOpen={openModal} onClose={() => setOpenModal(false)} />
                    </ListItemButton>
                    <ListItemButton component={Link} to="/cart" primary='Cart'>
                    Cart
                    </ListItemButton>
                </MyList>
                </Toolbar>
            </AppbarContainer>
        )
        }