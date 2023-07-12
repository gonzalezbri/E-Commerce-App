import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Colors } from "../styles/theme/index";



export const PromoContainer = styled(Box)(()=>({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 0px 20px 0px",
    overflow: "hidden",
    background: Colors.primary,
}));

export const MessageText = styled(Typography)(() => ({
    fontFamily: '"Roboto","Helvetica","Arial",sans-serif;',
    color: Colors.white,
    fontSize: "2rem",
}));