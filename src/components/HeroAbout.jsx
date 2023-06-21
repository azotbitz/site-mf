import { Box, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";

import heroImgAbout from "../media/pupil.png";


const Hero = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(3),
    marginTop: theme.spacing(3),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
      alignItems: "center",
      textAlign: "center",
      gap: theme.spacing(1),
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#5d5855",
    fontWeight: "bold",
    margin: theme.spacing(4,0,4,0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    }
  }));

  return <Box sx={{backgroundColor: "#ffcc6b", minHeight: "100vh"}}>
      <Container component={"div"} maxWidth="lg">
        <Navbar />
          <CustomBox>
            <Box sx={{ flex: "1.25" }}>
              <Title variant="h1">
                  О нас
              </Title>
              <Typography variant="body2" sx={{ fontSize: "16px", color: "#969187", fontWeight: "500", mt: 5, mb: 4}}>
                Cайт художника и преподавателя по живописи Бугай Михаила Федоровича.
              </Typography>
              <Typography variant="body2" sx={{fontSize: "30px", color: "#5a6473", my: 4, fontWeight: "bold"}}>
                Краткая история о том, чем и как, уже на протяжении более 40 лет, занимается Михаил Федорович.
              </Typography>
            </Box>
            <Box sx={{flex: "1.5"}}>
              <img src={heroImgAbout} alt="heroImg" style={{maxWidth: "100%", marginTop: "1rem", marginBottom: "1rem"}}/>
            </Box>
          </CustomBox>
      </Container>
    </Box>
};

export default Hero;
