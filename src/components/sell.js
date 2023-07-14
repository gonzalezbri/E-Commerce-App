import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import {Colors} from "../styles/theme/index"

const SellModal = ({isOpen, onClose}) => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpen = () => {
        setModalOpen(true);
    };

    const handleClose = () => {
        setModalOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Implement your submit logic here
    };


    return (
        <div>
            <Button variant="outlined" color="secondary"  onClick={handleOpen}>
                Sell
            </Button>
            <Dialog  open={modalOpen} onClose={handleClose}>
                <DialogTitle style={{backgroundColor: '#212120', color: '#d1adcc'}}>Sell</DialogTitle>
                <DialogContent style={{backgroundColor: '#c9c9c9'}}>
                    <form onSubmit={handleSubmit}>
                    <TextField
                        label="Product Name"
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Product Image"
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Product Description"
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Product Price"
                        fullWidth
                        margin="normal"
                    />
                    </form>
                </DialogContent>
                <DialogActions style={{backgroundColor: '#212120'}}>
                    <Button onClick={handleClose} color="secondary">
                    Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="secondary">
                    Submit
                    </Button>
                </DialogActions>
        </Dialog>
        </div>
    )
};

export default SellModal;