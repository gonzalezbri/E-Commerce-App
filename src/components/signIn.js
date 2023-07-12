import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import {Colors} from "../styles/theme/index"

const SignInModal = ({ isOpen, onClose }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleOpen = () => {
        setModalOpen(true);
    };

    const handleClose = () => {
        setModalOpen(false);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Implement your sign-in logic here
      console.log('Email:', email);
      console.log('Password:', password);
    };
  
    return (
      <div>
        <Button variant="outlined" color="secondary" onClick={handleOpen}>
          Sign In
        </Button>
        <Dialog open={modalOpen} onClose={handleClose}>
          <DialogTitle>Sign In</DialogTitle>
          <DialogContent>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                fullWidth
                margin="normal"
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSubmit} color="primary">
              Sign In
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };
  
  export default SignInModal;
  