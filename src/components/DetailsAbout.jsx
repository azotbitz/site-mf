import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import houseCard from "../media/biography.png";

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
    width: "30%",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
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
    marginTop: theme.spacing(5),
    padding: theme.spacing(7,5,0,5),
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: theme.spacing(5),
      marginTop: theme.spacing(1),
    },
  }));

  const Divider = styled("div")(({ theme }) => ({
    marginTop: theme.spacing(3),
    width: "13%",
    height: "5px",
    backgroundColor: "#000",
    [theme.breakpoints.down("md")]: {
      marginRight: "auto",
      marginLeft: "auto",
    },
  }));

  return <Box sx={{backgroundColor: "#ffffff", py: 5, minHeight: "100vh"}}>
    <Container sx={{marginTop: "5vh"}} component={"div"}>
      <CustomBox>
        <ImgContainer>
          <img src={houseCard} alt="houseCard" style={{maxWidth: "100%", borderRadius: "1rem", filter: "drop-shadow(2px 4px 6px black)"}}/>
        </ImgContainer>

        <Box sx={{width: "100%"}}>

          <Typography sx={{fontSize: "32px", color: "#000", fontWeight: "700", my: 3}}>
            Биография
          </Typography>

          <Typography sx={{fontSize: "12px", color: "#5a6473", lineHeight: "27px"}}>
            Бугай Михаил Фёдорович (род. в Краснодаре): Художник-живописец станковой и монументальной живописи, художник-иллюстратор, дизайнер, оформитель интерьеров.
            Член Творческого союза художников России (ТСХР) и Международной Федерации Художников (МФР).
            Окончил Краснодарское Художественное училище (1968г.) по специальности : художник-декоратор,
            окончил Московский Государственный Академический Художественный институт им. Сурикова по специальности: художник-график.
            Работал в мастерской книжной графики народного художника РСФСР и лауреата Сталинской премии Бориса Александровича Дехтерёва.
            Долгие годы успешно сотрудничал с такими известными издательствами как "Молодая Гвардия" и "Детская Литература",
            делая иллюстрации к известным произведениям русских классиков.
          </Typography>

          <Divider />

          <Typography sx={{fontSize: "32px", color: "#000", fontWeight: "700", my: 3}}>
            Достижения
          </Typography>

          <Typography sx={{fontSize: "12px", color: "#5a6473", lineHeight: "27px"}}>
            Награжден медалями и грамотами за заслуги в области искусства:
            ВЦСПС, орден пр. Даниила Московского, награжден патриархом Алексеем II, лауреат международных конкурсов и др.
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
