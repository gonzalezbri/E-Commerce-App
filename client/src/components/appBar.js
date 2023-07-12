// import { useTheme } from "@mui/material/styles";
// import { AppbarContainer, AppbarHeader,MyList } from "../styles/appbar";
// import { ListItemButton } from "@mui/material";



// export default function AppBar(){
//     const theme = useTheme();
//     return (
//         <AppbarContainer>
//             <AppbarHeader>Dark Alley Deals</AppbarHeader>
//             <MyList type='row'>
//                 <ListItemButton primary='Home'>Home</ListItemButton>
//                 <ListItemButton primary='Sell'>Sell</ListItemButton>
//                 <ListItemButton primary='SignIn'>SignIn</ListItemButton>
//                 <ListItemButton primary='Cart'>Cart</ListItemButton>
//             </MyList>
//         </AppbarContainer>
//     )
// }

import React from 'react';
import styled from 'styled-components';

const AppBarContainer = styled.div`
  background-color: #000;
  padding: 10px;
`;

const AppbarHeader = styled.h1`
  color: #fff;
`;

const ListItemButton = styled.button`
  background-color: transparent;
  color: #fff;
  border: none;
  margin-right: 10px;
  cursor: pointer;
  font-size: 16px;
`;

export default function AppBar() {
  return (
    <AppBarContainer>
      <AppbarHeader>Dark Alley Deals</AppbarHeader>
      <div>
        <ListItemButton>Home</ListItemButton>
        <ListItemButton>Sell</ListItemButton>
        <ListItemButton>SignIn</ListItemButton>
        <ListItemButton>Cart</ListItemButton>
      </div>
    </AppBarContainer>
  );
}
