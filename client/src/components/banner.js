// import { Typography } from "@mui/material";
// import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from "../styles/banner";


// export default function Banner (){
//     return(
//         <BannerContainer>
//             <BannerImage src="/images/banner.jpg"/>
//         <BannerContent>
//             <Typography variant="h6"> Dark Alley Collection</Typography>
//             <BannerTitle variant="h2">NEW ITEMS</BannerTitle>
//             <BannerDescription variant="subtitle">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hendrerit gravida rutrum quisque non tellus. Viverra nibh cras pulvinar mattis.
//             </BannerDescription>
//         </BannerContent>
//         </BannerContainer>
//     )
// }


import React from 'react';
import './banner.css'; // Import the CSS file

export default function Banner() {
  return (
    <div className="banner-container">
      <img src="https://raw.githubusercontent.com/gonzalezbri/E-Commerce-App/brian/public/images/banner.jpg" alt="Banner" className="banner-image" />
      <div className="banner-content">
        <h6 className="banner-subtitle">Dark Alley Collection</h6>
        <h2 className="banner-title">NEW ITEMS</h2>
        <p className="banner-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hendrerit gravida rutrum quisque non tellus. Viverra nibh cras pulvinar mattis.
        </p>
      </div>
    </div>
  );
}


