import { Box, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";

import news from "../media/news.png"
import news1 from "../media/news1.png"
import news2 from "../media/news2.png"
import news3 from "../media/news3.png"
import news4 from "../media/news4.png"
import news5 from "../media/news5.png"
import news6 from "../media/news6.png"
import news7 from "../media/news7.png"

const Hero = () => {
  const CustomBoxGeneral = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    gap: theme.spacing(50),
    marginTop: theme.spacing(3),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
      alignItems: "center",
      textAlign: "center",
      gap: theme.spacing(1),
      marginTop: theme.spacing(0)
    },
  }));
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(3),
    marginTop: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center"
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

  const TitleSecond = styled(Typography)(({ theme }) => ({
    fontSize: "40px",
    color: "#5d5855",
    fontWeight: "bold",
    margin: theme.spacing(1,0,4,0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
    }
  }));

  return <Box sx={{backgroundColor: "#ffcc6b", minHeight: "100vh"}}>
      <Container component={"div"} maxWidth="lg">
        <Navbar />
          <CustomBoxGeneral>
            <Box sx={{ flex: "1" }}>
              <Title variant="h1">
                  Новости
              </Title>
              <Typography variant="body2" sx={{ fontSize: "16px", color: "#969187", fontWeight: "500", mt: 5, mb: 4}}>
                Cайт художника и преподавателя по живописи Бугай Михаила Федоровича.
              </Typography>
            </Box>
            <Box sx={{flex: "1"}}>
              <img style={{width: "50%"}} src={news} alt="news"/>
            </Box>
          </CustomBoxGeneral>

        <div style={{
          width: "15%",
          height: "5px",
          backgroundColor: "#5d5855",
          margin: "30px auto",
        }}></div>

        <CustomBox>
        <Box sx={{flex: "1.25"}}>
          <TitleSecond variant="h6">
            Интересное о работе с графикой
          </TitleSecond>
          <Typography variant="body2" sx={{fontStyle: "italic", fontWeight: "bold", fontSize: "14px", color: "#5a6473", my: 4}}>
            Работа с графикой происходит постепенно и кропотливо.
            Многие склонны недооценивать графические рисунки.
            Они выглядят более скромно, чем цветастые живописные полотна, и часто создают впечатление неоконченности,
            потому что бумага остается окружающим изображаемое фоном, который совершенно необязательно перекрывать штрихами.
            Получается будто брошенный мастером, выходящий в пространство, зародыш искусства.
            Это может казаться необычным, но не зря же к графике обращались известные мастера.
          </Typography>
          <Box sx={{flex: "1",display: "flex", gap: "1rem"}}>
          <img style={{filter: 'drop-shadow(black 2px 4px 6px)', width: "48%"}} src={news1} alt="news1"/>
          <img style={{filter: 'drop-shadow(black 2px 4px 6px)', width: "48%"}} src={news2} alt="news2"/>
          </Box>
        </Box>
        </CustomBox>

        <div style={{
          width: "15%",
          height: "5px",
          backgroundColor: "#5d5855",
          margin: "30px auto",
        }}></div>

        <CustomBox>
          <Box sx={{flex: "1.25"}}>
            <TitleSecond variant="h6">
              О том, как рисовать храмы
            </TitleSecond>
            <Typography variant="body2" sx={{fontStyle: "italic", fontWeight: "bold", fontSize: "14px", color: "#5a6473", my: 4}}>
              Изображение архитектуры требует больших усилий. Для новичков это не так сложно, как портреты, например.
              Все потому, что нарисованные здания воспринимаются иначе, чем знакомые нам люди, и тут ошибки менее видны.
              Пользоваться линейкой или любыми другими инструментами, которые облегчают рисование ровных линии запрещаю!
              Учитесь рисовать от руки. Когда ваша рука наберется опыта и уверенности сможете использовать любые приемы.
            </Typography>
            <Box sx={{flex: "1",display: "flex", gap: "1rem"}}>
              <img style={{filter: 'drop-shadow(black 2px 4px 6px)', width: "31%"}} src={news3} alt="news3"/>
              <img style={{filter: 'drop-shadow(black 2px 4px 6px)', width: "31%"}} src={news4} alt="news4"/>
              <img style={{filter: 'drop-shadow(black 2px 4px 6px)', width: "31%"}} src={news5} alt="news5"/>
            </Box>
          </Box>
        </CustomBox>

        <div style={{
          width: "15%",
          height: "5px",
          backgroundColor: "#5d5855",
          margin: "30px auto",
        }}></div>

        <CustomBox>
          <Box sx={{flex: "1.25"}}>
            <TitleSecond variant="h6">
              Что круче акварельный или карандашный рисунок?
            </TitleSecond>
            <Typography variant="body2" sx={{fontStyle: "italic", fontWeight: "bold", fontSize: "14px", color: "#5a6473", my: 4}}>
              Для того, чтобы начать рисовать, мало бумаги, красок или карандаша.
              Нужна смелость, желание выразить себя.
              Причем такое, когда уже не можешь себя сдерживать.
              Если вы думаете с чего бы начать, то вам напрямую к Михаилу Федоровичу. Он расскажет о всех тонкостях мастерства!
            </Typography>
            <Box sx={{flex: "1",display: "flex", gap: "1rem"}}>
              <img style={{filter: 'drop-shadow(black 2px 4px 6px)', width: "48%"}} src={news6} alt="news6"/>
              <img style={{filter: 'drop-shadow(black 2px 4px 6px)', width: "48%"}} src={news7} alt="news7"/>
            </Box>
          </Box>
        </CustomBox>
      </Container>
    </Box>
};

export default Hero;
