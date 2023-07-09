import { useTheme } from "@mui/material/styles";
import { AppbarContainer, AppbarHeader, MyList, StyledMenu, StyledLink } from "../styles/appbar";
import { ListItemButton, ListItemText, MenuItem } from "@mui/material";
import React, { useState } from "react";

export default function AppBar() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleCategoriesClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppbarContainer theme={theme}>
      <AppbarHeader>Dark Alley Deals</AppbarHeader>
      <MyList type="row">
        <ListItemButton>
        <StyledLink to="../views/places/Home.js" >
          <ListItemText primary="Home" />
        </StyledLink>
        </ListItemButton>
        <ListItemButton onClick={handleCategoriesClick}>
          <ListItemText primary="Categories" />
        </ListItemButton>
        <StyledMenu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorReference="anchorEl" // Ensure the menu is anchored to the button
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <StyledLink to="../views/places/Clothes.js" >
            <MenuItem onClick={handleMenuClose}>Clothes</MenuItem>
          </StyledLink>
          <StyledLink to="../views/places/Pets.js" >
          <MenuItem onClick={handleMenuClose}>Pets</MenuItem>
          </StyledLink>
          <StyledLink to="../views/places/Vehicles.js" >
          <MenuItem onClick={handleMenuClose}>Vehicles</MenuItem>
          </StyledLink>
          <StyledLink to="../views/places/Weapons.js" >
          <MenuItem onClick={handleMenuClose}>Weapons</MenuItem>
          </StyledLink>
        </StyledMenu>
        <ListItemButton>
        <StyledLink to="../views/places/Sell.js" >
          <ListItemText primary="Sell" />
        </StyledLink>
        </ListItemButton>
        <ListItemButton>
        <StyledLink to="../views/places/SignUp.js" >
          <ListItemText primary="Sign Up" />
        </StyledLink>
        </ListItemButton>
        <ListItemButton>
        <StyledLink to="../views/places/SignIn.js" >
          <ListItemText primary="Sign In" />
        </StyledLink>
        </ListItemButton>
      </MyList>
    </AppbarContainer>
  );
}

