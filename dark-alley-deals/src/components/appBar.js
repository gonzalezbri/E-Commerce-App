import { useTheme } from "@mui/material/styles";
import { AppbarContainer, AppbarHeader, MyList, StyledMenu} from "../styles/appbar";
import { ListItemButton, ListItemText, MenuItem } from "@mui/material";
import React, { useState } from "react";


export default function AppBar() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleCategoriesClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppbarContainer theme={theme}>
      <AppbarHeader>Dark Alley Deals</AppbarHeader>
      <MyList type="row">
        <ListItemButton>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton onClick={handleCategoriesClick}>
          <ListItemText primary="Categories" />
        </ListItemButton>
        <StyledMenu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}>
          <MenuItem
            onClick={handleClose}>
            Clothes
          </MenuItem>
          <MenuItem
            onClick={handleClose}>
            Pets
          </MenuItem>
          <MenuItem
            onClick={handleClose}>
            Vehicles
          </MenuItem>
          <MenuItem
            onClick={handleClose}>
            Weapons
          </MenuItem>
        </StyledMenu>
        <ListItemButton>
          <ListItemText primary="Sell" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Sign Up" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Sign In" />
        </ListItemButton>
      </MyList>
    </AppbarContainer>
  );
}
/*import { useTheme } from "@mui/material/styles";
import { AppbarContainer, AppbarHeader, MyList } from "../styles/appbar";
import { ListItemButton, ListItemText, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { Colors } from "../styles/theme";

const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    backgroundColor: "black",
  },
}));

export default function AppBar() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleCategoriesClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppbarContainer theme={theme}>
      <AppbarHeader>Dark Alley Deals</AppbarHeader>
      <MyList type="row">
        <ListItemButton>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton onClick={handleCategoriesClick}>
          <ListItemText primary="Categories" />
        </ListItemButton>
        <StyledMenu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <MenuItem
            onClick={handleClose}
            style={{ color: Colors.secondary }}
          >
            Clothes
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            style={{ color: Colors.secondary }}
          >
            Pets
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            style={{ color: Colors.secondary }}
          >
            Vehicles
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            style={{ color: Colors.secondary }}
          >
            Weapons
          </MenuItem>
        </StyledMenu>
        <ListItemButton>
          <ListItemText primary="Sell" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Sign Up" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Sign In" />
        </ListItemButton>
      </MyList>
    </AppbarContainer>
  );
}
*/
