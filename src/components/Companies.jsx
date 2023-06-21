import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import logosImg from "../media/logos.png";

const Companies = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      marginBottom: theme.spacing(1)
    }
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(1)
    }
  }));

  return <Box style={{backgroundColor: "#ffffff",  paddingTop: "3rem"}}>
    <CustomContainer>
      <CustomBox>
        <Typography variant="body2" sx={{color: "#5d5855",
          fontSize: "40px",
          fontWeight: "bold",
          mt: 2}}>
          Награды Бугай Михаила Федоровича
        </Typography>
      </CustomBox>

    </CustomContainer>

    <Container sx={{display: "flex", justifyContent: "center", mt: 3, pb: 5}}>
      <img style={{width: '80%'}} src={logosImg} alt="logos"/>
    </Container>
  </Box>;
};

export default Companies;
