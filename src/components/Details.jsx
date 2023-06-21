import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import houseCard from "../media/houseCard.jpg";

const Details = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(10),
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const ImgContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const LargeText = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000",
    fontWeight: "700",
    [theme.breakpoints.down("md")]: {
      fontSize: "32px",
    },
  }));

  const SmallText = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    color: "#7b8087",
    fontWeight: "500",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  }));

  const TextFlexbox = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(7),
    padding: theme.spacing(7,5,0,5),
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: theme.spacing(5),
    },
  }));

  const Divider = styled("div")(({ theme }) => ({
    width: "13%",
    height: "5px",
    backgroundColor: "#000",
    [theme.breakpoints.down("md")]: {
      marginRight: "auto",
      marginLeft: "auto",
    },
  }));

  return <Box sx={{backgroundColor: "#ffcc6b", py: 10, minHeight: "100vh"}}>
    <Container sx={{marginTop: "5vh"}} component={"div"}>
      <CustomBox>
        <ImgContainer>
          <img src={houseCard} alt="houseCard" style={{maxWidth: "100%", borderRadius: "1rem", filter: "drop-shadow(2px 4px 6px black)"}}/>
        </ImgContainer>

        <Box>
          <Divider />
          <Typography sx={{fontSize: "32px", color: "#000", fontWeight: "700", my: 3}}>
            Вы нашли, что так долго искали
          </Typography>

          <Typography sx={{fontSize: "14px", color: "#5a6473", lineHeight: "27px"}}>
            Когда вы искусство проникает в вашу жизнь, многое меняется.
            Живопись, пожалуй, самое ценное произведение рук человека.
            Начиная учиться у Михаила Федоровича, вы делаете шаг навстречу новым ощущениям и эмоциям.
          </Typography>
        </Box>
      </CustomBox>

      <TextFlexbox>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
          <LargeText>40+</LargeText>
          <SmallText>Лет Опыта</SmallText>
        </Box>

        <Box sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
          <LargeText>50+</LargeText>
          <SmallText>Довольных Учеников</SmallText>
        </Box>

        <Box sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
          <LargeText>100+</LargeText>
          <SmallText>Проданных Картин</SmallText>
        </Box>

      </TextFlexbox>
    </Container>
  </Box>;
};

export default Details;
