import { Typography,List, Button } from '@mui/material/';
import {styled } from '@mui/material/styles';
import { Box } from "@mui/material";
import { Colors } from './theme';
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";


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

  export const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",
    color: Colors.secondary,
  }));

export const MyTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
  "& .MuiOutlinedInput-input": {
    color: "white", // Text color
  },
  "& .MuiInputLabel-root": {
    color: "white", // Label color
  },
}));

  export const MyButton = styled(Button)(({ theme }) => ({
    textDecoration: "none",
    color: Colors.secondary,
  }));
