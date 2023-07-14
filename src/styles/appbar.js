import { Typography,List } from '@mui/material/';
import {styled } from '@mui/material/styles';
import { Box } from "@mui/material";
import { Colors } from './theme';

//container
export const AppbarContainer = styled(Box)(() => ({    
    display: 'flex',
    marginTop: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px 0px',
    backgroundColor: '#212120'
}));

export const Div = styled(Box)(() => ({    
    position: 'sticky', 
    top: 0, 
    width: '100%', 
    zIndex: 1,
    backgroundColor: '#212120',
    padding: '0px 0px',
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '-1px'
    //alignItems: 'center'
}));
//header
export const AppbarHeader = styled(Typography)(() => ({
    padding: "4px",
    flexGrow: 1,
    fontSize: "4em",
    color: Colors.secondary,
}));

export const MyList = styled(List)(({type})=>({
    display: type === 'row' ? 'flex' : 'block',
    flexGrow:3,
    justifyContent:'center',
    alignItems:'center',
    color: Colors.secondary
}));