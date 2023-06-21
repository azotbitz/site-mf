import { Button, styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import homeIllustration from "../media/illustration.png";
import CustomButton from "./CustomButton";
import {Link} from "react-router-dom";

const GetStarted = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    backgroundColor: "#c86e39",
    display: "flex",
    height: "416px",
    borderRadius: "15px",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(3,3,0,3),
      marginTop: "1rem",
      marginBottom: "1rem",
      width: "90%",
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(10,0,10,0),
    margin: theme.spacing(0,2,0,2),
    [theme.breakpoints.down("md")]: {
      padding: "0",
    },
  }));

  return <CustomBox>
    <CustomContainer>
      <Box>
        <Typography sx={{color: "#fff", fontSize: "20px", fontWeight: "700"}}>
          Открывающиеся Возможности
        </Typography>
        <Typography sx={{color: "#e3e2e2", fontSize: "12px", fontWeight: "500", my: 3}}>
          Вас научат всему, что надо знать о живописи
        </Typography>

        <Link to={"/contact"} style={{textDecoration: "none"}}><CustomButton backgroundColor="#fff" color="#5d5855"
                                                                           buttonText="Начните сейчас" getStartedBtn={true}/></Link>
      </Box>
      <img src={homeIllustration} alt="illustration" style={{maxWidth: "100%"}}/>
    </CustomContainer>
  </CustomBox>;
};

export default GetStarted;
