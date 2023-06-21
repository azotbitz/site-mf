import { Box, styled, Typography } from "@mui/material";
import React from "react";

import buyIcon from "../media/buy_icon.png";
import sellIcon from "../media/sell_icon.png";
import rentIcon from "../media/rent_icon.png";

import CustomButton from "./CustomButton";
import {Link} from "react-router-dom";

const Guide = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "85%",
      marginTop: theme.spacing(2)
    },
  }));

  const GuidesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    width: "80%",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]: {

    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      marginBottom: "0",
      width: "0%",
    },
  }));

  const GuideBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "33%",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(2,0,2,0),
    },
  }));

  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

    return <a style={{textDecoration: "none"}} href={`mailto:${email}${params}`}>{children}</a>;
  };

  return <Box sx={{
    backgroundColor: "#5d5855",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    pt: 10,
    pb: 10,
    alignItems: "center"}}>
      <div style={{
        width: "5%",
        height: "5px",
        backgroundColor: "#fff",
        margin: "0 auto",
      }}>

      </div>
    <Typography variant="h3" sx={{
      fontSize: "35px",
      textAlign: "center",
      fontWeight: "bold",
      color: "#fff",
      my: 3}}>
      Как это работает?
    </Typography>

    <CustomBox>
      <Typography variant="body2" sx={{
        fontSize: "16px",
        fontWeight: "500",
        color: "#969187",
        textAlign: "center",
      }}>
        Вы долго искали где вас научат рисовать? Вы в правильном месте!
      </Typography>
    </CustomBox>

    <GuidesBox>
      <GuideBox>
        <img style={{filter: "invert(1)"}} src={buyIcon} alt="buyIcon"/>
        <Typography variant="body2" sx={{
          fontWeight: "500",
          color: "#fff",
          fontSize: "20px",
          textAlign: "center",
          my: 1,
        }}>
          Посмотрите как проходит обучение
        </Typography>
        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer", width: "max-content"}}>
            <Link style={{textDecoration: "none"}} to={"https://www.youtube.com/@bugaistudio"}><Typography variant="body2" sx={{fontWeight: "bold", fontSize: "14px", color: "#ffcc6b"}}>
              Посмотреть
            </Typography></Link>
        </Box>
      </GuideBox>

      <GuideBox>
        <img style={{filter: "invert(1)"}} src={rentIcon} alt="rentIcon"/>
        <Typography variant="body2" sx={{
          fontWeight: "500",
          color: "#fff",
          fontSize: "20px",
          textAlign: "center",
          my: 1,
        }}>
          Приходите на индивидуальные занятия
        </Typography>
        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer", width: "max-content"}}>
          <Mailto email="mail@bugai-mf.ru" subject="Хочу придти на индивидуальное занятие" body="Здравствуйте! Хочу придти к вам на индивидуальное занятие!">
          <Typography variant="body2" sx={{fontWeight: "bold", fontSize: "14px", color: "#ffcc6b"}}>
            Записаться
          </Typography>
          </Mailto>
        </Box>
      </GuideBox>

      <GuideBox>
        <img style={{filter: "invert(1)"}} src={sellIcon} alt="sellIcon"/>
        <Typography variant="body2" sx={{
          fontWeight: "500",
          color: "#fff",
          fontSize: "20px",
          textAlign: "center",
          my: 1,
        }}>
          Пройдите индивидуальную консультацию
        </Typography>
        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer", width: "max-content"}}>
          <Link style={{textDecoration: "none"}} to="tel:+7-985-955-9231"><Typography variant="body2" sx={{fontWeight: "bold", fontSize: "14px", color: "#ffcc6b"}}>
            Связаться
          </Typography>
          </Link>
        </Box>
      </GuideBox>
    </GuidesBox>

    <CustomBox>
      <Typography variant="body2" sx={{
        fontSize: "16px",
        fontWeight: "500",
        color: "#ffffff",
        textAlign: "center",
      }}>
        Остались какие-то вопросы? Напишите нам!
      </Typography>
    </CustomBox>

    <div style={{
      width: "5%",
      height: "5px",
      backgroundColor: "#fff",
      margin: "30px auto",
    }}>

    </div>

  <Mailto email="mail@bugai-mf.ru" subject="У меня возникли вопросы по обучению" body="Здравствуйте! У меня возникли некоторые вопросы по обучению живописи...">
  <CustomButton backgroundColor="#969187" color="#fff" buttonText="Написать на почту" guideBtn={true} />
  </Mailto>
  </Box>;
};

export default Guide;
