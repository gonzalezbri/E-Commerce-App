import { useTheme } from "@mui/material/styles";
import { AppbarContainer, AppbarHeader,MyList } from "../styles/appbar";
import { ListItemButton } from "@mui/material";



export default function AppBar(){
    const theme = useTheme();
    return (
        <AppbarContainer>
            <AppbarHeader>Dark Alley Deals</AppbarHeader>
            <MyList type='row'>
                <ListItemButton primary='Home'>Home</ListItemButton>
                <ListItemButton primary='Sell'>Sell</ListItemButton>
                <ListItemButton primary='SignIn'>SignIn</ListItemButton>
                <ListItemButton primary='Cart'>Cart</ListItemButton>
            </MyList>
        </AppbarContainer>
    )
}