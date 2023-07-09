import { Typography,List, Menu } from '@mui/material/';
import {styled } from '@mui/material/styles';
import { Box } from "@mui/material";
import { Colors } from './theme';
import { Link } from "react-router-dom";


//container
export const AppbarContainer = styled(Box)(() => ({    
    display: 'flex',
    marginTop: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2px 8px'
}));

//header
export const AppbarHeader = styled(Typography)(() => ({
    padding: "4px",
    flexGrow: 1,
    fontSize: "4em",
    color: Colors.secondary
}));

export const MyList = styled(List)(({type})=>({
    display: type === 'row' ? 'flex' : 'block',
    flexGrow:3,
    justifyContent:'center',
    alignItems:'center',
    color: Colors.secondary
}));

export const StyledMenu = styled(Menu)(({ theme }) => ({
    "& .MuiPaper-root": {
      backgroundColor: "black",
      color: Colors.secondary,
    },
  }));

  export const MenuItem = styled(Menu)(({ theme }) => ({
    "& .MuiPaper-root": {
      color: Colors.secondary,
    },
  }));

  export const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",
    color: Colors.secondary,
  }));
