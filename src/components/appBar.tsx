import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { AppbarContainer, AppbarHeader, MyList } from '../styles/appbar';
import { Toolbar, ListItemButton } from '@mui/material';
import SignInModal from './SignIn';

interface AppBarProps {
}

const AppBar: React.FC<AppBarProps> = () => {
  const theme = useTheme();
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <AppbarContainer position="static">
      <AppbarHeader>Dark Alley Deals</AppbarHeader>
      <Toolbar>
        <MyList type="row">
          <ListItemButton>
            {/* Add a button or icon to trigger the modal */}
            <span onClick={handleOpenModal}>Sign In</span>
          </ListItemButton>
        </MyList>
      </Toolbar>
      {/* Render the SignInModal component conditionally */}
      {openModal && <SignInModal isOpen={openModal} onClose={() => setOpenModal(false)} />}
    </AppbarContainer>
  );
};

export default AppBar;
