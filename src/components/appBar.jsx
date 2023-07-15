import { useTheme } from "@mui/material/styles";
import { AppbarContainer, AppbarHeader,MyList,Div } from "../styles/appbar";
import React, { useState } from 'react';
import { Toolbar, ListItemButton } from '@mui/material';
import SignInModal from './signIn';
import { Link } from 'react-router-dom';
import SellModal from "./sell";



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
            <AppbarContainer position={"static"} sx={{background:'#212121'}}>
                <ListItemButton onClick={RefreshPage}>
                <AppbarHeader>Dark Alley Deals</AppbarHeader></ListItemButton>
                <Toolbar>
                <MyList type='row'>
                    <ListItemButton component={Link} to="/" primary='Home'>
                    Home
                    </ListItemButton>
                    <ListItemButton onClick={handleOpenModal} primary='Sell'>
                    <SellModal isOpen={openModal} onClose={() => setOpenModal(false)}/>
                    </ListItemButton>
                </MyList>
                </Toolbar>
            </AppbarContainer>
            </Div>
        )
        }