import { useTheme } from "@mui/material/styles";
import { AppbarContainer, AppbarHeader, MyList, StyledLink, MyButton, MyTextField } from "../styles/appbar";
import { ListItemButton, ListItemText } from "@mui/material";
import React, { useState } from "react";

export default function AppBar() {
  const theme = useTheme();
  const [signInOpen, setSignInOpen] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignInClick = () => {
    setSignInOpen(false);
  };

  const handleHomeClick = () => {
    window.location.reload(); // Refresh the page
  };

  const handleSignInSubmit = (event) => {
    event.preventDefault();
    // Perform sign-in logic with username and password
    console.log("Signing in...");
    // Reset form
    setUsername("");
    setPassword("");
    setSignInOpen(false);
  };

  return (
    <AppbarContainer theme={theme}>
      <ListItemButton onClick={handleHomeClick}>
      <AppbarHeader>Dark Alley Deals </AppbarHeader>
      </ListItemButton>
      <MyList type="row">
        <ListItemButton onClick={handleHomeClick}>
          <StyledLink to="">
            <ListItemText primary="Home" />
          </StyledLink>
        </ListItemButton>
        <ListItemButton>
          <StyledLink to="../views/Sell.js">
            <ListItemText primary="Sell" />
          </StyledLink>
        </ListItemButton>
        {!signInOpen && (
          <ListItemButton onClick={handleSignInClick}>
            <ListItemText primary="Sign In" />
          </ListItemButton>
        )}
      </MyList>
      {signInOpen && (
        <form onSubmit={handleSignInSubmit}>
          <MyTextField
            label="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
          <MyTextField
            label="Password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <MyButton type="submit">Sign In</MyButton>
        </form>
      )}
    </AppbarContainer>
  );
}
