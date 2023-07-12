import {styled} from '@mui/system';
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from '../theme/index';

export const Product = styled(Box)(()=> ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
}))

export const ProductImage = styled("img")(({ src }) => ({
    src: `url(${src})`,
    width: "100%",
    background: Colors.light_gray,
    padding: '10px',
}));

export const ProductMetaWrapper = styled(Box)(() => ({
    padding: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}));

export const ProductAddToCart = styled(Button, {
    shouldForwardProp: (prop) => prop !== "show",
    })(({ show }) => ({
    width: "120px",
    fontSize: "12px",
    background: Colors.secondary,
    opacity: 0.9,
}));