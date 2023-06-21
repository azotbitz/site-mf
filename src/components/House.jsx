import { Box, styled, Typography } from "@mui/material";
import React from "react";


const House = ({ img, price, address, bedrooms, bathrooms, space }) => {
  const HouseBox = styled(Box)(({ theme }) => ({
    maxWidth: 350,
    height: "450px",
    backgroundColor: "#969187",
    borderRadius: "1rem",
    margin: theme.spacing(0,2,0,2),
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(2,0,2,0),
    },
  }));

  // const InfoBox = styled(Box)(() => ({
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  // }));

  const ImgContainer = styled(Box)(() => ({
    width: "100%",
  }));

  return <HouseBox>
    <ImgContainer>
      <img src={img} alt="housePhoto" style={{width: "200px", height: "350px", maxWidth: "100%", borderRadius: "1rem"}} />
    </ImgContainer>

    <Box sx={{padding: "1rem"}}>
        <Typography variant="body2" sx={{fontWeight: "700", color: "#fff"}}>
          {price}
        </Typography>
      <Typography variant="body2" sx={{my: 2, color: "#fff"}}>
          {address} лет
      </Typography>
    </Box>

  </HouseBox>;
};

export default House;
