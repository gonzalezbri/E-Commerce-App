import { useTheme } from "@mui/material/styles";
import { AppbarContainer, AppbarHeader,MyList } from "../styles/appbar";
import { ListItemText } from "@mui/material";


export default function AppBar(){
    const theme = useTheme();
    return (
        <AppbarContainer>
            <AppbarHeader>Dark Alley Deals</AppbarHeader>
            <MyList type='row'>
                <ListItemText primary='Home'/>
                <ListItemText primary='Categories'/>
                <ListItemText primary='Sell'/>
                <ListItemText primary='SignUp'/>
                <ListItemText primary='SignIn'/>
            </MyList>
        </AppbarContainer>
    )
}