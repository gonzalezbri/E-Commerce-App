import { Typography } from "@mui/material";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from "../styles/banner";


export default function Banner (){
    return(
        <BannerContainer>
            <BannerImage src="/images/banner.jpg"/>
        <BannerContent>
            <Typography variant="h6"> Dark Alley Collection</Typography>
            <BannerTitle variant="h2">NEW ITEMS</BannerTitle>
            <BannerDescription variant="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hendrerit gravida rutrum quisque non tellus. Viverra nibh cras pulvinar mattis.
            </BannerDescription>
        </BannerContent>
        </BannerContainer>
    )
}