import React from "react";
import { Typography } from "@mui/material";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerTitle,
} from "../styles/banner";

const Banner: React.FC = () => {
  return (
    <BannerContainer>
      <BannerImage src="/images/banner.jpg" alt="Banner" />
      <BannerContent>
        <Typography variant="h6">Dark Alley Collection</Typography>
        <BannerTitle variant="h2">NEW ITEMS</BannerTitle>
        <BannerDescription variant="subtitle1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hendrerit gravida rutrum quisque non tellus. Viverra nibh cras pulvinar mattis.
        </BannerDescription>
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
