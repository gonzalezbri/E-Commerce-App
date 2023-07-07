import { Box, Typography} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../styles/theme/index";


export const BannerContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    padding: "0px 0px",
    background: Colors.light_gray,
    // backgroundImage: `url(/images/banner/banner.png)`,
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "center",
    }));

    export const BannerContent = styled(Box)(() => ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        maxWidth: 420,
        padding: "30px",
    }));

    export const BannerTitle = styled(Typography)(({ theme }) => ({
        lineHeight: 1.5,
        fontSize: "72px",
        marginBottom: "20px",
        [theme.breakpoints.down('sm')]: {
            fontSize: '42px',    
        }
    }));


    export const BannerDescription = styled(Typography)(({ theme }) => ({
        lineHeight: 1.25,
        letterSpacing: 1.25,
        marginBottom: "3em",
        [theme.breakpoints.down("md")]: {
            lineHeight: 1.15,
            letterSpacing: 1.15,
            marginBottom: "1.5em",
        },
    }));